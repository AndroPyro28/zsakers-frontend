import {createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userSlice = createSlice({
    name: "User",
    initialState: {},

    reducers: {
        authenticationSuccess: (state, action) => {
             return action.payload
        },
        authenticationFailed: (state, action) => {
            return action.payload
        },
        logout: () => {
             Cookies.remove('access_token')
             window.location.reload()
        }
    },
})

export const {authenticationSuccess, authenticationFailed, logout } =  userSlice.actions;



export default userSlice.reducer;