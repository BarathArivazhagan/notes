
First, create a job using the UI. This job can be used to create a base config that can be used to create new jobs.

To retrieve the job config.xml that you made via the UI, to use for creating new jobs:

```sh
curl -X GET http://example.com/job/test/config.xml -u username:API_TOKEN -o mylocalconfig.xml
```

Obviously, replace:

username:API_TOKEN with your username and password/API_Token
example.com with your Jenkins URL
test with the name of the job that you created via the UI
You can now modify this config file locally to suit for needs as required.

Once ready, to use this config to create a new job:

```sh
curl -s -XPOST 'http://example.com/createItem?name=yourJobName' -u username:API_TOKEN --data-binary @mylocalconfig.xml -H "Content-Type:text/xml"
```

Obviously, replace:

username:API_TOKEN with your username:password
example.com with your Jenkins URL
yourJobName with the name you would like to give the new job name
If the output message is an error message like

Error 403 No valid crumb was included in the request
means that the CSRF Protection is enabled in the Jenkins instance, thus the curl command requires the crumb field. In that case, try this:
```
CRUMB=$(curl -s 'http://example.com/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)' -u username:API_TOKEN)
curl -s -XPOST 'http://example.com/createItem?name=yourJobName' -u username:API_TOKEN --data-binary @mylocalconfig.xml -H "$CRUMB" -H "Content-Type:text/xml"
```

See Remote Access API for more.


Ref: [How-to-create-a-job-using-the-REST-API](https://support.cloudbees.com/hc/en-us/articles/220857567-How-to-create-a-job-using-the-REST-API-and-cURL)
