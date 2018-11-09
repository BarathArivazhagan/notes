## Install minikube in macOS

```
$ brew cask install minikube
```

## To update minikube to recent version

```
$ brew cas reinstall minikube
```

## To start minikube 

```
$ minikube start

Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```

## To get all the resources from all the namespaces

```
$ kubectl get all --all-namespaces

kubectl get all --all-namespaces  
NAMESPACE     NAME                                       READY     STATUS             RESTARTS   AGE
kube-system   po/coredns-c4cffd6dc-jpcb5                 0/1       CrashLoopBackOff   10         21m
kube-system   po/etcd-minikube                           1/1       Running            0          2m
kube-system   po/kube-addon-manager-minikube             1/1       Running            1          21m
kube-system   po/kube-apiserver-minikube                 1/1       Running            0          2m
kube-system   po/kube-controller-manager-minikube        1/1       Running            0          2m
kube-system   po/kube-dns-86f4d74b45-b84g5               3/3       Running            4          21m
kube-system   po/kube-proxy-rjtnt                        1/1       Running            0          1m
kube-system   po/kube-scheduler-minikube                 1/1       Running            1          21m
kube-system   po/kubernetes-dashboard-6f4cfc5d87-lgr6j   1/1       Running            3          21m
kube-system   po/storage-provisioner                     1/1       Running            3          21m

NAMESPACE     NAME                       CLUSTER-IP       EXTERNAL-IP   PORT(S)         AGE
default       svc/kubernetes             10.96.0.1        <none>        443/TCP         21m
kube-system   svc/kube-dns               10.96.0.10       <none>        53/UDP,53/TCP   21m
kube-system   svc/kubernetes-dashboard   10.109.224.238   <none>        80/TCP          21m

NAMESPACE     NAME                          DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
kube-system   deploy/coredns                1         1         1            0           21m
kube-system   deploy/kube-dns               1         1         1            1           21m
kube-system   deploy/kubernetes-dashboard   1         1         1            1           21m

NAMESPACE     NAME                                 DESIRED   CURRENT   READY     AGE
kube-system   rs/coredns-c4cffd6dc                 1         1         0         21m
kube-system   rs/kube-dns-86f4d74b45               1         1         1         21m
kube-system   rs/kubernetes-dashboard-6f4cfc5d87   1         1         1         21m
```
