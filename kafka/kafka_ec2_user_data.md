#!/bin/bash
yum update -y 
yum install -y git docker java-1.8.0-openjdk-devel
cd /opt
wget http://apache.claz.org/kafka/2.2.0/kafka_2.12-2.2.0.tgz
cd /opt/
tar -xzf kafka_2.12-2.2.0.tgz
