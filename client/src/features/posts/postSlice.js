import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pixisApi from "../../api/pixisApi";

const initialState = {
  posts: [], // many posts
  post: [], // single post
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

// get all posts of a specific user;

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

// add a post;

export const createNewPost = createAsyncThunk(
  "post/createNewPost",
  async ({ title, description, image, user }) => {
    try {
      const response = await pixisApi.post("/post/create", {
        title,
        description,
        image,
        user,
      });
      console.log(response.data.post);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// get post by id
export const getPostFromPostID = createAsyncThunk(
  "post/getPostFromPostID",
  async (id) => {
    try {
      const response = await pixisApi.get(`/post/${id}`);
      console.log(response.data.post);
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  }
);

// update post by id

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async ({ id, title, description, image }) => {
    try {
      const response = await pixisApi.put(`/post/update/${id}`, {
        title,
        description,
        image,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// delete post by id

export const deletePostCall = createAsyncThunk(
  "post/deletePost",
  async (id) => {
    try {
      const response = await pixisApi.delete(`/post/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    deletePostFromState: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
  },
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
    [getPostFromPostID.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPostFromPostID.fulfilled]: (state, action) => {
      state.post = action.payload; // action.payload is the response from the server
      state.isLoading = false;
    },
    [getPostFromPostID.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default postSlice.reducer;
export const { deletePostFromState } = postSlice.actions;

export const getAllUserPosts = (state) => state.post.posts;
export const getPostDetails = (state) => state.post.post;
