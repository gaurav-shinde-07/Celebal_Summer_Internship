const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  loginForm = document.querySelector("#loginForm"),
  signupForm = document.querySelector("#signupForm"),
  messageDiv = document.querySelector("#message");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));

formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  messageDiv.textContent = "";
  messageDiv.classList.remove("success", "error");
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  messageDiv.textContent = "";
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  messageDiv.textContent = "";
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  messageDiv.textContent = "Login successful!";
  messageDiv.classList.add("success");
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  messageDiv.textContent = "Signup successful!";
  messageDiv.classList.add("success");
});
