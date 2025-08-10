const btn = document.querySelector("#submit_button");
const input = document.querySelector("#input_box");
const list = document.querySelector("#list");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value.trim();
  if (value === "") return;

  let li = document.createElement("li");
  li.textContent = value;

  let liButton = document.createElement("button");
  liButton.textContent = "Delete";
  liButton.classList.add("delete-btn");

  li.appendChild(liButton);
  list.append(li);

  input.value = "";
});

// Event delegation (only one listener, set up once)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
