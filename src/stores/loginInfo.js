import { create } from "zustand";

const useLoginInfoStore = create((set) => ({
    grantType: "",
    accessToken: "",
    refreshToken: "",
    setGrantType: (newGrantType) => set(state => ({grantType:newGrantType})),
    setAccessToken: (newAccessToken) =>{set(state => ({accessToken:newAccessToken}))},
    setRefeshToken: (newRefreshToken) =>{set(state => ({refreshToken:newRefreshToken}))}
}))

export default useLoginInfoStore;