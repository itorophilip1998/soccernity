import { createSlice } from "@reduxjs/toolkit";


export const general = createSlice(
    {
        name: "general",
        initialState: {
            ischatUser: {
                isChat: false
            }
        },
        reducers: {
            openIschat: (state, action) => {
                localStorage.setItem("isChat", true)
                state.ischatUser = action.payload
            }
        },



    });


export const { openIschat } = general.actions;

export default general.reducer;
