const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function addItem(e) {
	e.preventDefault();
	const newItem = itemInput.value;

	// Validate Input
	if (newItem === '') {
		alert('Please Enter an Item');

		return;
	}

	// Create List Item
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(newItem));

	const button = createButton('remove-item btn-link text-red');

	li.appendChild(button);

	itemList.appendChild(li);

	itemList.value = '';
}

// Button Creation Function
function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;
	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);
	return button;
}

// Icon Creation Function
function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

// Remove Item Function
function removeItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		// console.log('Click');
		e.target.parentElement.parentElement.remove();
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
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
