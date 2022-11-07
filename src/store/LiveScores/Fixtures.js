import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { config } from "../../utils/config";

const header = {
    headers: {
        "X-RapidAPI-Key": `${config.RapidAPIKey}`, 
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
    async ({date}) => {
        // const date = moment().add(1, 'days').format("YYYY-MM-DD")
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)
export const getFixturesDay2 = createAsyncThunk(
    'user/getFixturesDay2',
    async () => {
        const date = moment().add(2, 'days').format("YYYY-MM-DD")
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)
export const getFixturesDay3 = createAsyncThunk(
    'user/getFixturesDay3',
    async () => {
        const date = moment().add(3, 'days').format("YYYY-MM-DD")
        const res = await axios.get(`${config.BaseApi}/fixtures?date=${date}`, header)
        return res.data.response;
    }
)

