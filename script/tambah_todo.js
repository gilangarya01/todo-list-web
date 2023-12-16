import { getAllMyTodo, createList, changeTodo, deleteTodo } from "./utils.js";

const todoArea = document.getElementById("todo-area");
const addTodo = document.getElementById("add-todo");
const saveTodo = document.getElementById("save-todo");
const titleTodo = document.getElementById("title-todo");

let myTodo = getAllMyTodo();

addTodo.addEventListener("click", handleAddTodo);
saveTodo.addEventListener("click", handleSaveTodo);

function handleAddTodo() {
  todoArea.appendChild(createList());
  clickDelete();
}

function handleSaveTodo() {
  if (!titleTodo.value == "") {
    let todoArray = changeTodo();

    myTodo.push({
      title: titleTodo.value,
      todoList: todoArray,
    });

    console.log(myTodo);
    localStorage.setItem("myTodo", JSON.stringify(myTodo));
  }
}

function clickDelete() {
  const deleteTodoButtons = document.querySelectorAll(".delete-todo");

  deleteTodoButtons.forEach((button) => {
    button.addEventListener("click", deleteTodo);
  });
}

clickDelete();
