const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorText = document.getElementById("error");

const newsletter = document.getElementById("newsletter");
const success = document.getElementById("success");
const successEmail = document.getElementById("success-email");
const dismissBtn = document.getElementById("dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
 const isValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(email);

  if (!isValid) {
    emailInput.classList.add("error");
    errorText.style.display = "block";
    return;
  }

  errorText.style.display = "none";
  emailInput.classList.remove("error");

  successEmail.textContent = email;
  newsletter.style.display = "none";
  success.style.display = "block";
});

dismissBtn.addEventListener("click", () => {
  success.style.display = "none";
  newsletter.style.display = "grid";
  emailInput.value = "";
});
