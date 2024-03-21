import { configureStore } from '@reduxjs/toolkit'
import selectDayReducer from './features/selectedDay'
import isSidenavOpenReducer from './features/isSidenavOpen'

export const makeStore = () => {
  console.log('making store')
  return configureStore({
    reducer: {
      selectedDay: selectDayReducer,
      isSidenavOpen: isSidenavOpenReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']