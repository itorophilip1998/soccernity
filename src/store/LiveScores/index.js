import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { config } from "../../utils/config";

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
export const getFixturesLive = createAsyncThunk(
    'user/getFixturesLive',
    async () => { 
        const res = await axios.get(`${config.BaseApi}/fixtures?live=all`, header) 
        return res.data.response;
    }
)
export const getFixturesToday = createAsyncThunk(
    'user/getFixturesToday',
    async () => {
        const date = moment().add('days').format("YYYY-MM-DD") 
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)
export const getFixturesDay1 = createAsyncThunk(
    'user/getFixturesDay1',
    async () => {
        const date = moment().add(1,'days').format("YYYY-MM-DD") 
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)
export const getFixturesDay2 = createAsyncThunk(
    'user/getFixturesDay2',
    async () => {
        const date = moment().add(2,'days').format("YYYY-MM-DD") 
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)
export const getFixturesDay3 = createAsyncThunk(
    'user/getFixturesDay3',
    async () => {
        const date = moment().add(3,'days').format("YYYY-MM-DD") 
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)
export const livescores = createSlice(
    {
        name: "livescores",
        initialState: {
            leagues: [],
            live: [],
            today: [],
            day1: [],
            day2: [],
            day3: [],
        },
        reducers: {


        },
        extraReducers: (builder) => {
            builder.addCase(getLegues.fulfilled, (state, action) => {
                state.leagues = action.payload
            })
            builder.addCase(getFixturesLive.fulfilled, (state, action) => {
                state.live = action.payload
            })
            builder.addCase(getFixturesToday.fulfilled, (state, action) => {
                state.today = action.payload
            })
            builder.addCase(getFixturesDay1.fulfilled, (state, action) => {
                state.day1 = action.payload
            })
            builder.addCase(getFixturesDay2.fulfilled, (state, action) => {
                state.day2 = action.payload
            })
            builder.addCase(getFixturesDay3.fulfilled, (state, action) => {
                state.day3 = action.payload
            })

        },
    });


// export const {  } = Livescores.actions;

export default livescores.reducer;
