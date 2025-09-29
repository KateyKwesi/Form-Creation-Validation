const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  let userValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  console.log(userValue, emailValue, passwordValue);

  let isValid = true;
  let messages = [];
  userValue.length < 3
    ? ((isValid = !isValid),
      messages.push(`userName should be more than 3 characters`))
    : null;
  emailValue.includes(`@`) && emailValue.includes(`.`)
    ? null
    : ((isValid = !isValid), messages.push(`Email not valid`));
  passwordValue.length < 8
    ? messages.push(`Password should not be less than 8 characters`)
    : null;
  feedbackDiv.style.display = `block`;
  isValid === true
    ? ((feedbackDiv.textContent = `Registeration successful!`),
      (feedbackDiv.style.color = "#28a745"))
    : ((feedbackDiv.innerHTML = messages.join(`<br>`)),
      (feedbackDiv.style.color = "#dc3545"));
});
