### Setting up CloudBees Jenkins distribution

```
sudo yum install -y java-1.8.0-openjdk-devel git 
sudo wget -O /etc/yum.repos.d/cloudbees-jenkins-distribution.repo https://downloads.cloudbees.com/cloudbees-jenkins-distribution/rolling/rpm/cloudbees-jenkins-distribution.repo
sudo rpm --import https://downloads.cloudbees.com/cloudbees-jenkins-distribution/rolling/rpm/cloudbees.com.key
sudo yum install -y cloudbees-jenkins-distribution
sudo chkconfig --add cloudbees-jenkins-distribution
sudo /etc/init.d/cloudbees-jenkins-distribution start
```
