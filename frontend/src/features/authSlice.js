import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// initialize userToken from local storage
// à revoir avec le session storage
/* const token = sessionStorage.getItem('token')
  ? sessionStorage.getItem('token')
  : null */

const initialState = {
  // user: null, // Initially, no user is logged in
  // userInfo: {}, // for user object
  token: null, // for storing the JWT
  isAuthenticated: false, // for monitoring the login process.
  loading: false,
  error: null,
}

const backendURL = 'http://localhost:3001/api/v1'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(`${backendURL}/user/login`, {
        email,
        password,
      })
      // console.log(data)
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem('token', data.body.token)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login:
    // logout
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true
      // state.error = null
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      // state.user = action.payload.user
      state.token = action.payload.body.token
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default authSlice.reducer
