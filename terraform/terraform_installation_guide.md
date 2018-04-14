# How to install terraform in linux ? 

Follow below instructions to setup terraform in linux machine(AWS EC2 instance)?

```
  $ sudo yum install zip unzip wget# ensure unzip package installed to unzip the terraform folder
  $ sudo wget https://releases.hashicorp.com/terraform/0.11.3/terraform_0.11.3_linux_amd64.zip
  $ sudo unzip terraform_0.11.3_linux_amd64.zip
  $ sudo mv terraform /usr/local/bin/
  $ terraform --version
```
