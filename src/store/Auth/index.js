import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserReq } from "../../utils/request";


export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const res = await getUserReq();
        return res.data;
    }
)
export const authSlice = createSlice(
    {
        name: "user",
        initialState: {},
        user: "",
        reducers: {
            logoutAction: () => {
                localStorage.removeItem("token")
                window.location.href = "/signin"
            },
            updateProfile: (state, action) => {
            }

        },
        extraReducers: (builder) => {
            // Add reducers for additional action types here, and handle loading state as needed
            builder.addCase(getUser.fulfilled, (state, action) => {
                // Add user to the state array
                state.user = action.payload; 
            })
        },
    });


export const { logoutAction, updateProfile } = authSlice.actions;

export default authSlice.reducer;
