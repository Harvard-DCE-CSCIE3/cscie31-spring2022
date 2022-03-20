## express project : password hashing

Simple example designed to show a simple way to create users for your Express application, use a Mongoose Model for users, and store a hashed password and its salt.  Implements register page to demonstrate the mechanisms for doing this. 

- User the *Register* link to create a new user record with properly hashed password. Creating a new user creates a logged in user session for the new account. Look in the mongoDB database to see the `hash` and `salt` fields that have been created. 
- Note that a login page is not implemented. You can logout, but will have to create a new user account to log back in. 
- Basic authorization is implemented via `routes/auth.js` and limits the http://localhost:3030/users to sessions in which a user accont has been created.  
  
* Visit http://localhost:3030/ to see the app in action
