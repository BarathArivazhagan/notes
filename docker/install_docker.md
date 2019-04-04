### Setting up Docker

- Download the packages

```
$ sudo yum install docker -y  
$ sudo systemctl start docker  
```

<b>Note</b>: In RHEL7,  enable extras

```
$ sudo yum-config-manager --enable "Red Hat Enterprise Linux Server 7 Extra(RPMs)"
$ sudo yum install docker -y
```
- Start the docker daemon

```
$ sudo systemctl start docker
```

- Verify the installation

```
$ sudo docker version
```
