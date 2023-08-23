//var pizzaType = "veggie";

//var slicesEaten = 4;

//console.log(`The ${pizzaType} pizza has ${8 - slicesEaten} slices left.`);

//The veggie pizza has 4 slices left.

  /* Header styles */


const heading = document.getElementById("mainHeader");

// Array of colors
const colors = ["#FF5733", "#FFC300", "#85C1E9", "#58D68D", "#F39C12", "#D98880", "#BB8FCE"];
  
heading.addEventListener("click", function () {

// Random color generation

const randomIndex = Math.floor(Math.random() * colors.length);
    
// Change text color
heading.style.color = colors[randomIndex];
});