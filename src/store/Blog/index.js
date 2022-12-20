import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogReq } from "../../utils/request";

export const getBlog = createAsyncThunk(
    'user/getBlog',
    async () => {
        const res = await getBlogReq()

        console.log(res)
        // return res.data.response;
    }
)
export const blog = createSlice(
    {
        name: "blog",
        initialState: {

        },
        reducers: {
            openIschat: (state, action) => {
                // 
            },

        },



    });


export const { openIschat } = blog.actions;

export default blog.reducer;
