import { create } from "zustand";

const useMemberStore = create((set) => ({
    name: "",
    nickName: "",
    imgUrl: "",
    setName: (value) => {set(state => ({name : value}))},
    setNickName: (value) => {set(state => ({nickName : value}))},
    setImgUrl: (value) => {set(state => ({imgUrl : value}))},
}))

export default useMemberStore;