# Sonar installation guide using docker 

This installation guide walks through installation of sonarqube using docker image 

* To pull the sonar image

```
$ docker pull sonarqube
```
* Run the docker image with embedded database H2

```
$ docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

* Run the docker image with database configuration

```

$ docker run -d --name sonarqube \
    -p 9000:9000 -p 9092:9092 \
    -e SONARQUBE_JDBC_USERNAME=sonar \
    -e SONARQUBE_JDBC_PASSWORD=sonar \
    -e SONARQUBE_JDBC_URL=jdbc:postgresql://localhost/sonar \
    sonarqube
```

#### Reference links

<b>[Sonarqube docker](https://hub.docker.com/_/sonarqube/) </b>
