import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserReq } from "../../utils/request";


export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const res = await getUserReq();
        if (!res) {
            localStorage.removeItem("token")
            window.location.href = "/signin"
        }
        return res.data;
    }
)
export const authSlice = createSlice(
    {
        name: "auth",
        initialState: {},
        user: {},
        reducers: {
            logoutAction: () => {
                localStorage.removeItem("token")
                window.location.href = "/signin"
            },
            updateProfile: (state, action) => {
            }

        },
        extraReducers: (builder) => {
            builder.addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
        },
    });


export const { logoutAction, updateProfile } = authSlice.actions;

export default authSlice.reducer;
