
// Show user's name on login screen with a welcome message.
function showLogin() {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    document.getElementById("login").innerHTML = "Welcome, " + user.displayName + "!";
  });
}

// Logs out user when called.
// called on index page to reset user instance.
function logoutUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    firebase.auth().signOut();
  });
}

// Function to format a time into a string of format 00:00:000.
// @param milliseconds integer
// @return time string.
function formatTime(inputInt) {
  let remainder;
  let minutes;
  let seconds;
  let miliseconds;

    miliseconds = inputInt % 1000;
    
    if (miliseconds < 10) {
      miliseconds = "00" + miliseconds;
    } else if (miliseconds < 100) {
      miliseconds = "0" + miliseconds;
    }
    remainder = Math.floor(inputInt / 1000);
    seconds = remainder % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    remainder = Math.floor(remainder / 60);
    minutes = remainder;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds + ":" + miliseconds;
}


// Adds event listener to Index page to redirect to login page.
function indexEventListener() {
  document.body.addEventListener("click", function() {
    window.location.replace("login.html");
  });
}
