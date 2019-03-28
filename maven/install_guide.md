#### Setup Maven in linux

- Download the package

```
$ wget http://apache.mirrors.tds.net/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz
$ tar -xzf apache-maven-3.6.0-bin.tar.gz
$ export PATH=$PATH:$PWD/apache-maven-3.6.0/bin
```

- Verify the installation


```
$ mvn version
```
