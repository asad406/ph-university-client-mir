# PH University Client

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
University Management System is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This platform aims to streamline and automate various administrative tasks within a university setting, including student management, course registration, and grading.

## Features
- User Authentication and Authorization (Admin, Staff, Students)
- Student Enrollment and Management
- Course Creation, Enrollment, and Management
- Grading System
- Timetable Management
- Notifications and Announcements

## Technologies Used
### Frontend:
- React
- React-Redux
- TypeScript
- Tailwind CSS 
- Ant Design
- React Router Dom
- React Hook Form
- 

### State Management:
- Redux
### Version Control:
- Git
### Deployment:
- Netlify

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/university-management-system.git
    cd university-management-system
    ```
2. Install dependencies for both frontend and backend:
    ```bash    
    npm install
    ```
3. Set up environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```


## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Add a new student

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Add a new course

## Screenshots
Provide some screenshots of your application here.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Asadul Islam - [Linkedin](https://www.linkedin.com/in/asad406/) /n
Asadul Islam - [X](https://x.com/asad406_)
