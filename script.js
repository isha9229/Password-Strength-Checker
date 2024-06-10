const password = document.getElementById("password");
const msg = document.getElementById("msg");
const strength = document.getElementById("strength");
const togglePassword = document.getElementById("togglePassword");
const toggleIcon = document.getElementById("toggleIcon");

password.addEventListener("input", function () {
  const passwordValue = password.value;

  let strengthValue = "";

  const hasUpperCase = /[A-Z]/.test(passwordValue);
  const hasLowerCase = /[a-z]/.test(passwordValue);
  const hasNumbers = /[0-9]/.test(passwordValue);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
  const passwordLength = passwordValue.length;

  if (passwordLength === 0) {
    strengthValue = "";
  } else if (
    passwordLength < 6 ||
    !(hasUpperCase || hasLowerCase || hasNumbers || hasSpecialChars)
  ) {
    strengthValue = "Very Weak";
  } else if (passwordLength < 8) {
    strengthValue = "Weak";
  } else if (passwordLength < 10 || !hasSpecialChars) {
    strengthValue = "Medium";
  } else {
    strengthValue = "Strong";
  }

  strength.textContent = strengthValue;
  msg.style.display = "block"; // display msg
});

togglePassword.addEventListener("click", function () {
  const passwordType = password.getAttribute("type");

  if (passwordType === "password") {
    password.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    password.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
});
