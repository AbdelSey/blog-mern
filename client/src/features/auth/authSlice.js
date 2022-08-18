import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pixisApi from "../../api/pixisApi";

const initialState = {
  isAuthenticated: false,
};

// baseURL: "http://localhost:5000/api",
// create a user

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ fullName, userName, email, password, image }) => {
    try {
      const response = await pixisApi.post("/user/register", {
        fullName,
        userName,
        email,
        password,
        image,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

// user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    try {
      const response = await pixisApi.post("/user/login", { email, password });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
