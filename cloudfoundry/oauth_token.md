# How to get oauth token with cf login ?

* Get OAUTH token using below curl command 

```
curl -v -X POST -H "application/json" -u "cf:" --data "username=<username>&password=<password>&client_id=cf&grant_type=password&response_type=token" https://login.run.pivotal.io/oauth/token

```

<b> Using CF CLI</b>

```
> cf oauth-token
```
