

# How to Start Kubernetes services in AWS EC2 instance(Centos 7 AMI)? 

To start the services in Kubernetes Master: 

for SERVICES in etcd kube-apiserver kube-controller-manager kube-scheduler flanneld; do
    systemctl restart $SERVICES
    systemctl enable $SERVICES
    systemctl status $SERVICES
done

To start the services in Kubernetes node? 

for SERVICES in kube-proxy kubelet flanneld docker; do
    systemctl restart $SERVICES
    systemctl enable $SERVICES
    systemctl status $SERVICES
done



