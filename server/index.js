import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();

/**
 * This module sets up an Express server with the following configurations:
 * 
 * - Uses dotenv to manage environment variables.
 * - Configures CORS (Cross-Origin Resource Sharing) to allow cross-origin requests.
 * - Parses incoming JSON requests and URL-encoded data.
 * - Connects to a MongoDB database using Mongoose.
 * - Defines a simple API endpoint and includes user-related routes.
 * - Implements basic error handling middleware.
 * 
 * The server listens on port 8080.
 */

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

// User routes
app.use("/api/user/", UserRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Root endpoint
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

/**
 * Connect to the MongoDB database.
 * Uses the connection string defined in the environment variables.
 * Logs a success message if connected, otherwise logs an error.
 */
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

/**
 * Start the Express server.
 * Connects to the MongoDB database and listens on port 8080.
 * Logs an error message if the server fails to start.
 */
const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
