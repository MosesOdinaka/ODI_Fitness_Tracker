import mongoose from "mongoose";

/**
 * UserSchema: Mongoose schema for the User model.
 * Defines the structure of user documents in the MongoDB collection.
 * 
 * Fields:
 * - name: User's name (String, required).
 * - email: User's email (String, required, unique).
 * - img: URL or path to user's profile image (String, optional, defaults to null).
 * - password: User's password (String, required).
 * - age: User's age (Number, optional).
 * 
 * Options:
 * - timestamps: Automatically adds createdAt and updatedAt fields to the schema.
 */
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
