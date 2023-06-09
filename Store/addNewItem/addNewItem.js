const categoryData = [
  { title: "===선택===", value: "none" },
  { title: "전체🍳", value: "total" },
  { title: "라면🍜", value: "ramen" },
  { title: "간단안주🥠", value: "anju" },
  { title: "술🍶", value: "soju" },
];

// 이미지 미리보기
function handleFiles(input) {
  if (input.files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementById("previewImg");
      previewImage.src = e.target.result;
    };
    // reader가 이미지 읽도록 하기
    reader.readAsDataURL(input.files[0]);
  }
}

// 카테고리 선택 함수
function selectCategory() {
  const createdSelect = document.querySelector(".selectCategory");
  categoryData.forEach((data) => {
    const createdOption = document.createElement("option");
    createdOption.textContent = data.title;
    createdOption.value = data.value;
    createdSelect.appendChild(createdOption);
  });
}

// 메뉴 이름과 태그 저장 함수
function saveInfo() {
  const menu = document.querySelector(".input__menu");
  const tags = document.querySelector(".input__tag");

  let savedMenu;
  let savedTag;

  menu.onchange = (e) => {
    savedMenu = e.target.value;
    localStorage.setItem("name", savedMenu);
  };

  tags.onchange = (e) => {
    savedTag = e.target.value;

    let splitTag = savedTag.split(",");
    localStorage.setItem("tags", JSON.stringify(splitTag));
  };
}

// 카테고리 저장 및 추가가 끝나면 메인 페이지로 돌아가게 하는 함수
function handleSubmit() {
  const category = document.querySelectorAll("option");
  category.forEach((it) => {
    if (it.selected) {
      localStorage.setItem("class", it.value);
    }
  });

  location.href = "/Store/mainStore/store.html";
}

/* DOM */

document.addEventListener("DOMContentLoaded", function () {
  selectCategory();
  saveInfo();
});
