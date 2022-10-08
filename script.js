// Part 1: Add a click event to a button

// Use a click event and "attach" the click event to the button.
// When the button is clicked, give an alert: "button clicked" (just like you saw in the video).

const myButton = document.getElementById("mybutton");

mybutton.addEventListener("click", function () {
  alert("button clicked");
});

// [MY SOLUTION]
// const myButton = document.getElementById("mybutton");

// myButton.addEventListener("click", getAlerted);

// function getAlerted() {
//   alert("button clicked");
// }

// -------Part 2:-------

// Create a new function that includes the following functionalities:

// Add a click event to the new button.
// When the change-background-button is clicked you will add the class "red-background" to your body element.

// [MY SOLUTION]

const mySecondButton = document.getElementById("mySecondButton");

mySecondButton.addEventListener("click", function () {
  document.body.classList.replace("blue-background", "red-background");
});

// -------Part 3:------ [IK HEB DERDE BUTTON ZELF TOEGEVOEGD]

// We are going to change the changeColor function so that the background color also changes back to blue when the button is clicked.
// The background color is then "toggled", in other words: put on and removed again and put back on, etc.
// Change the name of the function from changeColor to toggleColor.
// Instead of adding an extra class "red-background" to the classlist we are going to toggle the class.
// Use Google to find out how to do this. Hint: toggle.

const myThirdButton = document.getElementById("myThirdButton");

// myThirdButton.addEventListener("click", toggleColor);

// function toggleColor() {
//   document.body.classList.toggle("red-background");
// }

// or
myThirdButton.addEventListener("click", function () {
  document.body.classList.toggle("red-background");
});
