import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '../helpers/persistance'
const initialState = {
    isLoading: false,
    isLoggedin: false,
    user: null,
    error: null,
}
//hozircha bu yerga kelgani yoq
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart(state) {
            state.isLoading = true

        }, signUserSuccess(state, actions) {
            state.isLoading = false
            state.isLoggedin = true
            state.user = actions.payload
            setItem('token', actions.payload.token)

        }, signUserFailure(state, actions) {

            state.isLoading = false
            state.error = actions.payload
        },
        logout(state) {
            state.isLoggedin = false
            state.user = null
        },

    }
})

export const { signUserFailure, signUserStart, signUserSuccess, logout,hujjatloadaerFailre,hujjatloadaerStart,hujjatloadaerSucces } = authSlice.actions
export default authSlice.reducer