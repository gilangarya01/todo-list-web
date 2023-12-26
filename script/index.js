function generateTodoCard(todo, index) {
  return `
      <div
          class="card lg:w-60 shadow-slate-800 shadow-lg text-white border-gray-700 border-2"
        >
          <div class="card-body">
            <h2 class="card-title">${todo.title}</h2>
            <div class="list flex items-center">
              <input
                type="checkbox"
                class="checkbox checkbox-sm mr-2"
                ${todo.todoList[0].checked ? "checked" : ""}
                disabled
              />
              <label>${todo.todoList[0].name}</label>
            </div>
            <div class="card-actions justify-end mt-3">
              <button
                class="bg-red-700 text-white py-1 px-2 rounded-md hover:bg-red-800"
                onclick="modal${index}.showModal()"
              >
                <i id="${index}" class="fa-solid fa-trash"></i>
              </button>
              <dialog id="modal${index}" class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">Hello!</h3>
                  <p class="py-4">Press ESC key or click the button below to close</p>
                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                    <button id="${index}" class="delete-btn btn">Hapus</button>
                  </div>
                </div>
              </dialog>
              <button
                id="${index}"
                class="detail-btn bg-yellow-600 text-black py-1 px-2 rounded-md hover:bg-yellow-800"
              >
                <i id="${index}" class="fa-solid fa-circle-info text-white"></i>
              </button>
            </div>
          </div>
        </div>
  `;
}

function handleDetailButtonClick(event) {
  const clickedButton = event.target;
  localStorage.setItem("idDetail", clickedButton.id);
  window.location.href = "/pages/detail_todo.html";
}

function handleDeleteButtonClick(button, dataAllTodo) {
  dataAllTodo.splice(button.id, 1);
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
