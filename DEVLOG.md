## [03-09-2025]

Work Done: 
    1. Downloaded Dependencies for both Backend and Frontend.
    2. Used **MongoDB Atlas** and setup with **MongoDB Compass** for visualization.
    3. Build the '.env' and 'cors' Setup.
            i. **.env** for storing Database URI, Secret Keys etc.
            ii. **cor**s for establishing communication between frontend and backend 
    4. Config the Database.
    5. Created Models.
            i. **'userModel'**: for string User Data.
            ii. **'pendingSignupModel'**: for stroing the User Data, OTP and the Expiry time of OTP for 2 Step Verification.
    6. Created APIs.
            i. **'pendingSignup'**: It helps us to store the User Data, OTP and OTP Expiry Time. It also sends Gmail using 'nodemailer' to send the OTP to the user. It creates the document in 'pendingSignupModel'.
            ii. **'signup'**: It helps us to store the User Data. It has basically two parts. One is OTP validation and second is User Creation in 'userModel'. It creates the document in 'userModel'.
Problems:
    1. Setting up the database entirely on Localhost. So it is now totally shifted to Atlas.

To-Do:
    1. Frontend Setups and Basic Page Building.


## [04-09-2025]

Work Done:

    1. Build a new API and corresponding route, **'setUsername'** & **/setusername**, it helps the new users to set an unique username. First it checks for if there any same username exists or not. If not then it will set the new username and move the user to main **Feed Page**.
    2. Define the Routes for the APIs.
            i. **/pendingsignup**: For 'pendingSignup' API.
            ii. **/signup**: For 'signup' API.
    3. Setup the Basic Frontend Setup (like- routes, tailwindcss etc.).
    4. Created the Basic Components (like- 'Layout.jsx', 'Navbar.jsx', 'ProtectedRoutes.jsx').
    5. Created Some Dummy Pages (like- 'Landing.jsx', 'Feed.jsx').
    6. Created the Auth Pages (like- 'Signup.jsx', 'SignupVerify.jsx', 'Login.jsx', 'LoginVerify.jsx', 'Username.jsx').
    7. Connected the Frontend and Backend for 'Signup.jsx', 'SignupVerify.jsx', 'Username.jsx'.
    8. Stored the **AuthToken**, **User Details** (except Password) etc. in **localStorage**. 

Problems:

    1. Some API Fetching Problems. Sometimes API gets mismatched.

To-Do:
    1. Build the required APIs for Login Fetaures.
    2. Connect the Backend and Frontend.