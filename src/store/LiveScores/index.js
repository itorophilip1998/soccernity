import { createSlice } from "@reduxjs/toolkit";
// import { config } from "../../utils/config";
import { getTeams, getLegues, getFixturesLive, getFixturesToday, getFixturesDay1, getFixturesDay2, getFixturesDay3 } from "./Fixtures";
import { getAwayLastMatch, getCoach, getCountry, getEvents, getH2H, getHomeLastMatch, getLineUps, getPlayer, getStanding, getStatistics } from "./Matches";




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
            match_summary: [],
            statistics: [],
            lineups: [],
            player: [],
            coach: [],
            country: [],
            h2h: [],
            lastXaway: [],
            lastXhome: [],
            standing: [],
            teams: []
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(getTeams.fulfilled, (state, action) => {
                state.teams = action.payload 

            })
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
            builder.addCase(getStatistics.fulfilled, (state, action) => {
                state.statistics = action.payload
            })
            builder.addCase(getLineUps.fulfilled, (state, action) => {
                state.lineups = action.payload
            })
            builder.addCase(getPlayer.fulfilled, (state, action) => {
                state.player = action.payload
            })
            builder.addCase(getCoach.fulfilled, (state, action) => {
                state.coach = action.payload
            })
            builder.addCase(getCountry.fulfilled, (state, action) => {
                state.country = action.payload
            })
            builder.addCase(getH2H.fulfilled, (state, action) => {
                state.h2h = action.payload
            })
            builder.addCase(getHomeLastMatch.fulfilled, (state, action) => {
                state.lastXhome = action.payload
            })
            builder.addCase(getAwayLastMatch.fulfilled, (state, action) => {
                state.lastXaway = action.payload
            })
            builder.addCase(getStanding.fulfilled, (state, action) => {
                state.standing = action.payload
            })

        },
    });


// export const {  } = Livescores.actions;

export default livescores.reducer;
