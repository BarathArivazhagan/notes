# How to get oauth token to login ?

* Get OAUTH token using below curl command 

```
curl -v -XPOST -H"Application/json" -u "cf:" --data "username=<username>&password=<password>&client_id=cf&grant_type=password&response_type=token" https://login.run.pivotal.io/oauth/token

```

<b> Using CF CLI</b>

```
> cf oauth-token
``
