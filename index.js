


// getElementById is fast because it only searches for one unique ID
// querySelector can search for classes, and finds the first one with that class... querySelectorAll selects all the elements with the given class.. can manipulate many at the same time...?
const createNewEleButton = document.getElementById("createNewEleButton");
const changePageColorButton = document.getElementById("changePageColorButton");
const rootElement = document.documentElement; // will change color of ROOT (<html> ?)
const boxColors = ["red", "blue", "green", "black"];
const pageColors = ["white", "teal", "lightcoral", "lightgreen", "purple", "orange"];
let lastPageColor = null; // always want the page to change color on click, i.e. not get the same color over and over.
let containerDiv = null;

createNewEleButton.addEventListener("click", createBoxEle);
changePageColorButton.addEventListener("click", changePageColor);

function randomBoxColor() {

  /* Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
Math.random() * 4 gives a range between 0 (inclusive) and 4 (exclusive), so it can produce values like 0, 1.5, 3.9, etc.
Math.floor(Math.random() * 4) will then floor these values to 0, 1, 2, or 3, which are valid indices for an array of length 4. */

//i.e. get a number like 3.99 and convert to integer so it becomes 3.
// And that is why 4 is equal to the array-length instead of the last index (3)

  return boxColors[Math.floor(Math.random() * 4)]; // * boxColors.length works
}

function randomPageColor() {

 // let newColor = null; // do-while
  let newColor = pageColors[Math.floor(Math.random() * pageColors.length)];

 /*  do {
    console.log("running while-statement");
    newColor = pageColors[Math.floor(Math.random() * pageColors.length)];
  } while (lastPageColor === newColor);
 
 */

  while (lastPageColor === newColor) {

    newColor = pageColors[Math.floor(Math.random() * pageColors.length)]; // randomize newColor again until it isnt equal to lastColor
  } 

  console.log("newColor: ", newColor);
  lastPageColor = newColor;
  return newColor; 
}

function changePageColor() {
  rootElement.style.backgroundColor = randomPageColor();
}

function createBoxEle() {

  console.log("creating newBoxEle");

  if (!containerDiv) {
    containerDiv = document.createElement("div");
    containerDiv.style.display = "flex";
    containerDiv.style.padding = "16px";

    //insertAdjacentElement: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
    createNewEleButton.insertAdjacentElement("afterend", containerDiv);
    /* 
      <!-- beforebegin -->
      <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
      </p>
      <!-- afterend -->
    */
  }
  
  const newBoxEle = document.createElement("div");
  newBoxEle.style.padding = "20px"
  newBoxEle.style.backgroundColor = randomBoxColor();
  newBoxEle.style.borderStyle = "solid";
  newBoxEle.style.borderColor = "white";
  newBoxEle.style.borderWidth = "2px";
  newBoxEle.style.boxSizing = "border-box";
  
  // new element is always placed just after the button (createNewEleButton), pushing the rest of the already exisiting divs down
 // createNewEleButton.insertAdjacentElement("afterend", newBoxEle);

  // alternatively we couldve created a container where we appendChild all these new elements
  // containerDiv becomes an element inside the if-statement above... can that cause issues here?
  containerDiv.appendChild(newBoxEle);
}