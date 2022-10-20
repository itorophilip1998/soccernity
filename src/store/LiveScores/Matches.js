import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../utils/config";

const header = {
    headers: {
        "X-RapidAPI-Key": `${config.RapidAPIKey}`,
        "X-RapidAPI-Host": `${config.RapidAPIHost}`
    }
};

export const getEvents = createAsyncThunk(
    'user/getEvents',
    async (fixture) => {
        const res = await axios.get(`${config.BaseApi}/fixtures/events?fixture=${fixture}`, header)
        return res.data.response;
    }

)
export const getStatistics = createAsyncThunk(
    'user/getStatistics',
    async (fixture) => {
        const res = await axios.get(`${config.BaseApi}/fixtures/statistics?fixture=${fixture}`, header) 
        return res.data.response;
    }

)
