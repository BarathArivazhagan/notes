# How to install terraform in linux ? 

Follow below instructions to setup terraform in linux machine(AWS EC2 instance)?

#### Terraform - 0.11.3

```
  $ sudo yum install zip unzip wget  # ensure unzip package installed to unzip the terraform folder and wget to download the package
  $ sudo wget https://releases.hashicorp.com/terraform/0.11.3/terraform_0.11.3_linux_amd64.zip
  $ sudo unzip terraform_0.11.3_linux_amd64.zip
  $ sudo mv terraform /usr/local/bin/
  $ echo "export PATH:$PATH:/usr/local/bin" >> ~/.bashrc
  $ terraform --version
```

#### Terraform - 0.11.7

```
  $ sudo yum install zip unzip wget  # ensure unzip package installed to unzip the terraform folder and wget to download the package
  $ sudo wget https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip
  $ sudo unzip terraform_0.11.7_linux_amd64.zip
  $ sudo mv terraform /usr/local/bin/
  $ echo "export PATH:$PATH:/usr/local/bin" >> ~/.bashrc
  $ terraform --version
```


#### Terraform - 0.11.13

```
  $ sudo yum install zip unzip wget  # ensure unzip package installed to unzip the terraform folder and wget to download the package
  $ sudo wget https://releases.hashicorp.com/terraform/0.11.13/terraform_0.11.13_linux_amd64.zip
  $ sudo unzip terraform_0.11.13_linux_amd64.zip && sudo mv terraform /usr/local/bin/
  $ terraform --version
```

### Terraform - 0.12.2

```

  $ sudo yum install zip unzip wget  # ensure unzip package installed to unzip the terraform folder and wget to download the package
  $ sudo wget https://releases.hashicorp.com/terraform/0.12.2/terraform_0.12.2_linux_amd64.zip
  $ sudo unzip terraform_0.12.2_linux_amd64.zip && sudo mv terraform /usr/local/bin/
  $ echo "export PATH=$PATH:/usr/local/bin" >> ~/.bashrc
  $ terraform --version

```
