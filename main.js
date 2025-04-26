const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function displayItems() {
	const itemsFromStorage = getItemsFromStorage();

	itemsFromStorage.forEach((item) => addItemsToDom(item));

	checkUI();
}

function onAddItemSubmit(e) {
	e.preventDefault();
	const newItem = itemInput.value;

	// Validate Input
	if (newItem === '') {
		alert('Please Enter an Item');

		return;
	}

	// Create Item DOM Element
	addItemsToDom(newItem);

	// Add Item To Storage
	addItemsToStorage(newItem);

	// Running the CheckUI function for checks after page loads
	checkUI();

	itemList.value = '';
}

// Adding Items to DOM
function addItemsToDom(item) {
	// Create List Item
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(item));

	const button = createButton('remove-item btn-link text-red');

	// Added the Button to the li
	li.appendChild(button);

	// Added The li to the DOM
	itemList.appendChild(li);
}

// Button Creation Function
function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;
	const icon = createIcon('fa-solid fa-xmark');
	// Added the Icon to the Button
	button.appendChild(icon);
	return button;
}

// Icon Creation Function
function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

// Adding Items to Local Storage
function addItemsToStorage(item) {
	const itemsFromStorage = getItemsFromStorage(); // This now calls the same thing form there in  here

	/* Check if items are in local storage 
    These Items are not needed as we are checking in the getItemsFromStorage function and we don'tt wanna repeat ourselves
    */

	// if (localStorage.getItem('items') === null) {
	// 	itemsFromStorage = [];
	// } else {
	// 	itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	// }

	// Add New Item to Array
	itemsFromStorage.push(item);

	// convert to JSON Stringing and set to localStorage

	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

// Get Items from Local Storage
function getItemsFromStorage() {
	let itemsFromStorage;

	if (localStorage.getItem('items') === null) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	}

	return itemsFromStorage;
}

// Remove Item Function
function removeItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		// console.log('Click');
		if (confirm('Are You Sure')) {
			e.target.parentElement.parentElement.remove();
		}

		checkUI();
	}
}

// Clear Items Function
function clearItems(e) {
	// Setting The Inner HTML of the ItemList to empty
	// itemList.innerHTML = '';

	// Using the while loop to loop through the first child of the  parent
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}

	checkUI();
}

// Filter Items Function
function filterItems(e) {
	const items = itemList.querySelectorAll('li');
	// const text = e.target.value.toLowerCase();

	// this is the same as the above line but using the getElementById method and getting the value of the input field
	const text = document.getElementById('filter').value.toLowerCase();

	items.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase();

		if (itemName.indexOf(text) != -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}

// Make Dynamic By Removing the Clear and Filter Button When List is Empty
function checkUI() {
	const items = itemList.querySelectorAll('li');
	if (items.length === 0) {
		clearBtn.style.display = 'none';
		itemFilter.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		itemFilter.style.display = 'block';
	}
}

// Initialize App to set up event listeners
// Removing the event listeners from the global scope and putting them in a init function
function init() {
	// Event Listeners
	itemForm.addEventListener('submit', onAddItemSubmit);
	itemList.addEventListener('click', removeItem);
	clearBtn.addEventListener('click', clearItems);
	itemFilter.addEventListener('input', filterItems);
	document.addEventListener('DOMContentLoaded', displayItems);

	checkUI();
}

init();
