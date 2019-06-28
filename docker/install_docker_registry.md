## Guide to setup private docker registry

#### Local docker private registry

- Deploy the registry:2 image as a container
```sh
$ docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  registry:2
```
- Tag the image to be pushed

```sh
$ docker pull nginx
$ docker tag nginx localhost:5000/nginx
$ docker push localhost:5000/nginx
```

- Verify the images

```
# To list all the repositories
$ curl http://localhost:5000/v2/_catalog

# To list a particular repository with tags
$ curl http://localhost:5000/v2/nginx/tags/list
```


#### Local docker private registry with volume mount

- Deploy the registry:2 image as a container with volume mount

```sh
$ docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  -v /mnt/registry:/var/lib/registry \
  registry:2
```
- Tag the image to be pushed

```sh
$ docker pull nginx
$ docker tag nginx localhost:5000/nginx
$ docker push localhost:5000/nginx
```

- Rerun the container to test the volume

```sh
$ docker stop regsitry && docker rm regsitry
$ docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  -v /mnt/registry:/var/lib/registry \
  registry:2
```

- Verify the images

```
# To list all the repositories
$ curl http://localhost:5000/v2/_catalog

# To list a particular repository with tags
$ curl http://localhost:5000/v2/nginx/tags/list
```

#### Deploying docker private registry with TLS/SSL

- Generate a certificate

```sh
$ mkdir -p certs
$ openssl req \
  -newkey rsa:4096 -nodes -sha256 -keyout certs/domain.key \
  -x509 -days 365 -out certs/domain.crt
```

- Deploy the registry:2 image as a container with volume mount

```sh
$ docker run -d \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -p 443:443 \
  registry:2
```

- Tag the image to be pushed

```sh
$ docker pull nginx
$ docker tag nginx localhost:443/nginx
$ docker push localhost:443/nginx
```
- Verify the images

```
# To list all the repositories
$ curl https://localhost:443/v2/_catalog --insecure

# To list a particular repository with tags
$ curl https://localhost:443/v2/nginx/tags/list --insecure
```



#### Deploying docker private registry with TLS/SSL and S3 backend

- Generate a certificate

```sh
$ mkdir -p certs
$ openssl req \
  -newkey rsa:4096 -nodes -sha256 -keyout certs/domain.key \
  -x509 -days 365 -out certs/domain.crt
```

- Deploy the registry:2 image as a container with s3 backend

```sh
$  docker run -d \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -e REGISTRY_STORAGE=s3 \
  -e REGISTRY_STORAGE_S3_REGION=us-east-1 \
  -e REGISTRY_STORAGE_S3_BUCKET=barath-docker-registry \
  -p 443:443 \
  registry:2
```

- Tag the image to be pushed

```sh
$ docker pull nginx
$ docker tag nginx localhost:443/nginx
$ docker push localhost:443/nginx
```
- Verify the images

```
# To list all the repositories
$ curl https://localhost:443/v2/_catalog --insecure

# To list a particular repository with tags
$ curl https://localhost:443/v2/nginx/tags/list --insecure
```

## Basic Authentication with private registry

- Generate basic credentials

```sh
$ mkdir auth
$ docker run \
  --entrypoint htpasswd \
  registry:2 -Bbn testuser testpassword > auth/htpasswd
```

- Mount auth as volume mount

```sh
 docker run -d \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -v "$(pwd)"/auth:/auth \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -e REGISTRY_STORAGE=s3 \
  -e REGISTRY_STORAGE_S3_REGION=us-east-1 \
  -e REGISTRY_STORAGE_S3_BUCKET=barath-docker-registry \ 
  -e "REGISTRY_AUTH=htpasswd" \
  -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" \
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
  -p 443:443 \
  registry:2
```

- Validate login

```sh
$ docker login localhost:443
$ docker login localhost:443
Username: testuser
Password: 
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

#### Testing an insecure registry

- Add an entry in /etc/docker/daemon.json

```
{
 "insecure-registries": ["<<REPLACE_WITH_HOST_NAME>>:443"]
}
```

