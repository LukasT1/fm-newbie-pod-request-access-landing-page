/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
const inputEmail = document.querySelector(".content__form-input");
const errMsg = document.querySelector(".content__form-input-error-msg");

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleError = function (e) {
  const email = inputEmail.value;

  if (pattern.test(email) || email === "") {
    inputEmail.classList.remove("content__form-input--error");
    errMsg.classList.remove("content__form-input-error-msg--visible");
  } else if (e.type === "blur") {
    inputEmail.classList.add("content__form-input--error");
    errMsg.classList.add("content__form-input-error-msg--visible");
  }
};

inputEmail.addEventListener("input", handleError);
inputEmail.addEventListener("blur", handleError);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjAyNC0wOC0yOC1wby1yZXF1ZXN0LWFjY2Vzcy1sYW5kaW5nLXBhZ2UvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19mb3JtLWlucHV0XCIpO1xuY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19mb3JtLWlucHV0LWVycm9yLW1zZ1wiKTtcblxuY29uc3QgcGF0dGVybiA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuXG5jb25zdCBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGVtYWlsID0gaW5wdXRFbWFpbC52YWx1ZTtcblxuICBpZiAocGF0dGVybi50ZXN0KGVtYWlsKSB8fCBlbWFpbCA9PT0gXCJcIikge1xuICAgIGlucHV0RW1haWwuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRlbnRfX2Zvcm0taW5wdXQtLWVycm9yXCIpO1xuICAgIGVyck1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGVudF9fZm9ybS1pbnB1dC1lcnJvci1tc2ctLXZpc2libGVcIik7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSBcImJsdXJcIikge1xuICAgIGlucHV0RW1haWwuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRfX2Zvcm0taW5wdXQtLWVycm9yXCIpO1xuICAgIGVyck1zZy5jbGFzc0xpc3QuYWRkKFwiY29udGVudF9fZm9ybS1pbnB1dC1lcnJvci1tc2ctLXZpc2libGVcIik7XG4gIH1cbn07XG5cbmlucHV0RW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUVycm9yKTtcbmlucHV0RW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlRXJyb3IpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9