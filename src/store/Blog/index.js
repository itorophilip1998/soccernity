import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogReq } from "../../utils/request";

export const getBlog = createAsyncThunk(
    'user/getBlog',
    async () => {
        const res = await getBlogReq()
        return res.data.categories;
    }
)
export const blog = createSlice(
    {
        name: "blog",
        initialState: { 
        },
        categories: [],

        reducers: {
            openIschat: (state, action) => {
                // 
            },
        },

        extraReducers: (builder) => {
            builder.addCase(getBlog.fulfilled, (state, action) => {
                state.categories = action.payload
            })
        }

    });


export const { openIschat } = blog.actions;

export default blog.reducer;
