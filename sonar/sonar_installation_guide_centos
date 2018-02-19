# Sonar installation in linux

* Download the package 

https://www.sonarqube.org/downloads/

```
$ wget https://sonarsource.bintray.com/Distribution/sonarqube/sonarqube-6.7.1.zip
```

* Unzip the package

```
unzip sonarqube-6.7.1.zip
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

set below properties

sonar.jdbc.username=<USERNAME>
sonar.jdbc.password=<PASSWORD>
sonar.jdbc.url=<JDBCURL>

* Restart the process on any modification to the below process

```
$ $SONAR_HOME/bin/linux-x86-64/sonar.sh restart
```
