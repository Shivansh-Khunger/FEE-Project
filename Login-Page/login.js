// Get the button element by its ID
var googleLoginButton = document.getElementById("google-login-button");

// Add a click event listener to the button
googleLoginButton.addEventListener("click", function () {
  // Get the Google Auth instance
  gapi.auth2
    .getAuthInstance()
    .signIn()
    .then(
      function (googleUser) {
        // Handle the successful login
        onSignIn(googleUser);
      },
      function (error) {
        // Handle the login failure
        console.error(error);
      }
    );
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;
  var client_id =
    "1098360581029-ai3a6kljuij4fuhieh5kh58q3tft8kq4.apps.googleusercontent.com";

  // Send the id_token to your server for verification and login
  // ...

  // Redirect the user to the home page
  window.location.href = "../index.html";
}

// Facebook login
function checkLoginState() {
  var client_id = "YOUR_FACEBOOK_APP_ID_HERE";
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response, client_id);
  });
}

function statusChangeCallback(response, client_id) {
  if (response.status === "connected") {
    var access_token = response.authResponse.accessToken;

    // Send the access_token to your server for verification and login
    // ...

    // Redirect the user to the home page
    window.location.href = "../index.html";
  } else {
    console.log("User cancelled login or did not fully authorize.");
  }
}
