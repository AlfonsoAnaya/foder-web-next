import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const isSidenavOpenSlice = createSlice({
  name: 'isSidenavOpen',
  initialState: {
    value: false
  },
  reducers: {
    initializeIsSidenavOpen: (state, action) => {
        state.value = action.payload
      },
    updateIsSidenavOpen: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { initializeIsSidenavOpen, updateIsSidenavOpen } = isSidenavOpenSlice.actions

export const isSidenavOpen = (state: RootState) => state.isSidenavOpen.value;

export default isSidenavOpenSlice.reducer