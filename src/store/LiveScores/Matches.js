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
export const getPlayer = createAsyncThunk(
    'user/getPlayer',
    async ({ id, season }) => {
        const res = await axios.get(`${config.BaseApi}/players?id=${id}&season=${season}`, header)
        return res.data.response[0];
    }

)
export const getCoach = createAsyncThunk(
    'user/getCoach',
    async ({ team }) => {
        const res = await axios.get(`${config.BaseApi}/coachs?team=${team}`, header)
        return res.data.response;
    }

)
export const getCountry = createAsyncThunk(
    'user/getCountry',
    async ({ name }) => {
        const res = await axios.get(`${config.BaseApi}/countries?name=${name}`, header)
        return res.data.response;
    }

)
export const getH2H = createAsyncThunk(
    'user/getH2H',
    async ({ h2h }) => {
        const res = await axios.get(`${config.BaseApi}/fixtures/headtohead?h2h=${h2h}`, header)
        return res.data.response;
    }

)
export const getHomeLastMatch = createAsyncThunk(
    'user/getHomeLastMatch',
    async ({ team }) => {
        const res = await axios.get(`${config.BaseApi}/fixtures?last=50&team=${team}`, header)
        return res.data.response;
    } 
) 
export const getAwayLastMatch = createAsyncThunk(
    'user/getAwayLastMatch',
    async ({ team }) => {
        const res = await axios.get(`${config.BaseApi}/fixtures?last=50&team=${team}`, header)
        return res.data.response;
    } 
) 
export const getStanding = createAsyncThunk(
    'user/getStanding',
    async ({ league,season }) => {
        const res = await axios.get(`${config.BaseApi}/standings?league=${league}&season=${season}`, header)
        return res.data.response;
    } 
) 
