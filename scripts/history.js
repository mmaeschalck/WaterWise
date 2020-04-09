
// Function to get user's times from Firebase database.
// Displays times sorted by shortest time first using .OrderBy().
// appends elements containing times to times-list.
function getTimes() {
  firebase.auth().onAuthStateChanged(function (user) {
    let entries = 1;
    let timesRef = db.collection("users").doc(user.uid).collection("times");
    timesRef.orderBy("time", "asc").get().then(function (snap) {
        
      snap.forEach(function (doc) {
        let lineOutput = "Log " + entries + ": " + doc.data().date + " -- " + formatTime(doc.data().time);
        entries++;
        let element = document.createElement("p");
        element.className = "history-entry";
        element.innerHTML = lineOutput;
        document.getElementById("times-list").appendChild(element);
      });
    });
  });
}


//Function to change footer buttons on history page for interactive feedback.
function loadHistory() {
  document.getElementById("footer-button1").style.backgroundColor = "#C0D7BB";
  document.getElementById("footer-button2").style.backgroundColor = "#3E885B";
  document.getElementById("footer-button3").style.backgroundColor = "#C0D7BB";
}