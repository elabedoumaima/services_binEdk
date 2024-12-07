// في ContactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    message: '',
    isLoading: false,
    error: null,
  },
  reducers: {



    
  },
});

export const { } = contactSlice.actions;

export default contactSlice.reducer;