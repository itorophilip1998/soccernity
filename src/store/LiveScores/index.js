import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {config} from "../../utils/config";

const header = {
    headers: {
        "X-RapidAPI-Key": `${config.RapidAPIKey}`,
        "X-RapidAPI-Host": `${config.RapidAPIHost}`
    }
};

export const getLegues = createAsyncThunk(
    'user/getLegues',
    async () => {
        const res = await axios.get(`${config.BaseApi}/leagues`, header)
        return res.data.response;
    }
)
export const livescores = createSlice(
    {
        name: "user",
        initialState: {
            leagues: [],
        },
        reducers: {


        },
        extraReducers: (builder) => {
            builder.addCase(getLegues.fulfilled, (state, action) => {
                state.leagues = action.payload
            })
        },
    });


// export const {  } = Livescores.actions;

export default livescores.reducer;
