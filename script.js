function toggleClass() {
  menu.classList.toggle("hide");
}

//get element
const dropdownTitle = document.querySelector(".title");
const menu = document.querySelector(".menu");

//bind listeners to these elements
dropdownTitle.addEventListener("click", toggleClass);
