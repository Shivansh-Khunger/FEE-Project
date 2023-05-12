// Get the username and password input elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function is_crct(username, password) {
  var users = [
    {
      username: "Shivansh_Khunger",
      password: "Khunger",
    },
    {
      username: "Shivansh_Makhija",
      password: "Makhija",
    },
    {
      username: "Shivansh_Setia",
      password: "Setia",
    },
    {
      username: "Shivansh_Pandey",
      password: "Pandey",
    },
  ];
  for (const user of users) {
    if (user.username === username && user.password === password) {
      // The user has been logged in successfully
      return 1;
    }
    if (user.username === username || user.password == password) {
      return 2;
      // The user has entered one correct and one incorrect value
      // therefore we are saying to them that they should try again
    }
  }
  return 0;
}
// When the user clicks the "Log In" button
document.getElementById("login-button").addEventListener("click", () => {
  // Get the username and password values
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the username and password are empty
  if (username === "" || password === "") {
    alert("Please enter a username and password.");
    return;
  }

  var is_correct = is_crct(username, password);
  const home = document.getElementById("Home-Button");
  const billing = document.getElementById("Billing-Button");
  if (is_correct === 1) {
    billing.click();
    return;
  } else if (is_correct === 2) {
    alert("Invalid username or password. Try Again!");
  } else {
    home.click();
    alert("Invalid username and password. Returning to Main Page!");
  }
});
