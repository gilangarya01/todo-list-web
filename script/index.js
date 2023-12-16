function generateTodoCard(todo, index) {
  return `
    <div class="card lg:w-60 text-white border-gray-700 border-2">
      <div class="card-body">
        <h2 class="card-title">${todo.title}</h2>
        <div class="card-actions justify-end mt-3">
          ${createButton(
            index,
            "delete-btn",
            "Delete",
            "bg-red-700",
            "hover:bg-red-800"
          )}
          ${createButton(
            index,
            "detail-btn",
            "Detail",
            "bg-yellow-400",
            "hover:bg-yellow-600"
          )}
        </div>
      </div>
    </div>
  `;
}

function createButton(id, className, text, bgColor, hoverBgColor) {
  return `
    <button
      id="${id}"
      class="${className} ${bgColor} text-white py-1 px-2 rounded-md ${hoverBgColor}"
    >
      ${text}
    </button>
  `;
}

function handleDetailButtonClick(event) {
  const clickedButton = event.target;
  localStorage.setItem("idDetail", clickedButton.id);
  window.location.href = "/pages/detail_todo.html";
}

function handleDeleteButtonClick(button, dataAllTodo) {
  dataAllTodo.splice(button.id, 1);
  console.log(dataAllTodo);
  localStorage.setItem("myTodo", JSON.stringify(dataAllTodo));
  window.location.reload();
}

const cardTodo = document.getElementById("card-todo");

if (localStorage.getItem("myTodo")) {
  const dataAllTodo = JSON.parse(localStorage.getItem("myTodo"));
  const dataTodo = dataAllTodo.map(generateTodoCard).join("");

  cardTodo.innerHTML = dataTodo;

  const detailBtn = document.querySelectorAll(".detail-btn");
  detailBtn.forEach((button) => {
    button.addEventListener("click", handleDetailButtonClick);
  });

  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((button) => {
    button.addEventListener("click", () =>
      handleDeleteButtonClick(button, dataAllTodo)
    );
  });
}
