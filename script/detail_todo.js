import { getAllMyTodo, createList, changeTodo, deleteTodo } from "./utils.js";

const todoArea = document.getElementById("todo-area");
const addTodo = document.getElementById("add-todo");
const editTodo = document.getElementById("edit-todo");
const titleTodo = document.getElementById("title-todo");

let myTodo = getAllMyTodo();

let id = localStorage.getItem("idDetail");

titleTodo.value = myTodo[id].title;
myTodo[id].todoList.forEach((todo) => {
  todoArea.appendChild(generateList(todo));
});

function generateList(todo) {
  const list = document.createElement("div");
  list.className = "flex items-center bg-gray-700 rounded-md p-3 mt-2";
  list.innerHTML = `
      <input type="checkbox" class="check-todo checkbox" ${
        todo.checked ? "checked" : ""
      } />
      <input type="text" placeholder="My todo ..." class="input-todo input input-sm w-full ml-3 p-5" value="${
        todo.name
      }" />
      <button class="delete-todo ml-3 p-2 rounded-md hover:text-red-600">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
  return list;
}

addTodo.addEventListener("click", handleAddTodo);
editTodo.addEventListener("click", handleEditTodo);

function handleAddTodo() {
  todoArea.appendChild(createList());
  clickDelete();
}

function handleEditTodo() {
  if (!titleTodo.value == "") {
    let todoArray = changeTodo();

    myTodo[id] = {
      title: titleTodo.value,
      todoList: todoArray,
    };

    localStorage.setItem("myTodo", JSON.stringify(myTodo));
  }
  window.location.href = "/index.html";
}

function clickDelete() {
  const deleteTodoButtons = document.querySelectorAll(".delete-todo");

  deleteTodoButtons.forEach((button) => {
    button.addEventListener("click", deleteTodo);
  });
}

clickDelete();
