/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function initialised() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

 const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  
  function addTask() {
   if (inputBox.value === '') {
    alert("Add Item");
    }
    else{
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;

      const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', function() {
    li.remove();
    });

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
    inputBox.Value="";
  }
}
  function taskListClick(event) {
    if (event.target.tagName === 'BUTTON') {
      const li = event.target.closest('li');
      if (event.target.classList.contains('deleteBtn')) {
        li.remove();
      }
    } else if (event.target.tagName === 'DIV') {
        event.target.parentElement.classList.toggle('completed');
      }
    
  }


//
// Inits & Event Listeners
//
