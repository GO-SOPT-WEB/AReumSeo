import { calendarData, todoData, footerData } from "../utils/data.js";

/* calendar */

function showCalendar(calendarData) {
  const calendarSection = document.querySelector(".calendar");

  calendarData.forEach((data) => {
    const calendarArticle = createCalendarArticle(data);
    calendarSection.appendChild(calendarArticle);
  });
}

function createCalendarArticle(data) {
  const article = document.createElement("article");
  const calendarUl = document.createElement("ul");
  const container__day = document.createElement("li");
  const container__remainedTodo = document.createElement("li");
  const container__date = document.createElement("li");

  container__remainedTodo.className = "calendar__todoRemainNum";

  if (data.today) {
    container__remainedTodo.id = "today";
  }

  container__day.append(data.day);
  container__remainedTodo.append(data.remainedTodo);
  container__date.append(data.date);

  calendarUl.appendChild(container__day);
  calendarUl.appendChild(container__remainedTodo);
  calendarUl.appendChild(container__date);
  article.appendChild(calendarUl);

  return article;
}

/* todo */

function showTodo(todoData) {
  const todoSection = document.querySelector(".todo");

  todoData.forEach((data) => {
    const todoArticle = createTodoArticle(data);

    data.tasks.forEach((task) => {
      const todocheckRemainedTodo = createTodoTasks(task)[0];
      const todoTask = createTodoTasks(task)[1];

      todoArticle.appendChild(todocheckRemainedTodo);
      todoArticle.appendChild(todoTask);
    });
    todoSection.appendChild(todoArticle);
  });

  // 카테고리와 할 일 등이 포함된 아티클 생성 함수
  function createTodoArticle(data) {
    const article = document.createElement("article");
    const todoCategory = document.createElement("h2");
    const addCategoryButton = document.createElement("button");

    article.id = data.name;

    todoCategory.id = data.id;
    todoCategory.className = "category";
    todoCategory.textContent = data.category;

    addCategoryButton.textContent = "➕";

    addCategoryButton.onclick = function () {
      addCategoryButton.blur();
      article.appendChild(createAddModal(data));
    };

    todoCategory.appendChild(addCategoryButton);

    article.appendChild(todoCategory);

    return article;
  }
}

// 할 일 추가 모달 생성 함수
function createAddModal(data) {
  const addModalContainer = document.createElement("div");
  const addModalBg = document.createElement("div");
  const modalInput = document.createElement("input");
  const modalBtn = document.createElement("button");

  // 새로 추가될 항목
  let newTask;

  addModalContainer.className = "modalContainer";
  modalBtn.textContent = "추가";

  setTimeout(() => {
    modalInput.focus();
  }, 200);

  modalInput.onchange = (e) => {
    newTask = e.target.value;
  };

  modalBtn.onclick = () => {
    // 새로 추가되는 항목이 있을 경우에만 동작
    if (newTask !== undefined && newTask.length !== 0) {
      const newTodoArticle = document.getElementById(data.name);

      const newTodoCheck = createTodoTasks(newTask)[0];
      const newTodo = createTodoTasks(newTask)[1];

      data.tasks.push(newTask);

      newTodoArticle.appendChild(newTodoCheck);
      newTodoArticle.appendChild(newTodo);
    }

    addModalContainer.remove();
  };

  addModalBg.appendChild(modalInput);
  addModalBg.appendChild(modalBtn);

  addModalContainer.appendChild(addModalBg);

  return addModalContainer;
}

// 카테고리 내부 할 일 생성 함수
function createTodoTasks(task) {
  const todoCheck = document.createElement("input");
  const todoList = document.createElement("p");

  todoCheck.setAttribute("type", "checkbox");
  todoCheck.className = "todoCheck";

  todoList.textContent = task;

  return [todoCheck, todoList];
}

// 오늘의 남은 할 일 개수 체크 함수
function checkRemainedTodo() {
  const checkedTodaysRemainedTodo = document.querySelector("#today");
  const checkedRemainedTodo = document.getElementsByClassName("todoCheck");
  const checkedRemainedTodoArr =
    Array.prototype.slice.call(checkedRemainedTodo);
  checkedRemainedTodoArr.forEach((checked) => {
    checked.addEventListener("change", () => {
      calendarData.forEach((data) => {
        if (data.today) {
          if (checked.checked) {
            data.remainedTodo -= 1;
          } else {
            data.remainedTodo += 1;
          }
          checkedTodaysRemainedTodo.textContent = data.remainedTodo;
        }
      });
    });
  });
}

/* footer */

function showFooter(footerData) {
  const footer = document.querySelector(".todoFooter");

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
  showCalendar(calendarData);
  showTodo(todoData);
  checkRemainedTodo();
  showFooter(footerData);
});
