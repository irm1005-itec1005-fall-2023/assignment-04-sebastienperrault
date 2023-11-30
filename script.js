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

const form = document.querySelector("#new-item-form");
const input = document.querySelector("#new-item-input");
const list_el = document.querySelector("#items");


form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const item = input.value;

  if (!item) {
    alert("Please write down item");
    return;
  }
  const item_el = document.createElement("div");
  item_el.classList.add("item");

  const item_content_el = document.createElement("div");
  item_content_el.classList.add("content");


  item_el.appendChild(item_content_el);

  const item_input_el = document.createElement("input");
  item_input_el.classList.add("text");
  item_input_el.type = "text";
  item_input_el.value = item;
  item_input_el.setAttribute ("readonly", "readonly");

  item_content_el.appendChild(item_input_el);

  const item_actions_el = document.createElement("div");
  item_actions_el.classList.add("actions");

  const item_edit_el = document.createElement("button");
  item_edit_el.classList.add("edit");
  item_edit_el.innerHTML = "edit";

  const item_delete_el = document.createElement("button");
  item_delete_el.classList.add("delete")
  item_delete_el.innerHTML = "delete";

  item_actions_el.appendChild(item_edit_el);
  item_actions_el.appendChild(item_delete_el);

  item_el.appendChild(item_actions_el);

  list_el.appendChild(item_el)

  input.value = "";



  item_edit_el.addEventListener('click', () =>{
  if(item_edit_el.innerHTML.toLocaleLowerCase()== "edit") {
    item_input_el.removeAttribute("readonly");
    item_input_el.focus();
    item_edit_el.innerHTML = "save";
  } 
  else {
    item_input_el.setAttribute("readonly", "readonly");
    item_edit_el.innerHTML = "edit";
  }
``})
  item_delete_el.addEventListener('click', ()=> {
    list_el.removeChild(item_el);
  })
  
  });









/*  Old java of upd 1 now scratch out:

let itemData = null;

itemContainer.innerHTML="";
if (itemData === null) {
  return;
}

console.log(itemData)

const itemDiv = document.createElement("div");
itemDiv.classList.add("item");

const firstLetter = itemData.name.charAt(0).toUpperCase();
const restOfName = itemData.name.slice(1);

itemName.textContent = firstLetter + restOfName;

const itemID = document.createElement("p");
itemID.classList.add("li");
itemID.textContent = `#${itemData.id}`;

const itemImage = document.createElement("img");
itemImage.classList.add("image")
itemImage.src = itemData.sprites.front_default;

itemDiv.appendChild(itemName);
itemDiv.appendChild(itemID);
itemDiv.appendChild(itemImage);

itemContainer.appendChild(itemDiv);

function handleSearchitem(event) {
  event.preventDefault();

  const itemNumberToSearch = itemInputNumber.value;

  // Fetch the data from the API
  fetch(`${API_URL}${itemNumberToSearch}`)
    .then((response) => {
      // We can use .json() to get the json data from the response
      if (response.status === 404) {
        throw new Error("item not found");
      }

      return response.json();
    })
    .then((data) => {

      // Hide the empty state
      itemEmptyState.classList.add("hidden");

      // Set the pokemon data
      itemData = data;

      // Show the pokemon container
      renderitem();
    })
    .catch((error) => {
      console.log(error);
    });

   itemForm.addEventListener("submit", handleSearchitem); */
/*
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
*/



//
// Inits & Event Listeners
//
