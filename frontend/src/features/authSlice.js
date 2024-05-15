import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// initialize userToken from local storage
// à revoir avec le session storage
/* const token = sessionStorage.getItem('token')
  ? sessionStorage.getItem('token')
  : null */

const initialState = {
  user: null, // for user object
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
      // console.log(data)
      // const storage = rememberMe ? localStorage : sessionStorage;
      // storage.setItem('token', data.body.token)
      return response.data.body
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchUserProfile = createAsyncThunk(
  'auth/profile',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth
    try {
      const response = await axios.post(
        `${backendURL}/user/profile`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      //console.log('response', response)
      //console.log('response.data', response.data)
      return response.data.body
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateUserName = createAsyncThunk(
  'auth/updateUserName',
  async (userName, { getState, rejectWithValue }) => {
    const { token } = getState().auth
    try {
      const response = await axios.put(`${backendURL}/user/profile`, {
        userName: userName,
      }, 
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log('response.data', response.data)
      console.log(response.data.body)
      console.log(response.data.body.userName)
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
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
      //localStorage.removeItem('token')
      //sessionStorage.removeItem('token')
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

    // Profile
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
      state.error = null
    })
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    // Update user name
    builder.addCase(updateUserName.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(updateUserName.fulfilled, (state, action) => {
      state.user.userName = action.payload.userName
      state.loading = false
      state.error = null
    })
    builder.addCase(updateUserName.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default authSlice.reducer
export const { logout } = authSlice.actions
