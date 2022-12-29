import axios from 'axios'
import { config } from './config'

const { Api, Header } = config;


// auth request
export const signupReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/auth/signup`, req);
        return res
    } catch (error) {
        return error
    }
}
export const signinReq = async (req) => {
    try {

        const res = await axios.post(`${Api}/auth/signin`, req);
        return res
    } catch (error) {
        return error
    }

}
export const signoutReq = async (req) => {
    try {
        window.localStorage.clear()
        await axios.post(`${Api}/auth/signout`, Header);
        window.location.href = '/auth/signin'
    } catch (error) {
        return error
    }
}
export const resetPasswordReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/auth/reset-password?token=${req.token}&email=${req.email}`, req);
        return res
    } catch (error) {
        return error
    }
}
export const changePasswordReq = async (req) => {
    try {

        const res = await axios.post(`${Api}/auth/change-password`, req);
        return res
    } catch (error) {
        return error
    }
}
export const forgotPasswordReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/auth/forgot-password`, req);
        return res
    } catch (error) {
        return error
    }
}
export const updatProfileReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/auth/update-profile`, req, Header);
        return res
    } catch (error) {
        return error
    }
}

export const getUserReq = async (req) => {
    try {
        const res = await axios.get(`${Api}/auth/user-account`, Header);
        return res
    } catch (error) {
        return error
    }
}


// blog request 
export const getBlogReq = async (req) => {
    try {
        const res = await axios.get(`${Api}/categories`);
        return res
    } catch (error) {
        return error
    }
}
export const getSingleBlogReq = async (req) => {
    try {
        const res = await axios.get(`${Api}/article/find/${req}`);
        return res
    } catch (error) {
        return error
    }
}
export const addCommentReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/comment/create`, req, Header);
        return res
    } catch (error) {
        return error
    }
}
export const getCommentsReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/comment/create`, req, Header);
        return res
    } catch (error) {
        return error
    }
}
export const addLikeReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/like/create/${req.article_id}`, req, Header);
        return res
    } catch (error) {
        return error
    }
}
export const addReplyReq = async (req) => {
    try {
        const res = await axios.post(`${Api}/like/reply/${req.article_id}`, req, Header);
        return res
    } catch (error) {
        return error
    }
}