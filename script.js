function sendMessage() {
    // Get user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Validate input (you can add more validation as needed)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    // Create a pop-up response
    var response = "Dear " + name + ",\n\n";
    response += "Thank you for your message to Mahabali. He appreciates your kind words.\n\n";
    response += "Message: " + message;
    
    // Show the response in a pop-up
    alert(response);
    
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

// JavaScript to trigger the fade-in animation
document.addEventListener("DOMContentLoaded", function () {
    const elementsToFadeIn = document.querySelectorAll(".fade-in");
    
    elementsToFadeIn.forEach(function (element) {
        element.classList.add("fade-in-active");
    });
});
