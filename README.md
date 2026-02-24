🌐 Node.js Express Server Project

A simple Node.js web server built using the Express framework that serves multiple web pages and a products API.

The server runs on:

http://localhost:3000

and displays Home, Products, About, and Contact pages.

🚀 Features

🏠 Home Page

🛍 Products Page

ℹ About Page

📞 Contact Page

📦 Products API (JSON)

🧾 Logger Middleware

🌐 Express Server

The project uses Express dependency as defined in package.json 

package

🛠️ Technologies Used

Node.js

Express.js

JavaScript

HTML (served dynamically)

📁 Project Structure
nodejs-project/
│
├── expressServer.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
▶️ How to Run the Project
Step 1: Install Node.js

Download from:

https://nodejs.org

Step 2: Open Project Folder

Open Command Prompt

cd path_to_project

Example:

cd Desktop/nodejs-project
Step 3: Install Dependencies
npm install

This installs Express.

Step 4: Start Server

According to package.json start script 

package

npm start

OR

node expressServer.js
Step 5: Open in Browser

Open:

http://localhost:3000
🌐 Available Routes
Route	Description
/	Home Page
/products	Product List
/about	About Page
/contact	Contact Page
/api/products	Products JSON API
📊 Example API Output
[
 { "id": 1, "name": "Laptop", "price": 800 },
 { "id": 2, "name": "Phone", "price": 400 }
]
🎯 Purpose

This project is useful for:

Learning Node.js

Learning Express.js

Backend development practice

Beginner web server project

👩‍💻 Author

Varshini Kundhu

🔮 Future Improvements

Connect Database

Add Login System

Add Frontend

Deploy Online

✅ Simple Run Command
npm install
npm start
