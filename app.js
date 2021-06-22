// Grab HTML Elements
const userInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const todoItem = document.querySelector(".todoitem");
const container = document.querySelector(".container-2");
const removeX = document.querySelectorAll(".fa-times");

// Create Task in List with Submit Button
submitBtn.addEventListener("click", () => {
  // Create elements in list item
  let newTaskDiv = document.createElement("div");
  let iconHolder = document.createElement("i");
  newTaskDiv.innerHTML = userInput.value;

  // Puts list item in line
  newTaskDiv.className = "todoitem";

  // Create font awesome X
  iconHolder.className = "fas fa-times";

  // Append list item for user input
  newTaskDiv.appendChild(iconHolder);
  container.appendChild(newTaskDiv);
  userInput.value = "";
});

// Remove list item when font awesome X clicked
document.addEventListener("click", (e) => {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.remove();
  }
});
