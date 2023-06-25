# Introduction
In this assignment, you will create an EC2 instance.

## Objective

The purpose of this assignment is to familiarize you with Amazon EC2 (Elastic Compute Cloud), a fundamental component of the AWS infrastructure that provides scalable computing capacity in the cloud. Upon completion of this assignment, you should be able to:

1. Navigate through the AWS console and understand the EC2 dashboard.
2. Create and configure an Amazon EC2 instance, using a Linux Amazon Machine Image (AMI) and a t2.micro instance type.
3. Connect to the EC2 instance and understand how to access the terminal.
4. Execute basic commands in the terminal to install and launch third-party software, using Grafana as an example.
5. Adjust the security group settings to enable access to specific ports, ensuring that you can interact with the installed software externally.

### Steps
1. Navigate to the EC2 dashboard.
2. Click on the "Launch Instance" button to begin creating a new instance.
3. Select an Amazon Machine Image (AMI), which for this assignment should be a Linux VM.
4. Go for a t2.micro instance type as it is elligible for the free tier
5. Once your instance is created, navigate to the EC2 dashboard and select the instance you want to connect to.
6. Click on the "Connect" button at the top of the screen.
7. You are now in the instances terminal
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/ec2connect.png)

That's it! Once you're connected to your instance's terminal, you can start configuring your instance and installing any software you need.

As an example and if you dare here is the commands for installing grafana and starting it on port 3000:

sudo tee /etc/yum.repos.d/grafana.repo <<EOF
[grafana]
name=grafana
baseurl=https://packages.grafana.com/oss/rpm
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://packages.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
EOF

sudo yum install grafana

sudo service grafana-server start

To access it you need to update the security group to allow for all CIDRs on port 3000 with custom TCP.
The URL to acces grafana is [Public IPv4 address]:3000

![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/securitygroup.png)