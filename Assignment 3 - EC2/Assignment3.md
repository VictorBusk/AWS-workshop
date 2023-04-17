# EC2 Assignment
In this assignment, you will create an EC2 instance.

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