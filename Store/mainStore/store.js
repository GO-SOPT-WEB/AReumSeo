const cardData = [
  {
    class: "ramen",
    name: "안성탕면",
    tags: [
      "#달콤",
      "#짭짤",
      "#된장맛",
      "#달콤",
      "#짭짤",
      "#된장맛",
      "#달콤",
      "#짭짤",
      "#된장맛",
    ],
    img: "../media/ramen_1.jpg",
  },
  {
    class: "ramen",
    name: "열라면",
    tags: ["#얼큰", "#화끈", "#해장가능", "#얼큰", "#화끈", "#해장가능"],
    img: "../media/ramen_2.jpg",
  },
  {
    class: "ramen",
    name: "짜파게티",
    tags: ["#짜장", "#촉촉", "#꾸덕", "#짜장", "#촉촉", "#꾸덕"],
    img: "../media/ramen_3.jpg",
  },
  {
    class: "anju",
    name: "계란말이",
    tags: [
      "#치즈",
      "#추가",
      "#천원",
      "#치즈",
      "#추가",
      "#천원",
      "#치즈",
      "#추가",
      "#천원",
    ],
    img: "../media/anju_1.jpg",
  },
  {
    class: "anju",
    name: "소시지",
    tags: [
      "#소세지",
      "#아채볶음",
      "#소세지",
      "#아채볶음",
      "#소세지",
      "#아채볶음",
    ],
    img: "../media/anju_2.jpg",
  },
  {
    class: "anju",
    name: "어묵탕",
    tags: ["#뜨끈", "#담백", "#깊은맛", "#뜨끈", "#담백", "#깊은맛"],
    img: "../media/anju_3.jpg",
  },
  {
    class: "anju",
    name: "치킨가라아게",
    tags: [
      "#바삭",
      "#촉촉",
      "#달콤",
      "#바삭",
      "#촉촉",
      "#달콤",
      "#바삭",
      "#촉촉",
      "#달콤",
    ],
    img: "../media/anju_4.jpg",
  },
  {
    class: "soju",
    name: "소주",
    tags: ["#참이슬", "#새로", "#진로", "#참이슬", "#새로", "#진로"],
    img: "../media/soju_1.png",
  },
  {
    class: "soju",
    name: "맥주",
    tags: [
      "#카스",
      "#테라",
      "#클라우드",
      "#카스",
      "#테라",
      "#클라우드",
      "#카스",
      "#테라",
      "#클라우드",
    ],
    img: "../media/soju_2.jpg",
  },
  {
    class: "soju",
    name: "막걸리",
    tags: ["#지평", "#느린마을", "#밤", "#지평", "#느린마을", "#밤"],
    img: "../media/soju_3.png",
  },
];

// 추가된 데이터 반영
function newData() {
  const cardClass = localStorage.getItem("class");
  const cardName = localStorage.getItem("name");
  const cardTags = JSON.parse(localStorage.getItem("tags"));
  const cardImgSrc = "../media/meme.jpg";

  if (cardTags && cardName) {
    cardData.push({
      class: cardClass,
      name: cardName,
      tags: cardTags,
      img: cardImgSrc,
    });
  }
  return cardData;
}

const newCardData = newData();

// 체크여부 판단
function isChecked(checked) {
  if (checked.checked === true) {
    showCard(checked.id);
    disabledOtherCategory(checked);
    disabledTotoalCategory(checked);
  } else {
    discardCard(checked.id);
    discardCategory(checked.id);
  }
}

// 체크된 카테고리에 속하는 항목 반환
function getFilteredData(checkedId) {
  switch (checkedId) {
    case "total":
      return newCardData;
    case "ramen":
      return newCardData.filter((it) => it.class === "ramen");
    case "anju":
      return newCardData.filter((it) => it.class === "anju");
    case "soju":
      return newCardData.filter((it) => it.class === "soju");
    default:
      return [];
  }
}

/* category */

let categoryData = [];

// 전체 카테고리 선택 시, 다른 카테고리 선택 비활성화 하는 함수
function disabledOtherCategory(checked) {
  if (checked.id === "total") {
    const otherCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:not(#total)'
    );
    otherCheckboxes.forEach((otherCheckbox) => {
      otherCheckbox.disabled = checked.checked;
    });
  }

  showCategory(checked.id, checked.value);
}

