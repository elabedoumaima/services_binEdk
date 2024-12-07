// في RegisterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {


    
  },
});

export const { } = registerSlice.actions;

export default registerSlice.reducer;