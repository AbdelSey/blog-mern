import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pixisApi from "../../api/pixisApi";

const initialState = {
  posts: [],
  isLoading: false,
};

//   baseURL: "http://localhost:5000/api",

// get all posts of all users;

export const getAllUserPostsCall = createAsyncThunk(
  "post/getAllUserPosts",
  async () => {
    try {
      const response = await pixisApi.get("/post");
      console.log(response.data.posts);
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostfromUserID = createAsyncThunk(
  "post/getOnePostfromuserID",
  async (id) => {
    try {
      const response = await pixisApi.get(`/post/user/${id}`);
      console.log(response.data.user.posts);
      return response.data.user.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUserPostsCall.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllUserPostsCall.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload; // action.payload is the response from the server
    },
    [getAllUserPostsCall.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getPostfromUserID.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPostfromUserID.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload; // action.payload is the response from the server
    },
    [getPostfromUserID.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { allUserPosts } = postSlice.actions;
export default postSlice.reducer;

export const getAllUserPosts = (state) => state.post.posts;