// 다른 카테고리 선택 시, 전체 카테고리 선택 비활성화 하는 함수
function disabledTotoalCategory(checked) {
  const checkedTotal = document.querySelector("#total");
  if (checked.id !== "total") {
    checkedTotal.disabled = true;
  }
}

// 카테고리 모달 생성하는 함수
function showCategory(checkedId, checkedValue) {
  const categorySection = document.querySelector(".category");
  const categoryArticle = document.createElement("article");
  const categoryItem = document.createElement("p");
  const deleteBtn = document.createElement("button");

  categoryData.push(checkedId);

  categoryArticle.className = checkedId;
  categoryItem.textContent = checkedValue;
  deleteBtn.textContent = "X";

  deleteBtn.onclick = function () {
    discardCategory(checkedId);
    discardCard(checkedId);
  };

  categoryItem.appendChild(deleteBtn);
  categoryArticle.appendChild(categoryItem);
  categorySection.appendChild(categoryArticle);
}

// 카테고리 모달 사라지게 하는 함수
function discardCategory(checkedId) {
  const categorySection = document.querySelector(".category");
  const articles = categorySection.querySelectorAll("article");

  categoryData = categoryData.filter((it) => it !== checkedId);

  articles.forEach((article) => {
    if (article.className === checkedId) {
      article.remove();
    }
  });

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.disabled = false;
  });
}

/* card */

// 데이터 바탕으로 생성한 카드를 section에 보여지게 하는 함수
function showCard(checkedId) {
  const filteredData = getFilteredData(checkedId);
  const cardSection = document.querySelector(".card");

  filteredData.forEach((data) => {
    const cardArticle = createCard(data);
    cardSection.appendChild(cardArticle);
  });
}

// 카드 만드는 함수
function createCard(data) {
  const cardArticle = document.createElement("article");
  const cardName = document.createElement("p");
  const cardTags = document.createElement("ul");
  const cardImg = document.createElement("img");
  const cardHeart = document.createElement("p");

  cardArticle.className = data.class;

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
  cardImg.alt = data.name;

  cardArticle.appendChild(cardName);
  cardArticle.appendChild(cardTags);

  if (cardTags.childElementCount > 3) {
    const moreTagsBtn = document.createElement("button");
    moreTagsBtn.textContent = "➕";

    moreTagsBtn.onclick = () => {
      const hiddenTags = showMoreTags(data);
      cardArticle.appendChild(hiddenTags);
    };
    cardArticle.appendChild(moreTagsBtn);
  }

  cardArticle.appendChild(cardImg);
  cardArticle.appendChild(cardHeart);

  return cardArticle;
}

// section에서 카드 사라지게 하는 함수
function discardCard(checkedId) {
  const cardSection = document.querySelector(".card");
  const articles = cardSection.querySelectorAll("article");

  if (checkedId === "total") {
    articles.forEach((article) => {
      article.remove();
    });
  }

  articles.forEach((article) => {
    if (article.className === checkedId) {
      article.remove();
    }
  });

  document.getElementById(checkedId).checked = false;
}

/* tags */

// 태그 모달 보여주는 함수
function showMoreTags(data) {
  const moreTags = document.createElement("div");
  const moreTagsArray = data.tags.slice(3);
  const hideTagsBtn = document.createElement("button");

  moreTags.className = data.name;
  hideTagsBtn.textContent = "❌";
  hideTagsBtn.onclick = () => {
    const shownTags = document.querySelector(`.${data.name}`);
    discardMoreTags(shownTags);
  };

  moreTagsArray.forEach((moreTag) => {
    const eachTag = document.createElement("p");
    eachTag.textContent = moreTag;
    moreTags.append(eachTag);
  });
  moreTags.appendChild(hideTagsBtn);
  return moreTags;
}

// 태그 모달 사라지게 하는 함수
function discardMoreTags(tag) {
  const moreTagDivs = document.querySelectorAll("div");

  moreTagDivs.forEach((div) => {
    if (div.className === tag.className) {
      div.remove();
    }
  });
}

// 새 항목 추가 클릭 시 이동
function addNewItem() {
  location.href = "/Store/addNewItem/addNewItem.html";
}
