import { create } from "zustand";

const useInterestStore = create((set) => ({
    interestsInfo: [],
    setInterestsInfo: (newInterests) => set((state) => ({ interestsInfo: newInterests })),
}))

export default useInterestStore;