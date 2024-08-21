
const contactFormEle = document.getElementById('contactForm');
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
const contactFormAllInputEle = contactFormEle.querySelectorAll('input'); // all input elements inside the form
const contactFormAllTextArea = contactFormEle.querySelectorAll('textarea'); // all textearea inside the form.. only use one (for now)

const contactFormSubmitButton = document.getElementById("contactFormSubmitButton");

contactFormEle.addEventListener("submit", submitForm);



function submitForm(e) {
  e.preventDefault(); // prevent submit and page reload

  let isMissingInput = false;



  /* contactFormAllInputEle.forEach(inputElement => {
  
    if (!inputElement.value) { // if empty input-field

      alert("Enter input");
     // return; // exit function
      return;
    }
    
  }); */
  //const missingInputs 

  // cant exit a forEach loop pre-emptively, only possible with for-loop or other methods... forEach will continue through all either how.
  for (let index = 0; index < contactFormAllInputEle.length; index++) {
    const inputElement = contactFormAllInputEle[index];

   // alert("Enter input");

    if (!inputElement.value) {
      
     // assuming <label> is always the element just before the <input>
      const correspondingLabelEle = inputElement.previousElementSibling;

      const errorMessageSpanEle = document.createElement("span");
      errorMessageSpanEle.textContent = "Required Input"
      errorMessageSpanEle.style.color = "red";
      errorMessageSpanEle.style.paddingRight = "4px";
      errorMessageSpanEle.style.paddingLeft = "4px";

      // will be between <label> and <input>... is there a way to place on the same row as the corresponding <label>?
      //inputElement.insertAdjacentElement("beforebegin", errorMessageSpanEle)

      // beforeend, placing it inside the label element
      correspondingLabelEle.insertAdjacentElement("beforeend", errorMessageSpanEle);

      console.log("hallå");

      isMissingInput = true;
    }
    
  }

  for (let index = 0; index < contactFormAllTextArea.length; index++) {
    const textAreaElement = contactFormAllTextArea[index];

    console.log(`Textarea value: "${textAreaElement.value}"`);

    // need trim() otherwise it counts the default whitespace as value...
    if (!textAreaElement.value.trim()) {
      // assuming <label> is always the element just before the <textarea>
      const correspondingLabelEle = textAreaElement.previousElementSibling;

      const errorMessageSpanEle = document.createElement("span");
      errorMessageSpanEle.textContent = "Required Input"
      errorMessageSpanEle.style.color = "red";
      errorMessageSpanEle.style.paddingRight = "4px";
      errorMessageSpanEle.style.paddingLeft = "4px";

      //beforeend, placing it inside the label element
      correspondingLabelEle.insertAdjacentElement("beforeend", errorMessageSpanEle);

      console.log("hej");
      
      isMissingInput = true;
    }

  }


  // kinda weird when contactFormEle is already listening to this submitForm function and we send .submit here?

  if (!isMissingInput) {
    return contactFormEle.submit();
  } else {
    console.log("missing inputs"); // error messages have already been added to the respective fields
  }
}