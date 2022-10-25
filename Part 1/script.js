function addListItem() {
  const input = document.querySelector(".list-input");
  const list = document.querySelector(".list");

  if (!input || !list) return;

  const inputValue = input.value;
  if (!inputValue) return;

  const item = document.createElement("div");
  item.classList.add("list-item");
  item.innerText = inputValue;

  list.appendChild(item);

  input.value = null;
}

function start() {
  const button = document.querySelector(".list-button");
  if (!button) return;

  button.addEventListener("click", addListItem);
}

start();
