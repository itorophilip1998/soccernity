import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../utils/config";

const header = {
    headers: {
        "X-RapidAPI-Key": `${config.RapidAPIKey}`,
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
export const getLineUps = createAsyncThunk(
    'user/getLineUps',
    async (fixture) => {
        const res = await axios.get(`${config.BaseApi}/fixtures/lineups?fixture=${fixture}`, header)
        return res.data.response;
    }

)
