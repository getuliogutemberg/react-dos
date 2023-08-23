import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  name: '',
  email: '',
  token: '',
  id: '',
  role: '',

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true
      state.name = 'João'
      state.email = 'kzZ3z@example.com'
      state.token = 'token'
      state.id = 1
      state.role = 'admin'      
    },
    logout: (state) => {
      state.isLogged = false
      state.name = ''
      state.email = ''
      state.token = ''
      state.id = ''
      state.role = ''

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer