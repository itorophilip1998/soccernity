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
    async (event) => {
        const res = await axios.get(`${config.BaseApi}/fixtures/events?fixture=${event}`, header)
        return res.data.response;
    }
    
)
