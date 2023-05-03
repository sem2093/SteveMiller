function updateDescription() {
    // Get the selected option value and text
    var dropdown = document.getElementById("dropdown");
    var value = dropdown.value;
    var text = dropdown.options[dropdown.selectedIndex].text;
    
    // Update the description element based on the selected option
    var description = document.getElementById("description");
    if (value === "option1") {
      description.innerHTML = "This project is an AI chat bot that uses natural language processing to communicate with users.";
    } else if (value === "option2") {
      description.innerHTML = "This project is a coding educational platform that provides a coding dictionary and step by step walk throughs.";
    } else if (value === "option3") {
      description.innerHTML = "This project is intended to make digesting the news simpler by fetching a priortized summary of daily or weekly events.";
    } else {
      description.innerHTML = "";
    }
  }

// Use JavaScript to listen for user input and process it
var input = document.getElementById("input");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 13 is the code for the "enter" key
    var message = input.value;
    input.value = "";
    // Process the user's message and generate a response
    var response = processMessage(message);
    // Display the response to the user
    displayMessage(response);
  }
});

// Define the chatbot's behavior and responses
function processMessage(message) {
  // Add your own logic here to generate a response based on the user's message
  return "Hello! How can I help you today?";
}

function displayMessage(message) {
  var output = document.getElementById("output");
  var messageElement = document.createElement("div");
  messageElement.innerText = message;
  output.appendChild(messageElement);
}