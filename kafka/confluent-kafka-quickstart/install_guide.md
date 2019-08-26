### Setting up confluent kafka in linux

```
wget http://packages.confluent.io/archive/3.0/confluent-3.0.0-2.11.zip
unzip confluent-3.0.0-2.11.zip
cd confluent-3.0.0
nohup ./bin/zookeeper-server-start ./etc/kafka/zookeeper.properties >/dev/null 2>&1 
nohup ./bin/kafka-server-start ./etc/kafka/server.properties >/dev/null 2>&1 
nohup ./bin/control-center-start /tmp/control-center.properties >/dev/null 2>&1 
```
