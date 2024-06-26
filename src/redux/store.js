import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/usersSlice';
import postReducer from './slices/postSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
