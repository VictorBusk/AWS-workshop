# EC2 Assignment

In this assignment, you will create an EC2 instance and perform some basic operations on it.

## Prerequisites
An AWS account with permissions to create and manage EC2 instances
AWS CLI installed and configured on your local machine

## Steps

1. Launch an EC2 instance using the AWS Management Console or AWS CLI.
Choose an Amazon Machine Image (AMI) that suits your needs, such as a Linux or Windows server.
Select an instance type that matches your workload requirements, such as t2.micro or m5.large.
Choose a VPC and subnet that allows your instance to communicate with other AWS services and the internet.

2. Connect to your EC2 instance using SSH or RDP, depending on the operating system you selected.
You can use a key pair or a password to authenticate your login credentials.
Once you are connected, perform some basic tasks, such as installing software packages, creating files or folders, or running scripts.

3. Create an Amazon Machine Image (AMI) of your EC2 instance, which captures the entire state of your instance, including the operating system, applications, and data.
You can use the AWS Management Console or AWS CLI to create an AMI, and choose a name and description for it.
Once the AMI is created, you can use it to launch new instances that inherit the same configuration and data as the original instance.

4. Create an Elastic IP address and associate it with your EC2 instance, which provides a static public IP address that remains the same even if you stop or start your instance.
You can use the AWS Management Console or AWS CLI to create an Elastic IP address, and then associate it with your instance.
Once the Elastic IP address is associated, you can use it to connect to your instance from the internet, and avoid the need to update DNS records or IP addresses.

5. Create a security group that allows inbound traffic to your EC2 instance, such as SSH, HTTP, or HTTPS. You can use the AWS Management Console or AWS CLI to create a security group, and define the rules for inbound and outbound traffic. Once the security group is created, you can associate it with your instance, and control the network traffic to and from your instance.

6. Clean up your resources by terminating your EC2 instance, releasing your Elastic IP address, and deleting your security group.
You can use the AWS Management Console or AWS CLI to perform these operations, and make sure that you don't incur any unnecessary charges or resources.