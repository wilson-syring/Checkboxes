//query selector for checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// variable for last item checked in list
let lastcheck;

//function for looping through the array of checkboxes and checking the boxes between the first one and last one checked while holding the shift key
function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
      checkboxes.forEach(checkbox => {
          if (checkbox === this || checkbox === lastcheck){
              inBetween = !inBetween;
          }
          if (inBetween){
              checkbox.checked = true;
          }
      });
    }
    lastcheck = this;
};

// event listener for the mouse click
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));