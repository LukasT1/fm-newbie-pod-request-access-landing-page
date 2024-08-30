const inputEmail = document.querySelector(".content__form-input");
const errMsg = document.querySelector(".content__error");

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleError = function (e) {
  const email = inputEmail.value;

  if (pattern.test(email) || email === "") {
    inputEmail.classList.remove("content__form-input--error");
    errMsg.classList.remove("content__error--visible");
  } else if (e.type === "blur") {
    inputEmail.classList.add("content__form-input--error");
    errMsg.classList.add("content__error--visible");
  }
};

inputEmail.addEventListener("input", handleError);
inputEmail.addEventListener("blur", handleError);
