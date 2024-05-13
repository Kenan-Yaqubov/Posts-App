import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    usersLoading: false,
    currentUser: {},
    userPosts: [],
    currentUserLoading: false,
    userPostsLoading: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    toggleUserLoading: (state) => {
      state.usersLoading = !state.usersLoading;
    },
    setCurrentUserLoading: (state) => {
      state.currentUserLoading = !state.currentUserLoading;
    },
    setUserPostsLoading: (state) => {
      state.userPostsLoading = !state.userPostsLoading;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
  },
});
export const { setUsers, toggleUserLoading, setCurrentUser, setUserPosts, setCurrentUserLoading, setUserPostsLoading } =
  userSlice.actions;
export default userSlice.reducer;
