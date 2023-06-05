import { atom } from "recoil";
import { easyCardList } from "../constants/cardImgList";

export const levelState = atom({
  key: "levelState",
  default: 0,
});

export const shuffleState = atom({
  key: "shuffleState",
  default: 0,
});

export const cardListState = atom({
  key: "cardListState",
  default: easyCardList,
});
