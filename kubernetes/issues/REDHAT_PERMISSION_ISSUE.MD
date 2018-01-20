
## Issue: 

```
pod, skipping: failed to "StartContainer" for "POD" with ErrImagePull: "image pull failed for registry.access.redhat.com/rhel7/pod-infrastructure:latest, this may be because there are no credentials on this request. details: (open /etc/docker/certs.d/registry.access.redhat.com/redhat-ca.crt: no such file or directory)"
```

## Solution: 

```
$ yum install subscription-manager

```

```
$ vi /etc/kubernetes/apiserver
//Edit the permission 
# default admission control policies
#KUBE_ADMISSION_CONTROL="--admission-control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ServiceAccount,ResourceQuota"
KUBE_ADMISSION_CONTROL=""
```


## Reference:

https://stackoverflow.com/questions/47015810/error-syncing-pod-failed-for-registry-access-redhat-com-kubernetes
