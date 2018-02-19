# Sonar installation in linux

This installation guide walks through installation of sonarqube-6.7.1 in AWS EC2 centos AMI machine.

* Download the package 

  https://www.sonarqube.org/downloads/

```
$ wget https://sonarsource.bintray.com/Distribution/sonarqube/sonarqube-6.7.1.zip
```

* Unzip the package

```
unzip sonarqube-6.7.1.zip
```
* Export SONAR_HOME

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

* To connect to external DB, modify the configuration details

```
$ vi $SONAR_HOME/conf/sonar.properties
```

  configure below properties
 
  <table>
  <th>Properties</th>
  <tr><td>sonar.jdbc.username=USERNAME</td></tr>
   <tr><td>sonar.jdbc.password=PASSWORD</td></tr>
   <tr><td>sonar.jdbc.url=JDBCURL</td></tr>
  </table>

* Restart the process on any modification to the below process

```
$ $SONAR_HOME/bin/linux-x86-64/sonar.sh restart
```
