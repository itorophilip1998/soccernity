import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  getBlogReq, getSingleBlogReq } from "../../utils/request";

export const getBlog = createAsyncThunk(
    'user/getBlog',
    async () => {
        const res = await getBlogReq()
        return res.data.categories;
    }
)
export const getSingleBlog = createAsyncThunk(
    'user/getSingleBlog',
    async (queryId) => {
        const res = await getSingleBlogReq(queryId);
        return res.data?.article;
    }
)

export const blog = createSlice(
    {
        name: "blog",
        initialState: {
        },
        categories: [],
        articles: {},

        reducers: {
            openIschat: (state, action) => {
                // 
            },
        },

        extraReducers: (builder) => {
            builder.addCase(getBlog.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            builder.addCase(getSingleBlog.fulfilled, (state, action) => {
                state.articles = action.payload
            })
        }

    });


export const { openIschat } = blog.actions;

export default blog.reducer;
