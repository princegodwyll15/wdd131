const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

button.addEventListener("click", ()=> {
  if (input.value.trim() != " ") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value='';
    input.focus();
  }
});

function displayList(item){
  let li =document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent= item;
  deleteButton.textContent= "❌";
  deleteButton.classList.add('delete');
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList(){
  localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem('myFavBomList'));
}

chapter = chapter.slice(0, chapter.length -1);
chaptersArray = chaptersArray.filter((item) => item !== chapter);
function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray=chaptersArray.filter(item => item !==chapter);
  setChapterList();
}
// The array declaration initializes the chaptersArray variable with the list of chapters returned by the getChapterList() function or an empty array if the function call returns null or undefined.
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});