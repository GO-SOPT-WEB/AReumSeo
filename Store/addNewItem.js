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

/* DOM */

document.addEventListener("DOMContentLoaded", function () {
  selectCategory();
});
