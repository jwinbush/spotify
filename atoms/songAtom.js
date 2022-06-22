import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", // unique ID 
    default: null, //intial value  
  });

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
