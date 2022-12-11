import { createSlice } from "@reduxjs/toolkit";


const token = window.localStorage.getItem("token")
export const general = createSlice(
    {
        name: "general",
        initialState: {
            ischatUser: {
                isChat: false
            },
            formValue: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            token: null
        },
        reducers: {
            openIschat: (state, action) => {
                localStorage.setItem("isChat", true)
                state.ischatUser = action.payload
            },
            setformValue: (state, action) => {
                const data = action.payload;
                state.formValue = { ...state.formValue, data };
            },
            setAuth: (state, action) => {
                state.token = token;
            }
        },



    });


export const { openIschat, setformValue, setAuth } = general.actions;

export default general.reducer;
