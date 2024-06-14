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
      //const { token } = response.data.body
      //const storage = rememberMe ? localStorage : sessionStorage
      //storage.setItem('token', token)
      /*       if (rememberMe) {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
      } */
      localStorage.setItem('rememberMe', rememberMe)
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
      /*       localStorage.removeItem('email')
      localStorage.removeItem('password') */
      localStorage.removeItem('rememberMe')
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
export const { logout } = authSlice.actions
