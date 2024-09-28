const input = document.getElementById("favchap");
// const addButton = document.querySelector('button');
const button = document.querySelector('button[type="submit"]');
const list = document.getElementById("list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");
list.textContent = input.value;

deleteButton.textContent = "❌";
li.append(deleteButton);
li.append(li);
