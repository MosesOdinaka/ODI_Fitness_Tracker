import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();

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
    message: "Hello! I'm Moses and the server is running.",
  });
});

/**
 * Verify MongoDB connection
 * Adds a route to check the status of the MongoDB connection.
 */
app.get("/api/status", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send("MongoDB is connected!");
  } catch (err) {
    res.status(500).send("MongoDB connection failed!");
  }
});

/**
 * Connect to the MongoDB database.
 * Uses the connection string defined in the environment variables.
 * Logs a success message if connected, otherwise logs an error.
 */
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.error("Failed to connect to MongoDB");
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
