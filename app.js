const addForm = document.querySelector(".add-list");
const submitButton = document.getElementById("do-button");
const ulListDay = document.querySelector(".day-to-do");
const ulListNight = document.querySelector(".night-to-do");
const toDoList = document.querySelector(".do-item");

//função parar gerar a lista de tarefas conforme período do dia selecionado
const generateList = (list) => {
  const dayRadio = document.getElementById("dayRadio");
  const nightRadio = document.getElementById("nightRadio");

  const html = `
  <li class="do-container">
      <span class ="do-item">${list}</span>
      <div class="icons">
      <button class="done-button">
          <span class="material-symbols-outlined done">
          done
          </span> 
      </button>
      <button class="delete-button">
          <span class="material-symbols-outlined delete">
              delete
          </span>
      </button>
      </div>
  </li>
  `;

  //adiciona na lista de tarefas de acordo com o horário
  if (dayRadio.checked) {
    ulListDay.innerHTML += html;
  }
  if (nightRadio.checked) {
    ulListNight.innerHTML += html;
  }
};

//função para receber o input através do enter
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const list = addForm.add.value.trim();
  generateList(list);
  addForm.reset();
});

//função para receber o input através do click do botão
submitButton.addEventListener("click", function handleButtonClick(e) {
  e.preventDefault();

  const list = addForm.add.value.trim();
  if (list.length == 0) {
    alert("Digite uma tarefa");
    return;
  } else {
    generateList(list);
    addForm.reset();
  }
});

//função para deletar/marcar feita a tarefa dia
ulListDay.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const listItem = e.target.closest(".do-container");
    if (listItem) {
      listItem.remove();
    }
  } else if (e.target.classList.contains("done")) {
    const listItem = e.target.closest(".do-container");
    if (listItem) {
      listItem.remove();
    }
  }
});

//função para deletar/marcar feita a tarefa dia
ulListNight.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const listItem = e.target.closest(".do-container");
    if (listItem) {
      listItem.remove();
    }
  } else if (e.target.classList.contains("done")) {
    const listItem = e.target.closest(".do-container");
    if (listItem) {
      listItem.remove();
    }
  }
});
