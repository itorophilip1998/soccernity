import { createSlice } from "@reduxjs/toolkit";


export const community = createSlice(
    {
        name: "community",
        initialState: {

        },
        reducers: {
            openIschat: (state, action) => {
                // 
            },

        },



    });


export const { openIschat } = community.actions;

export default community.reducer;
