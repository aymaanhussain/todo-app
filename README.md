FrontEnd Overview:
This is a frontend application designed to be a todo app. It was developed using React and MaterialUI. The todo app will allow users to log in, sign up, and manage their todo lists. Below are some of the steps to set up the front end application along with a breakdown of the features.

Features:
- Home Page:
-   Has a welcoming landing page with 2 buttons directing the user to login or signup
- Login Page:
-   Users can log in using their email and password
-   Once logged in they are directed to the todolist page
- Signup Page
-   Users can sign up with their email, password, and confirming their password
-   Once signed up they are directed to the log in page
- Todolist:
-   Users here can add, delete, and edit tasks
-   Tasks can be marked as completed
-   The tasks are categorized as complete and not complete
- TaskContext:
-   manages the global state of tasks using React Context API
-   provides function for adding, editing, deleting, toggling completion, and accessible using the useTask hooks

Setup:
- Clone the repository:
-   git clone https://github.com/your-username/your-repo-name.git
-   cd your-repo-name
- Install all necessary dependecies
-   npm install
-   npm start

Technologies Used:
- React
- MaterialUI
- React Router
