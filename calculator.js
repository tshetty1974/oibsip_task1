// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// Add click event listeners to each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            // Calculate and display the result
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (button.textContent === "C") {
            // Clear the display
            display.value = "";
        } else {
            // Append the button's text to the display
            display.value += button.textContent;
        }
    });
});
