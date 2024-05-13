import { create } from 'zustand'

interface IsCustomPlanSelected {
    isCustomPlanSelected: boolean
    updateisCustomPlanSelected: (payload:boolean) => void
}

const useIsCustomPlanSelectedStore = create<IsCustomPlanSelected>()((set) => ({
    isCustomPlanSelected: false,
    updateisCustomPlanSelected: (payload) => set(() => ({ isCustomPlanSelected: payload }))
  }))

export default useIsCustomPlanSelectedStore