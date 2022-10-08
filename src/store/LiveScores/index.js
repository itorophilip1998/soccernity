import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as config from "../../utils/config";

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
         console.log(res)
        return res.data.data;
    }
)
export const Livescores = createSlice(
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

export default Livescores.reducer;
