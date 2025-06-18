# MERN 02

This project is part of the MERN stack learning series.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd mern-02
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB:**  
   Make sure your MongoDB server is running locally or update the connection string in `/backend/config/db.js` for a remote database.

2. **Start the backend server:**

   ```bash
   cd backend
   npm run dev
   ```

   The backend runs on [http://localhost:5000](http://localhost:5000) by default.

3. **Start the frontend development server:**

   ```bash
   cd ../frontend
   npm run dev
   ```

   The frontend runs on [http://localhost:3000](http://localhost:3000) by default.

## Technologies Used

- **MongoDB** – NoSQL database for storing application data
- **Express.js** – Web framework for Node.js, handles backend routing and APIs
- **React.js** – Frontend library for building interactive user interfaces
- **Node.js** – JavaScript runtime for running backend code

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Features

- **Full-stack JavaScript:** Unified language across client and server
- **Authentication:** Secure login and registration using JWT (JSON Web Tokens)
- **RESTful API:** CRUD operations for resources via Express and MongoDB
- **Interactive UI:** Dynamic frontend built with React and modern hooks
- **Environment Variables:** Use `.env` files for sensitive config (see `/backend/.env.example`)
- **Error Handling:** Centralized error middleware for backend
- **API Testing:** Easily test endpoints with tools like Postman

## Folder Structure

```
mern-02/
│
├── backend/           # Express backend
│   ├── controllers/   # Route logic and business rules
│   ├── models/        # Mongoose data models
│   ├── routes/        # API route definitions
│   ├── middleware/    # Custom Express middleware (auth, error handling)
│   ├── config/        # Database and environment config
│   ├── server.js      # Entry point for backend
│   └── ...            # Other backend files
│
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Page-level React components
│   │   ├── App.js      # Main React app
│   │   └── ...         # Other frontend files
│   └── public/
│
└── README.md
```

### Open in StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/aungNyeinChan93/MERN_02)
