
### Some useful kubernetes kubectl commands for reference:

### Kubectl:

#### Node:

| command                    | description                       |
| -------------------------- | --------------------------------- |
| <b>kubectl get nodes</b>   | To get the kubernetes nodes       |


#### Deployment:

| command                           | description                       |
| --------------------------------- | --------------------------------- |
| <b>kubectl get deployment</b>     | To get the kubernetes deployments |


#### Service:


| command                           | description                       |
| --------------------------------- | --------------------------------- |
| <b>kubectl get services</b>       |  To get kubernetes services       |
| <b>kubectl get svc</b>            | To get kubernetes services(short form)|

#### Pod:

| command                           | description                       |
| --------------------------------- | --------------------------------- |
| <b>kubectl get pods</b>           |  To get kubernetes pods           |


### Shell into container

```
$ kubectl exec -it pod_id --namespace=default  -- /bin/bash

$ kubectl exec -it pod_id --namespace=default  -- /bin/bash
```
