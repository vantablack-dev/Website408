import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId, thunkAPI) => {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  }
);
