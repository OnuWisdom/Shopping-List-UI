const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

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

	// itemList.value = '';
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

// Event Listeners
itemForm.addEventListener('submit', addItem);
