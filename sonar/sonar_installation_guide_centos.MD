# Sonar installation in linux

This installation guide walks through installation of sonarqube-6.7.1 in AWS EC2 centos AMI machine.

* Download the package 

  https://www.sonarqube.org/downloads/

```
$ wget https://sonarsource.bintray.com/Distribution/sonarqube/sonarqube-6.7.1.zip
```

* Unzip the package

```
$ unzip sonarqube-6.7.1.zip
```
* Export SONAR_HOME variable

```
$ export SONAR_HOME=/home/centos/sonarqube-6.7.1 # export as per the directory used in your case
```

* Start the sonar process with embedded H2 DB(only for evalaution purpose)

```
$ $SONAR_HOME/bin/linux-x86-64/sonar.sh start
```

* Configuration properties are located in below path 

```
$ $SONAR_HOME/conf/sonar.properties
```

* To connect to external DB, modify the configuration details in sonar.properties

```
$ vi $SONAR_HOME/conf/sonar.properties
```
  <table>
  <th>Properties</th>
  <tr><td>sonar.jdbc.username=USERNAME</td></tr>
   <tr><td>sonar.jdbc.password=PASSWORD</td></tr>
   <tr><td>sonar.jdbc.url=JDBCURL</td></tr>
  </table>


* Restart the process on any modification to the properties

```
$ $SONAR_HOME/bin/linux-x86-64/sonar.sh restart
```

* Locate http://IP-ADDR:9000 to view sonar homepage<br>
  Login as <b>admin/admin</b>

#### How to change the ip address and port ? 

* Edit the following properties in sonar.properties

```
# Binding IP address. For servers with more than one IP address, this property specifies which
# address will be used for listening on the specified ports.
# By default, ports will be used on all IP addresses associated with the server.
sonar.web.host=0.0.0.0

# Web context. When set, it must start with forward slash (for example /sonarqube).
# The default value is root context (empty value).
#sonar.web.context=
# TCP port for incoming HTTP connections. Default value is 9000.
sonar.web.port=9000
```
  
 #### Reference links
 
 <b>[SonarQube](https://docs.sonarqube.org/display)</b>
