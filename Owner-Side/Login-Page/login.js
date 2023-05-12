// Replace YOUR_CLIENT_ID with your Google API client ID.
var clientId =
  "1098360581029-ai3a6kljuij4fuhieh5kh58q3tft8kq4.apps.googleusercontent.com";

// Initialize the Google Sign In client.
var gSignIn = new google.auth.OAuth2();

// Set the client ID.
gSignIn.clientId = clientId;

// Set the scopes.
gSignIn.scopes = ["profile", "email"];

// Listen for the signIn event.
gSignIn.onSignIn = function (event) {
  // Get the user's ID token.
  var idToken = event.idToken;

  // Send the ID token to your backend server.
  // ...
};

// Display the Google Sign In button.
document
  .getElementById("google-login-button")
  .addEventListener("click", function () {
    gSignIn.signIn();
  });
