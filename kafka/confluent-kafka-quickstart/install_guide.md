### Setting up confluent kafka in linux

```
yum install -y java-1.8.0-openjdk-devel
wget http://packages.confluent.io/archive/3.0/confluent-3.0.0-2.11.zip
unzip confluent-3.0.0-2.11.zip
cd confluent-3.0.0
nohup ./bin/zookeeper-server-start ./etc/kafka/zookeeper.properties >/dev/null 2>&1 
nohup ./bin/kafka-server-start ./etc/kafka/server.properties >/dev/null 2>&1 
nohup ./bin/control-center-start /tmp/control-center.properties >/dev/null 2>&1 
```


### Setting up NIFI as docker container

```
yum install -y docker
systemctl start docker
docker run --name nifi -p 8080:8080 -d apache/nifi:latest
```
