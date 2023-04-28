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
  },
  {
    name: img_2,
    alt: "두 번째 카드",
  },
  {
    name: img_3,
    alt: "세 번째 카드",
  },
  {
    name: img_4,
    alt: "네 번째 카드",
  },
  {
    name: img_5,
    alt: "다섯 번째 카드",
  },
  {
    name: img_6,
    alt: "여섯 번째 카드",
  },
  {
    name: img_7,
    alt: "일곱 번째 카드",
  },
  {
    name: img_8,
    alt: "여덟 번째 카드",
  },
  {
    name: img_9,
    alt: "아홉 번째 카드",
  },
];

const cardListbyLevel = [
  {
    level: "easy",
    imgList: cardImgList.slice(0, 5),
  },
  {
    level: "normal",
    imgList: cardImgList.slice(0, 7),
  },
  {
    level: "hard",
    imgList: cardImgList,
  },
];

export const easyCardList = cardListbyLevel[0].imgList.concat(
  cardListbyLevel[0].imgList
);
export const normalCardList = cardListbyLevel[1].imgList.concat(
  cardListbyLevel[1].imgList
);
export const hardCardList = cardListbyLevel[2].imgList.concat(
  cardListbyLevel[2].imgList
);

// console.log(cardListbyLevel[0].imgList.concat(cardListbyLevel[0].imgList));
