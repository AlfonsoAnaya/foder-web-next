import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const selectedDaySlice = createSlice({
  name: 'selectedDay',
  initialState: {
    value: 0
  },
  reducers: {
    initializeDay: (state, action) => {
        state.value = action.payload
      },
    updateDay: (state, action) => {
      console.log("this is on the dispatch function:" , state.value, action.payload)
      state.value = action.payload
    }
  }
})

export const { initializeDay, updateDay } = selectedDaySlice.actions

export const selectedDay = (state: RootState) => state.selectedDay.value;

export default selectedDaySlice.reducer