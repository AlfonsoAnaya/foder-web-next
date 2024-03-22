import { create } from 'zustand'

interface IsSidenavOpenState {
    isSidenavOpen: boolean
    updateIsSidenavOpen: (payload:boolean) => void
}

const useIsSidenavOpenStore = create<IsSidenavOpenState>()((set) => ({
    isSidenavOpen: false,
    updateIsSidenavOpen: (payload) => set(() => ({ isSidenavOpen: payload }))
  }))

export default useIsSidenavOpenStore