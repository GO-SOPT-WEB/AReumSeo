const cardData = [
  {
    class: "ramen",
    name: "안성탕면",
    tags: [
      "#달콤",
      "#짭짤",
      "#된장라면",
      "#달콤",
      "#짭짤",
      "#된장라면",
      "#달콤",
      "#짭짤",
      "#된장라면",
    ],
    img: "./media/ramen_1.jpg",
  },
  {
    class: "ramen",
    name: "열라면",
    tags: ["#얼큰", "#화끈", "#해장가능"],
    img: "./media/ramen_2.jpg",
  },
  {
    class: "ramen",
    name: "짜파게티",
    tags: ["#짜장", "#촉촉", "#꾸덕"],
    img: "./media/ramen_3.jpg",
  },
  {
    class: "anju",
    name: "계란말이",
    tags: ["#치즈", "#추가", "#천원원"],
    img: "./media/anju_1.jpg",
  },
  {
    class: "anju",
    name: "모둠 소시지",
    tags: ["#다양한", "#맛"],
    img: "./media/anju_2.jpg",
  },
  {
    class: "anju",
    name: "어묵탕",
    tags: ["#뜨끈", "#담백", "#깊은맛"],
    img: "./media/anju_3.jpg",
  },
  {
    class: "anju",
    name: "치킨 가라아게",
    tags: ["#겉은바삭", "#속은촉촉"],
    img: "./media/anju_4.jpg",
  },
  {
    class: "soju",
    name: "소주",
    tags: ["#참이슬", "#새로", "#진로"],
    img: "./media/soju_1.jpg",
  },
  {
    class: "soju",
    name: "맥주",
    tags: ["#카스", "#테라", "#클라우드"],
    img: "./media/soju_2.jpg",
  },
  {
    class: "soju",
    name: "막걸리",
    tags: ["#지평", "#느린마을", "#밤"],
    img: "./media/soju_3.jpg",
  },
];

function isChecked(checked) {
  if (checked.checked === true) {
    showCard(checked.id);
  } 
}

function getFilteredData(checkedId) {
  switch (checkedId) {
    case "total":
      return cardData;
    case "ramen":
      return cardData.filter((it) => it.class === "ramen");
    case "anju":
      return cardData.filter((it) => it.class === "anju");
    case "soju":
      return cardData.filter((it) => it.class === "soju");
    default:
      return [];
  }
}

/* card */

function showCard(checkedId) {
  const filteredData = getFilteredData(checkedId);
  const cardSection = document.querySelector(".card");

  filteredData.forEach((data) => {
    const cardArticle = createCard(data);
    cardSection.appendChild(cardArticle);
  });
}

function createCard(data) {
  const cardArticle = document.createElement("article");
  const cardName = document.createElement("p");
  const cardTags = document.createElement("ul");
  const cardImg = document.createElement("img");
  const cardHeart = document.createElement("p");

  cardArticle.className = data.class;

  cardHeart.textContent = "♥";
  cardHeart.className = "heart";

  cardName.textContent = data.name;

  data.tags.forEach((tag) => {
    const eachCardTag = document.createElement("li");
    eachCardTag.textContent = tag;
    cardTags.appendChild(eachCardTag);
  });

  cardImg.src = data.img;

  cardArticle.appendChild(cardName);
  cardArticle.appendChild(cardTags);
  cardArticle.appendChild(cardImg);
  cardArticle.appendChild(cardHeart);

  return cardArticle;
}
