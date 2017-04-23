

### Installation of Docker engine 1.12.6 in CentOS


STEP 1 : sudo yum install -y yum-utils

STEP 2: https://yum.dockerproject.org/repo/main/centos/7/Packages/

install : 
    
    * docker-engine: wget https://yum.dockerproject.org/repo/main/centos/7/Packages/docker-engine-1.12.6-1.el7.centos.x86_64.rpm

    * docker-engine-selinux : wget https://yum.dockerproject.org/repo/main/centos/7/Packages/docker-engine-selinux-1.12.6-1.el7.centos.noarch.rpm

STEP 3: sudo yum install /path/to/rpm

 ``` sudo yum install docker-engine-1.12.6-1.el7.centos.x86_64.rpm docker-engine-selinux-1.12.6-1.el7.centos.noarch.rpm ```


STEP 4: Start the docker 

sudo systemctl start docker

STEP 5: Run the example :

  sudo docker run hello-world
 
