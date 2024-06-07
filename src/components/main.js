const containerCards = document.querySelector(".cards__container");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const container = document.querySelector("#container");
const inputs = document.querySelectorAll(
  ".footer__sign-up-for-interview__input"
);
const phoneNumber = document.querySelector("#phone");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("touchstart", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("touchend", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

leftButton.addEventListener("click", () => {
  containerCards.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

rightButton.addEventListener("click", () => {
  containerCards.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".header__menu-icon");
  const sideMenu = document.querySelector(".header__side-menu__content");

  menuIcon.addEventListener("click", function () {
    if (sideMenu.style.display === "block") {
      sideMenu.style.display = "none";
    } else {
      sideMenu.style.display = "block";
    }
  });
});

//валидация

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".footer__sign-up-for-interview__input"
  );

  inputs.forEach((input) => {
    input.addEventListener("input", validateInput);
  });

  const submitButton = document.querySelector(
    ".footer__sign-up-for-interview__button--sign-up"
  );
  submitButton.disabled = true;
});

function validateInput(event) {
  const input = event.target;
  const errorId = input.id + "Error";
  const errorMessageContainer = document.getElementById(errorId);
  if (!errorMessageContainer) return;
  errorMessageContainer.innerHTML = "";

  let valid = true;

  if (input.value.trim() === "") {
    valid = false;
    errorMessageContainer.innerHTML = "Это поле обязательно для заполнения.";
  } else if (input.id === "phone") {
    const numberMask = IMask(phoneNumber, { mask: "+{7}(000) 000-00-00" });
  } else if (input.id === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(input.value.trim())) {
      valid = false;
      errorMessageContainer.innerHTML = "Пожалуйста, введите корректный email.";
    }
  }

  input.classList.toggle("error", !valid);
  input.classList.toggle("success", valid);

  validateAllFields();
}

function validateAllFields() {
  const inputs = document.querySelectorAll(
    ".footer__sign-up-for-interview__input"
  );
  let allValid = true;
  let allFilled = true;

  inputs.forEach((input) => {
    const errorId = input.id + "Error";
    const errorMessageContainer = document.getElementById(errorId);
    if (!errorMessageContainer) return;

    if (input.value.trim() === "") {
      allFilled = false;
      errorMessageContainer.innerHTML = "Это поле обязательно для заполнения.";
    }
  });
  const submitButton = document.querySelector(
    ".footer__sign-up-for-interview__button--sign-up"
  );
  submitButton.disabled = !allFilled;
}

//прикрепление файла
function updateFileName(input) {
  const fileNameSpan = document.getElementById("fileName");
  if (input.files.length > 0) {
    fileNameSpan.textContent = input.files[0].name;
  } else {
    fileNameSpan.textContent = "Прикрепить резюме";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.footer__answers__list-item');

  accordionItems.forEach(item => {
    const titleMobile = item.querySelector('.footer__answers__list-item__title__mobile');
    titleMobile.addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });
});

function onSumbit(e){
  alert('форма отправилась')
  e.preventDefault()
}