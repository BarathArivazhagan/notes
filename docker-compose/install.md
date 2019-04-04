### Install docker compose in linux 

- Download the package

```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

$ sudo chmod +x /usr/local/bin/docker-compose
```

- Add it to the PATH variable

```
$ export PATH=$PATH:/usr/local/bin/
```
