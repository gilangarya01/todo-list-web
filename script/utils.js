export function getAllMyTodo() {
  let myTodo = [];
  if (localStorage.getItem("myTodo")) {
    myTodo = JSON.parse(localStorage.getItem("myTodo"));
  }
  return myTodo;
}

export function createList() {
  const list = document.createElement("div");
  list.className = "flex items-center bg-slate-700 rounded-md p-3 mt-2";
  list.innerHTML = `
    <input type="checkbox" class="check-todo checkbox" />
    <input type="text" placeholder="My todo ..." class="input-todo input input-sm w-full ml-3 p-5" />
    <button class="delete-todo ml-3 p-2 rounded-md hover:text-red-600">
      <i class="fa-solid fa-trash"></i>
    </button>
  `;
  return list;
}

export function changeTodo() {
  const todoList = document.querySelectorAll(".input-todo");
  const checkedTodo = document.querySelectorAll(".check-todo");
  let arr = [];
  todoList.forEach((e, i) => {
    let todoJson = {
      name: e.value,
      checked: checkedTodo[i].checked,
    };
    arr.push(todoJson);
  });
  return arr;
}

export function deleteTodo(event) {
  const todoElement = event.target.closest(".flex");
  if (todoElement) {
    todoElement.remove();
  }
}
