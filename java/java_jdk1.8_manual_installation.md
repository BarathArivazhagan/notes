### jdk1.8 installation

#### steps :

- Make a directory where you want to install Java. For global access (for all users) install it preferably in the directory /opt/java.
mkdir /opt/java && cd /opt/java

- Download java1.8 from oracle download page for linux 32/64 bit distribution:

```
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u45-b14/jdk-8u45-linux-i586.tar.gz" 3. Once downloaded:

tar -zxvf jdk-8u45-linux-i586.tar.gz	[For 32-bit Systems]

tar -zxvf jdk-8u45-linux-x64.tar.gz	[For 64-bit Systems]
```

- Next, move to the extracted directory and use command update-alternatives to tell system where java and its executables are installed.
```
update-alternatives --install /usr/bin/java java /opt/java/jdk1.8.0_45/bin/java 100

update-alternatives --config java`

update-alternatives --install /usr/bin/javac javac /opt/java/jdk1.8.0_45/bin/javac 100

update-alternatives --config javac`

update-alternatives --install /usr/bin/jar jar /opt/java/jdk1.8.0_45/bin/jar 100

update-alternatives --config jar`
```

- Setting up Java Environment Variables.
```
export JAVA_HOME=/opt/java/jdk1.8.0_45/

export JRE_HOME=/opt/java/jdk1.8.0._45/jre

export PATH=$PATH:/opt/java/jdk1.8.0_45/bin:/opt/java/jdk1.8.0_45/jre/bin
```
