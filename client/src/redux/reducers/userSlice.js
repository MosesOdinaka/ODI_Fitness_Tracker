import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

/**
 * userSlice
 *
 * This slice manages the user authentication state, including login and logout actions.
 *
 * State:
 * - currentUser: Stores the information of the currently logged-in user.
 *
 * Actions:
 * - loginSuccess: Updates the state with the user's information upon successful login and stores the authentication token in local storage.
 * - logout: Clears the user information from the state and removes the authentication token from local storage.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("fittrack-app-token", action.payload.token);
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("fittrack-app-token");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
