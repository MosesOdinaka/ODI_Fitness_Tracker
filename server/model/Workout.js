import mongoose from "mongoose";

/**
 * WorkoutSchema: Mongoose schema for workout documents.
 * Defines the structure and validation for workout records.
 *
 * Fields:
 * - user: ObjectId referencing the User collection. Required.
 * - category: String representing the workout category. Required.
 * - workoutName: String representing the name of the workout. Required and unique.
 * - sets: Number representing the number of sets.
 * - reps: Number representing the number of repetitions per set.
 * - weight: Number representing the weight used in the workout.
 * - duration: Number representing the duration of the workout in minutes.
 * - caloriesBurned: Number representing the calories burned during the workout.
 * - date: Date representing when the workout was performed. Defaults to the current date.
 * 
 * Options:
 * - timestamps: Automatically adds createdAt and updatedAt fields.
 */
const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
      unique: true,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    caloriesBurned: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workout", WorkoutSchema);
