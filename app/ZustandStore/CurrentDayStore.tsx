import { create } from 'zustand'

interface CurrentDayState {
    currentDay: number
    updateDay: (payload:number) => void
}

const useCurrentDayStore = create<CurrentDayState>()((set) => ({
    currentDay: 0,
    updateDay: (payload) => set(() => ({ currentDay: payload })),
  }))

export default useCurrentDayStore