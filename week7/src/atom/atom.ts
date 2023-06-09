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

export const scoreState = atom({
  key: "scoreState",
  default: 0,
});

export const modalOnState = atom({
  key: "modalOnState",
  default: false,
});

export const disabledState = atom({
  key: "disabledState",
  default: false,
});

export const animateState = atom({
  key: "animateState",
  default: false,
});
