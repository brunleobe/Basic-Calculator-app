const display = document.getElementById("display");

// Add event listeners for all number buttons
document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.value;
    });
});

// Clear button functionality
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

// Delete button functionality
document.getElementById("delete").addEventListener("click", () => {
    display.value = display.value.toString().slice(0, -1);
});

// Operator buttons
document.getElementById("dot").addEventListener("click", () => {
    display.value += ".";
});
document.getElementById("divide").addEventListener("click", () => {
    display.value += "/";
});
document.getElementById("multiply").addEventListener("click", () => {
    display.value += "*";
});
document.getElementById("subtract").addEventListener("click", () => {
    display.value += "-";
});
document.getElementById("add").addEventListener("click", () => {
    display.value += "+";
});

// Equals button functionality
document.getElementById("equals").addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});
