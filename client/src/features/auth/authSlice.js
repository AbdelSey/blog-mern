import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
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
      localStorage.setItem("userId", response.data._id);
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
      localStorage.setItem("userId", response.data._id);
      return response.data;
    } catch (error) {
      console.log("error", error);
      const navigate = useNavigate();
      navigate("/auth");
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
      localStorage.removeItem("userId");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
