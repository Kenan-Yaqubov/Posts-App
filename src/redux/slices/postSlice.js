import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    postsLoading: false,
    currentPost: null,
    postCreated: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    togglePostsLoading: (state) => {
      state.postsLoading = !state.postsLoading;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    setCreatePost: (state) => {
      state.postCreated = !state.postCreated
    }
  },
});


export const { setPosts, togglePostsLoading, setCurrentPost, setCreatePost } =
  postSlice.actions;

export default postSlice.reducer;
