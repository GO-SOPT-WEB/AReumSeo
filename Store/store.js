document.addEventListener("DOMContentLoaded", function () {
  const cardSection = document.querySelector(".card");

  const cardData = [
    {
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
      name: "열라면",
      tags: ["#얼큰", "#화끈", "#해장가능"],
      img: "./media/ramen_2.jpg",
    },
    {
      name: "짜파게티",
      tags: ["#짜장", "#촉촉", "#꾸덕"],
      img: "./media/ramen_3.jpg",
    },
    {
      name: "계란말이",
      tags: ["#치즈", "#추가", "#천원원"],
      img: "./media/anju_1.jpg",
    },
    {
      name: "모둠 소시지",
      tags: ["#다양한", "#맛"],
      img: "./media/anju_2.jpg",
    },
    {
      name: "어묵탕",
      tags: ["#뜨끈", "#담백", "#깊은맛"],
      img: "./media/anju_3.jpg",
    },
    {
      name: "치킨 가라아게",
      tags: ["#겉은바삭", "#속은촉촉"],
      img: "./media/anju_4.jpg",
    },
    {
      name: "소주",
      tags: ["#참이슬", "#새로", "#진로"],
      img: "./media/soju_1.jpg",
    },
    {
      name: "맥주",
      tags: ["#카스", "#테라", "#클라우드"],
      img: "./media/soju_2.jpg",
    },
    {
      name: "막걸리",
      tags: ["#지평", "#느린마을", "#밤"],
      img: "./media/soju_3.jpg",
    },
  ];

  function createCard(data) {
    const cardArticle = document.createElement("article");
    const cardName = document.createElement("p");
    const cardTags = document.createElement("ul");
    const cardImg = document.createElement("img");
    const cardHeart = document.createElement("p");

    cardHeart.textContent = "♥";
    cardHeart.className = "heart";

    cardName.className = "name";
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

  cardData.forEach((data) => {
    const cardArticle = createCard(data);
    cardSection.appendChild(cardArticle);
  });
});
