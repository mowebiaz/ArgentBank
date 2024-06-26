import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: null, // for storing the JWT
  isAuthenticated: false,
  loading: false,
  error: null,
}

const backendURL = 'http://localhost:3001/api/v1'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/user/login`, {
        email,
        password,
      })
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem('rememberMe', rememberMe ? 'true' : 'false')
      storage.setItem('token', response.data.body.token)
      return response.data.body
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
      localStorage.removeItem('rememberMe')
      localStorage.removeItem('token')
      sessionStorage.removeItem('rememberMe')
      sessionStorage.removeItem('token')
    },
    resetError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload.token
      state.isAuthenticated = true
      state.loading = false
      state.error = null
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default authSlice.reducer
export const { logout, resetError } = authSlice.actions
