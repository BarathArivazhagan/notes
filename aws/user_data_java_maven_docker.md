#### User data to setup java, maven, docker for EC2 instance

```sh
#!/bin/bash

exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

yum update -y 
yum install -y git docker java-1.8.0-openjdk-devel
curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose
wget http://apache.mirrors.tds.net/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz && tar -xzf apache-maven-3.6.0-bin.tar.gz &&
mv apache-maven-3.6.0-bin /usr/local/bin/
export PATH=$PATH:/usr/local/bin/

```
