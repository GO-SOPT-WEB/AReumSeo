import img_1 from "../assets/img_1.gif";
import img_2 from "../assets/img_2.gif";
import img_3 from "../assets/img_3.gif";
import img_4 from "../assets/img_4.gif";
import img_5 from "../assets/img_5.gif";
import img_6 from "../assets/img_6.gif";
import img_7 from "../assets/img_7.gif";
import img_8 from "../assets/img_8.gif";
import img_9 from "../assets/img_9.gif";

const cardImgList = [
  {
    name: img_1,
    alt: "첫 번째 카드",
    matched: false,
  },
  {
    name: img_2,
    alt: "두 번째 카드",
    matched: false,
  },
  {
    name: img_3,
    alt: "세 번째 카드",
    matched: false,
  },
  {
    name: img_4,
    alt: "네 번째 카드",
    matched: false,
  },
  {
    name: img_5,
    alt: "다섯 번째 카드",
    matched: false,
  },
  {
    name: img_6,
    alt: "여섯 번째 카드",
    matched: false,
  },
  {
    name: img_7,
    alt: "일곱 번째 카드",
    matched: false,
  },
  {
    name: img_8,
    alt: "여덟 번째 카드",
    matched: false,
  },
  {
    name: img_9,
    alt: "아홉 번째 카드",
    matched: false,
  },
];

function mixEasyCardList() {
  const mixedEasyCardList = cardImgList
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  console.log(mixedEasyCardList.concat(mixedEasyCardList));
  return mixedEasyCardList.concat(mixedEasyCardList);
}

function mixNormalCardList() {
  const mixedNormalCardList = cardImgList
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);
  console.log(mixedNormalCardList.concat(mixedNormalCardList));
  return mixedNormalCardList.concat(mixedNormalCardList);
}

function mixHardCardList() {
  const mixedHardCardList = cardImgList.sort(() => Math.random() - 0.5);
  console.log(mixedHardCardList.concat(mixedHardCardList));
  return mixedHardCardList.concat(mixedHardCardList);
}

export const easyCardList = mixEasyCardList();

export const normalCardList = mixNormalCardList();

export const hardCardList = mixHardCardList();
