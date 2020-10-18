 az aks update -n barath-aks-cluster -g barath-aks-cluster --attach-acr barathacr
 
 az aks list 
 
az aks  create --resource-group barath-aks-rg --name barath-aks-cluster  --load-balancer-sku  standard --enable-private-cluster --network-plugin azure --vnet-subnet-id <<SUBNET_ID>>


az aks get-credentials --name barath-aks-cluster --resource-group barath-aks-rg 

az network vnet subnet list -g barath-aks-rg --vnet-name barath-aks-vnet
