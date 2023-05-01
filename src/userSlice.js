
import { createSlice } from '@reduxjs/toolkit';
import { userSaga } from './userSagas';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchUserData: (state, action) => {
      state.status = 'loading';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { fetchUserData } = userSlice.actions;
export const { } = userSlice.actions;

