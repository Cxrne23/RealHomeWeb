// Login.js
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  
  const signupLink = document.getElementById("signup-link");
  const loginLink = document.getElementById("login-link");
  
  // Function to show login form and hide signup form
  function showLoginForm() {
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
  }
  
  // Function to show signup form and hide login form
  function showSignupForm() {
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
  }
  
  // Add event listeners to buttons and links
  loginBtn.addEventListener("click", showLoginForm);
  signupBtn.addEventListener("click", showSignupForm);
  signupLink.addEventListener("click", showSignupForm);
  loginLink.addEventListener("click", showLoginForm);
});
