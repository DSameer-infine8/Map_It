# Map_It





**Map_It** is a full-stack web application designed to provide a clear roadmap for learners, helping them navigate through skills, resources, and progress tracking. It offers authentication, interactive UI, and database-driven content management.





---





## 🚀 Features





- 🔐 **User Authentication** (Signup/Login with sessions & bcrypt hashing)  


- 📌 **Learning Roadmaps** (Skill-based role selection)  


- 📂 **Resource Management** (Upload and organize learning materials)  


- 📊 **Progress Tracking** (Monitor user journey and completed steps)  


- 💌 **Email Integration** (Notifications via Nodemailer)  


- ⚡ **Flash Messaging** (Success & error alerts with `connect-flash`)  


- 🎨 **Dynamic UI** using **EJS templates**  


- 🗄️ **Supabase Database** (PostgreSQL)  

---

## 🛠️ Tech Stack

**Frontend**  

- HTML, CSS, JavaScript  

- EJS (Embedded JavaScript Templates)  

**Backend**  

- Node.js  

- Express.js  

**Database**  

- Supabase (PostgreSQL)  





**Other Tools**  


- bcrypt (Password Hashing)  


- dotenv (Environment Config)  


- express-session (Session Handling)  


- nodemailer (Email Support)  


- method-override (HTTP verbs support)  





---





## 📂 Project Structure





```


Map_It/


│── app.js              # Main server file


│── edit.js             # Editing functionality


│── initDB.js           # Database initialization


│── package.json        # Project metadata & dependencies


│── .env                # Environment variables


│── /views              # EJS templates


│── /public             # Static assets (CSS, JS, Images)


│── /models             # Mongoose schemas


│── /routes             # Express routes


│── /controllers        # Business logic


```





---





## ⚙️ Installation & Setup





### 1. Clone the repository


```bash


git clone https://github.com/your-username/map_it.git


cd map_it


```





### 2. Install dependencies


```bash


npm install


```





### 3. Setup environment variables  


Create a `.env` file in the root directory and add:  


```


PORT=3000


mongoURL=your_mongodb_connection_string


SESSION_SECRET=your_secret_key


EMAIL_USER=your_email@example.com


EMAIL_PASS=your_email_app_password


```





### 4. Initialize Database (optional)


```bash


node initDB.js


```





### 5. Start the server


```bash


npm start


```


Server will run on **http://localhost:3000**





---





## 📖 Usage





1. Register/Login as a user.  


2. Explore available roadmaps and select your skill path.  


3. Track your learning progress.  


4. Receive email notifications for important updates.  





---





## 🤝 Contribution





Contributions are welcome!  





1. Fork the repo  


2. Create a new branch (`feature-xyz`)  


3. Commit changes  


4. Push and open a PR  





---





## 📜 License





This project is licensed under the **MIT License**.