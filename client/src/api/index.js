import axios from "axios";

const API = axios.create({
  baseURL: "https://fitnesstrack-vtv1.onrender.com/api/",
});

/**
 * UserSignUp
 * 
 * Sends a POST request to sign up a new user with the provided data.
 *
 * @param {Object} data - The user information to sign up with.
 * @returns {Promise} - The axios response promise.
 */
export const UserSignUp = async (data) => API.post("/user/signup", data);

/**
 * UserSignIn
 * 
 * Sends a POST request to sign in an existing user with the provided data.
 *
 * @param {Object} data - The user credentials to sign in with.
 * @returns {Promise} - The axios response promise.
 */
export const UserSignIn = async (data) => API.post("/user/signin", data);

/**
 * getDashboardDetails
 * 
 * Sends a GET request to retrieve dashboard details for the authenticated user.
 *
 * @param {string} token - The JWT token for authentication.
 * @returns {Promise} - The axios response promise.
 */
export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

/**
 * getWorkouts
 * 
 * Sends a GET request to retrieve workouts for the authenticated user.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} date - The date string to filter workouts.
 * @returns {Promise} - The axios response promise.
 */
export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

/**
 * addWorkout
 * 
 * Sends a POST request to add a new workout for the authenticated user.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {Object} data - The workout data to be added.
 * @returns {Promise} - The axios response promise.
 */
export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
