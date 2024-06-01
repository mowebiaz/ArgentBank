import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { logout } from './authSlice'

const initialState = {
  user: null, // for user object
  loading: false,
  error: null,
}

const backendURL = 'http://localhost:3001/api/v1'

export const fetchUserProfile = createAsyncThunk(
  'user/profile',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth
    //const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    //const token = sessionToken || localToken
    /*     if (!token) {
      return rejectWithValue('No token found')
    } */
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
  'user/updateUserName',
  async (userName, { getState, rejectWithValue }) => {
    const { token } = getState().auth
    //const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    /*     if (!token) {
      return rejectWithValue('No token found')
    } */
    try {
      const response = await axios.put(
        `${backendURL}/user/profile`,
        {
          userName: userName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      //console.log('response.data', response.data)
      //console.log(response.data.body)
      //console.log(response.data.body.userName)
      return response.data.body
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

    // reset user slice state when logout action is dispatched
    builder.addCase(logout, (state) => {
      state.user = null
      state.loading = false
      state.error = null
    })
  },
})

export default userSlice.reducer
