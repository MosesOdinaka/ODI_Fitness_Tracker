import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/**
 * User Routes
 * 
 * This module defines the routes for user-related operations including registration, login,
 * dashboard retrieval, workout retrieval by date, and adding workouts.
 * 
 * Routes:
 * - POST /signup: Registers a new user.
 * - POST /signin: Logs in a user.
 * - GET /dashboard: Retrieves the user dashboard data (requires authentication).
 * - GET /workout: Retrieves workouts by date (requires authentication).
 * - POST /workout: Adds a new workout (requires authentication).
 * 
 * Middleware:
 * - verifyToken: Ensures that the user is authenticated for protected routes.
 * 
 * @module routes/User
 */

// Route for user registration
router.post("/signup", UserRegister);

// Route for user login
router.post("/signin", UserLogin);

// Route to get user dashboard data, protected by authentication middleware
router.get("/dashboard", verifyToken, getUserDashboard);

// Route to get workouts by date, protected by authentication middleware
router.get("/workout", verifyToken, getWorkoutsByDate);

// Route to add a new workout, protected by authentication middleware
router.post("/workout", verifyToken, addWorkout);

export default router;
