const newTodoInput = document.getElementById("new-todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const currentTododiv = document.querySelector(".current-todos");

let todos = [];

function Todos() {
  currentTododiv.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    if (todo.completed) {
      todoDiv.classList.add("completed");
    }
    const todoText = document.createElement("span");
    todoText.innerText = todo.text;
    todoText.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      Todos();
    });
    todoDiv.appendChild(todoText);
    currentTododiv.appendChild(todoDiv);
  });
}

addTodoBtn.addEventListener("click", () => {
  const newTodoText = newTodoInput.value;
  if (newTodoText) {
    todos.push({ text: newTodoText, completed: false });
    newTodoInput.value = "";
    Todos();
  }
});
