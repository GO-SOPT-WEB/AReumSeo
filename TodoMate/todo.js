const calendarData = [
  {
    day: "월",
    remainedTodo: 6,
    date: 05,
  },
  {
    day: "화",
    remainedTodo: 9,
    date: 06,
  },
  {
    day: "수",
    remainedTodo: 6,
    date: 07,
  },
  {
    day: "목",
    remainedTodo: 6,
    date: 08,
  },
  {
    day: "금",
    remainedTodo: 8,
    date: 09,
    today: true,
  },
  {
    day: "토",
    remainedTodo: 7,
    date: 10,
  },
  {
    day: "일",
    remainedTodo: 6,
    date: 11,
  },
];

const todoData = [
  {
    id: "a1",
    name: "me",
    category: "아루밍",
    tasks: ["방 치우기🫧", "맛집 투어🍕"],
  },
  {
    id: "a2",
    name: "sopt",
    category: "SOPT",
    tasks: [
      "해삐🏵️웹팟 첫 세미나",
      "해삐🏵️웹팟 첫 뒷풀이",
      "해삐🏵️웹팟 워크샵",
    ],
  },
  {
    id: "a3",
    name: "university",
    category: "한성대",
    tasks: ["캡스톤 발표🤓", "UI/UX 디자인🎨"],
  },
  {
    id: "a4",
    name: "exercise",
    category: "운동",
    tasks: ["등산🏔️", "클라이밍🧗"],
  },
  {
    id: "a5",
    name: "friends",
    category: "친구덜",
    tasks: ["생일파티🎂", "성수 탐방🛩️"],
  },
];

const footerData = [
  {
    text: "HOME",
    icon: "fa-regular fa-calendar",
  },
  {
    text: "MY",
    icon: "fa-regular fa-user",
  },
];

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
      const todoCheckFinish = createTodoTasks(task)[0];
      const todoTask = createTodoTasks(task)[1];

      todoArticle.appendChild(todoCheckFinish);
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

  todoList.textContent = task;
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.className = "todoCheck";

  return [todoCheck, todoList];
}

/* footer */

function showFooter(footerData) {
  const footer = document.querySelector(".btn-wrapper");

  footerData.forEach((data) => {
    const footerHeader = createFooter(data);
    footer.appendChild(footerHeader);
  });
}

function createFooter(data) {
  const header = document.createElement("h2");
  const icon = document.createElement("i");
  const text = document.createElement("p");

  icon.className = data.icon;
  text.textContent = data.text;

  header.appendChild(icon);
  header.appendChild(text);

  return header;
}

/* DOM */

document.addEventListener("DOMContentLoaded", function () {
  showCalendar(calendarData);
  showTodo(todoData);
  showFooter(footerData);
});
