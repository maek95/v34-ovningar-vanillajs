const itemsListEle = document.getElementById("itemsList");

const addItemButton = document.getElementById("addItemButton");

const itemInput = document.getElementById("itemInput");

addItemButton.addEventListener("click", addListItem);

function addListItem() {

  const newListItem = document.createElement("li");
  // flex style on <li> removes the bullet-point?

  const text = itemInput.value;
  newListItem.textContent = text;
  itemsListEle.appendChild(newListItem);

  const newListItemButton = document.createElement("button");
  newListItemButton.style.padding = "4px";
  newListItemButton.style.marginLeft = "4px";
  newListItemButton.textContent = "Delete";
  newListItemButton.addEventListener("click", (() => {
    newListItem.remove(); // we only target the current newListItem because it is created inside this addListItem function, so the DOM keeps track of it.
  }))

  newListItem.appendChild(newListItemButton)
  itemInput.value = "";
}