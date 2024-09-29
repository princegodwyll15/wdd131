const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const linkElement = document.getElementById("active");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

linkElement.addEventListener("click", () => {
  linkElement.classList.toggle("activee");
});
