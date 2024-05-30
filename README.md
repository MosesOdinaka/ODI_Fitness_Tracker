# ODI\_Fitness\_Tracker

ODI\_Fitness\_Tracker is a full-stack application designed to help users track their fitness progress. This application allows users to register, log in, and manage their fitness activities. It uses MongoDB as the database, Express.js for the server, and Node.js for the backend logic.

## Table of Contents

-   Features
-   Prerequisites
-   Installation
-   Environment Variables
-   Running the Application
-   API Endpoints
-   Project Structure
-   Contributing

## Features

-   User registration and authentication
-   Secure password storage with bcrypt
-   CRUD operations for fitness activities
-   Middleware for error handling
-   MongoDB database connection using Mongoose

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js (version 14 or later)
-   npm (version 6 or later)
-   MongoDB (either local installation or MongoDB Atlas)

## Installation

To install and set up the project, follow these steps:

1.  **Clone the repository:**
    
    ```
    git clone https://github.com/your-username/ODI_Fitness_Tracker.git
    cd ODI_Fitness_Tracker
    ```
    
2.  **Install dependencies:**
    
    Navigate to the `server` directory and install the necessary dependencies:
    
    ```
    cd server
    npm install
    ```
    

## Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```

```

Replace the values with your actual MongoDB connection string and a secret key for JWT.

## Running the Application

To run the application, follow these steps:

1.  **Start the server:**
    
    In the `server` directory, start the server using:
    
    ```
    npm start
    ```
    
    The server will start on port 8080 by default.
    

## API Endpoints

Here are the main API endpoints available in the application:

-   **User Registration:**
    
    -   **Endpoint:** `/api/fittrack/user/register`
    -   **Method:** `POST`
    -   **Description:** Register a new user
-   **User Login:**
    
    -   **Endpoint:** `/api/fittrack/user/login`
    -   **Method:** `POST`
    -   **Description:** Login a user
-   **Check MongoDB Status:**
    
    -   **Endpoint:** `/api/fittrack/status`
    -   **Method:** `GET`
    -   **Description:** Check the status of the MongoDB connection
-   **Root Endpoint:**
    
    -   **Endpoint:** `/`
    -   **Method:** `GET`
    -   **Description:** Welcome message for ODI\_Fitness\_Tracker

## Project Structure

The project's directory structure is as follows:

```
ODI_Fitness_Tracker/
│
├── client/                     # Frontend (if applicable)
│
├── server/                     # Backend
│   ├── controllers/            # Controllers for handling requests
│   ├── middleware/             # Custom middleware
│   ├── models/                 # Mongoose models
│   ├── routes/                 # Express routes
│   ├── .env                    # Environment variables
│   ├── index.js                # Entry point for the server
│   ├── package.json            # Node.js dependencies and scripts
│
└── README.md                   # Project documentation
```

## Contributing

Contributions are always welcome! To contribute to ODI\_Fitness\_Tracker, follow these steps:

1.  Fork the repository
2.  Create a new branch (`git checkout -b feature-branch`)
3.  Make your changes and commit them (`git commit -m 'Add some feature'`)
4.  Push to the branch (`git push origin feature-branch`)
5.  Open a pull request
