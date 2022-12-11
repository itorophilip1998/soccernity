import axios from 'axios'
import { config } from './config'

const { Api } = config;
const { header } = config
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
        await axios.post(`${Api}/auth/signout`, header);
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

