const categoryData = [
  { title: "===선택===", value: "none" },
  { title: "전체🍳", value: "total" },
  { title: "라면🍜", value: "ramen" },
  { title: "간단안주🥠", value: "anju" },
  { title: "술🍶", value: "soju" },
];

function handleFiles(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementById("previewImg");
      previewImage.src = e.target.result;
    };
    // reader가 이미지 읽도록 하기
    reader.readAsDataURL(input.files[0]);
  }
}

function selectCategory() {
  const createdSelect = document.querySelector(".selectCategory");
  categoryData.forEach((data) => {
    const createdOption = document.createElement("option");
    createdOption.textContent = data.title;
    createdOption.value = data.value;
    createdSelect.appendChild(createdOption);
  });
}

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
