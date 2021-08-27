let Email = document.querySelector("#Mail");
let Password = document.querySelector("#Pass");
let Button = document.querySelector("#Btn");
let Alert = document.querySelector("#alert");

Button.addEventListener("click", (e) => {
  e.preventDefault();

  if (Password.value === "" || Password.value === null) {
    Alert.innerHTML = "you must enter a password";
  } else if (Email.value === "" || Email.value === null) {
    Alert.innerHTML = "you must enter a email";
  } else if (Password.value.length < 6) {
    Alert.innerHTML = "Password to small";
  } else if (Password.value.length > 20) {
    Alert.innerHTML = "Password to large";
  } else {
    Alert.innerHTML = "successful logged in";
    location.assign("https://www.w3schools.com/");
  }

  setTimeout(() => {
    Alert.innerHTML = "";
  }, 3000);
});
