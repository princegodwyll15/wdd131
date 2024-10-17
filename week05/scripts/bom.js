const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

let chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
  if (input.value.trim() != "") {
    const chapterName = input.value.trim();
    displayList(chapterName);
    chaptersArray.push(chapterName);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add('delete');
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBomList')) || [];
}

function deleteChapter(chapterName) {
  chaptersArray = chaptersArray.filter(item => item !== chapterName);
  setChapterList();
}

// Initialize list with saved chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});


