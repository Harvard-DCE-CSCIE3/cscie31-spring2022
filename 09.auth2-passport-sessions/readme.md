## Express, with Passport for authentication
Allows user login and logout, along with a simple way to create users for your Express application, use a Mongoose Model for users, and store a hashed password and its salt.  Implements register page to demonstrate the mechanisms for doing this. 

- User the *Register* link to create a new user record with properly hashed password. Creating a new user creates a logged in user session for the new account. Look in the mongoDB database to see the `hash` and `salt` fields that have been created. 
- login and logout are implemented
- Basic authorization is implemented via `routes/auth.js` and limits the http://localhost:3030/users to sessions in which a user accont has been created.  
- We use passport's LocalStrategy for authentication here - using our own database for storage of user login credentials. Use of passport can also support OAuth or OpenID logins with google, github, and other providers. See https://www.npmjs.com/package/passport for more information on these authentication Strategies. 
  
* Visit http://localhost:3030/ to see the app in action