## Objective
The purpose of this assignment is to give you hands-on experience with Amazon Cognito, a service that provides user sign-up, sign-in, and access control to web and mobile apps. You will integrate Cognito with API Gateway to control access to your APIs, learning how to implement a basic yet robust authentication and authorization mechanism. By the end of this assignment, you will be able to:

1. Set up an Amazon Cognito User Pool with custom sign-in options and password requirements.
2. Use the hosted UI provided by Cognito to facilitate user registration and sign-in.
3. Create a user for the User Pool and understand the process of signing in and managing users.
4. Extract and interpret the ID and Access tokens provided upon successful sign-in.
5. Create a Cognito authorizer in API Gateway and associate it with your API methods.
6. Understand and implement OAuth scopes for API methods.
7. Deploy updates to your API and test the implementation of authentication and authorization controls.

### Part 1: Creating a Cognito User Pool
1. Go to Cognito and start creating a new pool with these settings:
- Go for whatever sign in options you prefer. I suggest username.
- Use Conito defaults for password requirements to keep it simple
- No MFA - Keep it simple for now
- Keep the rest till you get to Email. Go for Send email with Cognito.
- Cognito Hosted Ui should be enabled
- The Cognito domain can be whatever
- The callback URL should can also just be whatever, eg. example.com/callback
- Advanced app client settings should be expanded and have "OAuth 2.0 grant types" changed to Implicit grant
2. Create a user for this user pool
3. Go to YOUR-POOL -> App Integration -> YOUR-APP-CLIENT (In the bottom of the page)
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/cognito.png)
4. Press "View hosted UI"
5. Login with the user you created and reset the temporary password
6. You should now be navigated to the callback url.
7. In the URL you should be able to extract and ID- and Access-token

### Part 2: API Gateway authorization
1. Head back to your API Gateway from earlier
2. Go to the Authorizer tab in the laft pane
3. Make it a cognito authorizer with your pool chosen and the token source name whatever you would like to call you header.
It could be "Authrization".
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/auth.png)
4. Go to any method and go to the Method Request
5. Change the authorization the authorizer you created before (refresh the page if it isn't present yet).
6. For OAuth scope for "email"
7. Deploy your api again
8. Call the API and see the call fail (Might take a minute after deployment to take effect).
9. Add the authrorization header you chose for the token source with the value being the access token from your user.
10. Call again and verify a status code of 200