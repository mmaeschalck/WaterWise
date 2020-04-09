const factoids = [
    "The average family uses 1,200 litres of water per day — and can increase consumption up to 3,750 litres per day during the summer, according to the EPA.",
    "Taking a bath uses more than 130 litres of water on average, says the U.S. Geological Survey (USGS). The USGS recommends showering instead of bathing — as long as you keep an eye on the time. You could use up to 375 litres of water if you took a 20-minute shower, according to the USGS.",
    "Replacing showerheads with WaterSense labeled models can reduce the average family's water and electricity costs by $70 and can save the average family more than 10,000 litres of water per year, equal to the amount of water needed to wash 88 loads of laundry.",
    "The average family spends more than $1,000 per year in water costs, but can save more than $380 annually from retrofitting with WaterSense labeled fixtures and ENERGY STAR certified appliances.",
    "The typical person uses an average of 330 litres of water a day at home.",
    "Every time you shave minutes off your use of hot water and showering, you also save energy and keep dollars in your pocket."
];

// Function to post factoid in info panel.
function postFactoid() {
    let index = Math.floor(Math.random() * 6);
    let post = document.createElement("p");
    post.id = "factoid-text";
    post.innerHTML = factoids[index];
    document.getElementById("info-panel").appendChild(post);
}

// Function to change footer button colors for interactive feedback.
function loadInfo() {
    document.getElementById("footer-button1").style.backgroundColor = "#C0D7BB";
    document.getElementById("footer-button2").style.backgroundColor = "#C0D7BB";
    document.getElementById("footer-button3").style.backgroundColor = "#3E885B";
  }