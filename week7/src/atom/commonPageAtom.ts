import { atom } from "recoil";
import { CardImgListProps } from "../components/CommonPage";

export const choiceOneState = atom<CardImgListProps | null>({
  key: "choiceOneState",
  default: null,
});

export const choiceTwoState = atom<CardImgListProps | null>({
  key: "choiceTwoState",
  default: null,
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
