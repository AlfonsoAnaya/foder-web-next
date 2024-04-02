import { create } from 'zustand'

interface CurrentNavSectionState {
    currentNavSection: string
    updateCurrentNavSection: (payload:string) => void
}

const useCurrentNavSectionStore = create<CurrentNavSectionState>()((set) => ({
    currentNavSection: "",
    updateCurrentNavSection: (payload) => set(() => ({ currentNavSection: payload })),
  }));

export default useCurrentNavSectionStore