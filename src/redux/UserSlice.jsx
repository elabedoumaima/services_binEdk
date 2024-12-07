import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    loading: false,
    error: "",
    gainableCount: 0,
    splitCount: 0
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        incrementGainable: state => {
            state.gainableCount++;
        },
        decrementGainable: state => {
            state.gainableCount--;
        },
        incrementSplit: state => {
            state.splitCount++;
        },
        decrementSplit: state => {
            state.splitCount--;
        }
    }
});

export const { login, logout, incrementGainable, decrementGainable, incrementSplit, decrementSplit } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
