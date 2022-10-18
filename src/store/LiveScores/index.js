import { createSlice } from "@reduxjs/toolkit";
// import { config } from "../../utils/config";
import { getLegues, getFixturesLive, getFixturesToday, getFixturesDay1, getFixturesDay2, getFixturesDay3 } from "./Fixtures";
import { getEvents } from "./Matches";




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
            match_summary: []
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
            builder.addCase(getEvents.fulfilled, (state, action) => {
                state.match_summary = action.payload
            })

        },
    });


// export const {  } = Livescores.actions;

export default livescores.reducer;
