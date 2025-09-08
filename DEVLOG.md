### [03-09-2025]

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


### [04-09-2025]

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

### [05-09-2025]

Work done:
    1. Built a Model, **pendingLoginModel**, which stores the OTP and its Expiry Time for the applicants who applied for Login.
    2. Built 3 APIs.
            i. **/pendingLogin**: This API will check and validate the user based on email and password. It also performs the 2-Step verification path, so it generates and sends the OTP to the user and store it to **pendingLoginModel**.
            ii. **/login**: This API will find the user and assign a Token that helps to grant the access of application to the user.
            iii. **/getUser**: This API will find the document totally based on username.
    3. Integrated all 3 APIs to the Frontend. Built the Dashboard only with the username, name.

Problems:
    1. Problems arrived when I tried to get the name out off 'user' useState. It sometimes shows me undefined but at last adding a ternary operator(?), it resolve.

To-Do:
    1. Build the AuthMiddleware, Contest Model, Modifiy the User Model for separating set of users as 'User' & 'Organizer'. I am not clarified with the roles, but I will figure it out.
    2. Build the respective Frontend Routes and pages.

Achievments:
    After 3 days of consistent development, I built 6 Auth APIs (Signup, Login & Fetch User), set up both backend & frontend routes, designed minimal but effective UI/UX.
    While building this project, I figured out why real-world products uses 'username' in there application over 'email/phone'. Although 'email/phone' helps developer to easily access the user documents from the Model but it becomes more vulnerable while forwarding the data to the frontend. But the 'username' will act like an unique key which will help me to find the accurate document like 'email/phone'. Unlike 'email/phone', it will secure, because it doesnot deal will direct and personal details.

### [06-09-2025]

Work Done:
    1. Built the **contestModel** for storing the Contest Details.
    2. Modified **'userModel'** with 'role' ('User', 'Organizer') and isVerified(Boolean).
    3. Modified the User Panel/Dashboard introduced a feature for applying as Organizer who had rights to create the Contests.
    4. Built the AuthMiddleware **'protect'** and API **'applyAsOrganizer'** for validating and verifying the user as the Organizer.
    5. Built the required Route with **protect**.
    6. Built the backend route as **'/apply-for-organizer'**.

Problem:
    Today, I didn't get such big problem in coding but get little bit stucked while designing the flow of the user.

To-Do:
    Remaining works of Contest Model and its APIs with Routes and there respective frontend work.

### [07-09-2025]

Work Done:
    1. Modified the **contestModel** with the startDate and endDate by making it required.
    2. Built the **createContest** API endpoint and introduced its respective Routing paths **/create**.
    3. Built the form UI/UX for ContestCreation Form.

Problem:
    Today I learnt about how I can save the Date(String Format) in the Database by converting the Date into Object Format. For past 2 days the progress looks slow. But I will try my best to be Consistent. Thankyou.

To-Do:
    Lots of Work Remained. Next I will create the Read Functionalities of Contest (**GET**). Along with the User side enroll functionalities. Building the Post and Photo Model in next 2-3 days.

### [08-09-2025]

Work Done:
    1. Build the APIs (**getContests** & **getContestById**) for performing read operations.
        i. **getContests**: Used for fetching all the contests.
        ii. **getContestById**: Used for fetching the contest using id from 'params'.
    2. Built the frontend for rendering the Contest Details via cards.

Problem:
    Yesterday, I deal with storing of the Date, today I deal with the usage of that Dates from the database for rendering them, dividing the contests in 'Upcoming', 'Ongoing' & 'Ended' based of the dates.

To-Do:
    Post Creation and Photo Models are the very next tasks.

### [09-09-2025]

Work Done:
    Today I did one of the most vital work of my project, that is the Post Creation.
    1. I built the **postModel** that contains the data of each and every post.
    2. Next set up the **Cloudinary** (for Cloud Stroage of Images) and **Multer** (for File management).
    3. I build the **createPost** API for the creation of the Post.
    4. Set up the route for **createPost**.
    5. Built the Frontend Post Creation Form and Learned how to manage file handling using the *new* **FormData()**.

Problem & Learnings:
    Today I took help of ChatGPT to learn topics like Frontend File Handling and How can I set up the **Multer** and **Cloudinary**. Being honest I used setup of Multer and Cloudinary for my Learning Management System Project but I was not able to recall it so I used the ChatGPT. It structured how can I setup the **Cloudinary**, **Multer**, How can I get the user input (*file*) and upload it in Cloudinary.

To-Do:
    One of the most vital things are done. Now the very next things are to make the voting system and set up the UI/UX.