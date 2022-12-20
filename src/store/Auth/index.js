import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
// import url from "../../json/config";
const api = process.env.REACT_APP_API;

let token = window.localStorage.getItem("token");
const config = { headers: { Authorization: `bearer ${token}` } };

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const res = await axios.get(`${api}/user/profile`, config)
        const balance = res.data.data.rank.balance;
        window.localStorage.setItem("balance", balance);
        return res.data.data;
    }
)
export const authSlice = createSlice(
    {
        name: "user",
        initialState: {
            data: [],
            loading: false,
            error: false
        },
        reducers: {
            logoutAction: () => {
                localStorage.removeItem("token")
                window.location.href = "/signin"
            },
            updateProfile: (state, action) => {
                // state.error = false 
                // state.loading = true 
                // axios.post(`${api}/user/profile`, action.payload, config).then((res) => {
                //     // window.location.href = "/dashboard/profile" 
                //     state.loading = false

                // }).catch((err) => {  
                //     state.error=true
                //     state.loading=false
                //     console.log(err) 
                // });
            }

        },
        extraReducers: (builder) => {
            // Add reducers for additional action types here, and handle loading state as needed
            builder.addCase(getUser.fulfilled, (state, action) => {
                // Add user to the state array
                state.data = action.payload
            })
        },
    });


export const { logoutAction, updateProfile } = authSlice.actions;

export default authSlice.reducer;
