CampusCare — Complaint & Resolution Management System
A full-stack web application for managing campus facility complaints — from submission by students to staff assignment and resolution by administrators.
Built as a mini project for CSS_2212 — Database Systems Lab, Manipal Institute of Technology Bengaluru.

Features

Students raise complaints with category and description
Admin assigns complaints to staff members
Three-stage lifecycle: OPEN → IN_PROGRESS → RESOLVED
Dashboard with live counts (Total / Open / In Progress / Resolved)
Filter complaints by status or category
Foreign key constraints enforcing relational integrity


Tech Stack
LayerTechnologyRuntimeNode.jsFrameworkExpress.jsDatabaseMySQLDB Drivermysql2FrontendHTML, CSS, JavaScript (Fetch API)Middlewarecors, express.json

Project Structure
CampusCare/
│
├── Backend/
│   ├── config/
│   │   └── db.js                  # MySQL connection
│   ├── controllers/
│   │   └── complaintController.js # Business logic
│   ├── routes/
│   │   └── complaintRoutes.js     # API route definitions
│   └── app.js                     # Express server entry point
│
└── frontend/
    ├── index.html                  # View all complaints
    ├── raise.html                  # Submit a complaint
    ├── admin.html                  # Admin dashboard
    └── style.css                   # Shared styles

Database Schema
sqlCREATE TABLE students (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  department VARCHAR(50)
);

CREATE TABLE staff (
  staff_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  role VARCHAR(50)
);

CREATE TABLE complaints (
  complaint_id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  category VARCHAR(50),
  description TEXT,
  status VARCHAR(20) DEFAULT 'OPEN',
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE assignments (
  assignment_id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id INT,
  staff_id INT,
  FOREIGN KEY (complaint_id) REFERENCES complaints(complaint_id),
  FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
);

API Endpoints
MethodEndpointDescriptionPOST/api/complaintCreate a new complaintGET/api/complaintsFetch all complaintsPOST/api/assignAssign complaint to staffPUT/api/status/:idUpdate complaint status

Running Locally
Prerequisites: Node.js, MySQL
1. Clone the repo
bashgit clone https://github.com/your-username/campuscare.git
cd campuscare/Backend
2. Install dependencies
bashnpm install
3. Set up the database
Create a MySQL database named complaint_db and run the schema above.
4. Configure the connection
In config/db.js, update with your MySQL credentials:
jsconst db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "complaint_db"
});
Or use a .env file (recommended):
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=complaint_db
5. Start the server
bashnode app.js
6. Open the frontend
Open frontend/index.html directly in your browser. No additional server needed for the frontend.

Deployment

Backend — Render (Node.js Web Service)
Database — Clever Cloud (MySQL addon)
Frontend — GitHub Pages (static HTML)

Set environment variables on Render:
DB_HOST=your_clever_cloud_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
Update fetch URLs in all frontend HTML files from http://localhost:3000 to your Render deployment URL before deploying the frontend.

Normalization
The schema is normalized to Third Normal Form (3NF):

Student details stored only in students — no duplication in complaints
Staff details stored only in staff — no duplication in assignments
No transitive dependencies across any table


Author
Shivam Mishra 
