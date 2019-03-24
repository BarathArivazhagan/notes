### Setup AWS IAM authenticator


```
$ curl -o aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.11.5/2018-12-06/bin/linux/amd64/aws-iam-authenticator
$ chmod +x ./aws-iam-authenticator
$ export PATH=$PATH:/home/ec2-user/
```

- Verify the installation

```
$ aws-iam-authenticator help
```
