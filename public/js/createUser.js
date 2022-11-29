const btn=document.querySelector(".signup");
const createUser = document.querySelector("#username-signup");
const createPassword = document.querySelector("#password-signup");
const createConfirm = document.querySelector("#password-confirm");
const createEmail = document.querySelector("#email-signup");

const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = createUser.value.trim();
  const password = createPassword.value.trim();
  const confirmPassword = createConfirm.value.trim();
  const email = createEmail.value.trim();

  if(password===confirmPassword){
    if (username && password) {
      const response = await fetch("/api/users/newuser", {
        method: "POST",
        body: JSON.stringify({ username, password, email}),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (response) {
        alert("Created new user.");
        document.location.replace("/login");
      } else {
        alert("Failed to sign up.");
      }
    }else{
      alert("confirm password doesn't match with the password");
    }
  }
};


btn.addEventListener("click", signupFormHandler);
