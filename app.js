const userInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const todoItem = document.querySelector(".todoitem");
const container = document.querySelector(".container-2");
const removeX = document.querySelectorAll(".fa-times");

submitBtn.addEventListener("click", () => {
  let newTaskDiv = document.createElement("div");
  let iconHolder = document.createElement("i");
  newTaskDiv.innerHTML = userInput.value;
  newTaskDiv.className = "todoitem";
  iconHolder.className = "fas fa-times";
  newTaskDiv.appendChild(iconHolder);
  container.appendChild(newTaskDiv);
  userInput.value = "";
});

document.addEventListener("click", (e) => {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.remove();
  }
});

// Testing git
