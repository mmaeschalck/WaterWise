let dateObj;
let timerStart;
let timerEnd;
let currentTimer;
let updateInterval;

// Function to start timer.
// updates total time every 25ms until timer is hit again.
// displays time on #time-number element.
// changes onclick of main timer button to endTimer().
function startTimer() {
    dateObj = new Date();
    timerStart = dateObj.getTime();
    document.getElementById("main-timer-button").onclick = endTimer;
    document.getElementById("main-timer").src = "images/showeron.svg";
  
    updateInterval = setInterval(updateTimer,25);
    
    function updateTimer() {
  
      dateObj = new Date();
      timerEnd = dateObj.getTime();
      currentTimer = timerEnd - timerStart;
  
      document.getElementById("timer-number").innerHTML = formatTime(currentTimer);
    }
}

// Function to continue timer.
// continues updating timer after time was stopped once.
function continueTimer() {
    dateObj = new Date();
    timerStart = dateObj.getTime();
    let tempTime = currentTimer;
    document.getElementById("main-timer-button").onclick = endTimer;
    document.getElementById("main-timer").src = "images/showeron.svg";
    updateInterval = setInterval(updateTimer,25);
    
    function updateTimer() {
      dateObj = new Date();
      timerEnd = dateObj.getTime();
      currentTimer = tempTime + (timerEnd - timerStart);
  
      document.getElementById("timer-number").innerHTML = formatTime(currentTimer);
    }
}

// Function to stop timer.
// makes save button visible after timer has been stopped at least once.
function endTimer() {
    clearInterval(updateInterval);
    document.getElementById("main-timer-button").onclick = continueTimer;
    document.getElementById("saveButton").style.visibility = "visible";
    document.getElementById("main-timer").src = "images/showeroff.svg";
}

// Function to save input time.
// Uses Firebase to save date and time in a unique document under "times" collection.
// saves time as (Number) and date as (String).
// resets elements on page after saving.
function saveTime() {
    firebase.auth().onAuthStateChanged(function (user) {
      let d = new Date();
    let showerDate = d.toDateString().slice(0, 15);
    let userRef = db.collection("users").doc(user.uid);
    userRef.collection("times").add({
      date: showerDate,
      time: currentTimer
    })
    document.getElementById("saveButton").style.visibility = "hidden";
    document.getElementById("main-timer-button").onclick = startTimer;
    document.getElementById("timer-number").innerHTML = "00:00:000"
    });
}

// Function to change colors of bottom buttons on main page for interactive feedback.
function loadMain() {
    document.getElementById("footer-button1").style.backgroundColor = "#3E885B";
    document.getElementById("footer-button2").style.backgroundColor = "#C0D7BB";
    document.getElementById("footer-button3").style.backgroundColor = "#C0D7BB";
}