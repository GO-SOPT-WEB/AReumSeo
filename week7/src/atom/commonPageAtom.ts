import { atom } from "recoil";
import { cardImgListProps } from "../components/CommonPage";

export const choiceOneState = atom<cardImgListProps | null>({
  key: "choiceOneState",
  default: null,
});

export const choiceTwoState = atom<cardImgListProps | null>({
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
