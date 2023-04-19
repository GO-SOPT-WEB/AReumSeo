import { todoData, footerData } from "../utils/data.js";

/* calendar */

function showMyCategory(todoData) {
  const myCategorysection = document.querySelector(".myCategory");

  const myCategoryArticle = createMyCartegoryArticle(todoData);
  myCategorysection.appendChild(myCategoryArticle);
}

function createMyCartegoryArticle(data) {
  const categoryArticle = document.createElement("article");

  data.forEach((eachData) => {
    const categoryBtn = document.createElement("button");
    categoryBtn.textContent = eachData.category;
    categoryArticle.appendChild(categoryBtn);
  });

  return categoryArticle;
}

/* footer */

function showFooter(footerData) {
  const footer = document.querySelector(".categoryFooter");

  footerData.forEach((data) => {
    const footerButton = createFooter(data);
    footer.appendChild(footerButton);
  });
}

function createFooter(data) {
  const button = document.createElement("button");
  const icon = document.createElement("i");
  const text = document.createElement("p");

  icon.className = data.icon;
  text.textContent = data.text;
  // 각 버튼에 맞는 페이지 이동 주소 등록
  button.onclick = () => {
    location.href = data.href;
  };

  button.appendChild(icon);
  button.appendChild(text);

  return button;
}

/* DOM */

document.addEventListener("DOMContentLoaded", function () {
  showMyCategory(todoData);
  showFooter(footerData);
});
