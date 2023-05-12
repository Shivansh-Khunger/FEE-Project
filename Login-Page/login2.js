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
  if (is_correct) {
    home.click();
    return;
  }
  alert("Invalid username or password.");
});
