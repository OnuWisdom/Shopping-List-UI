function insertElement() {
	const filter = document.querySelector('.filter');

	const h1 = document.createElement('h1');

	h1.innerText = 'insertAdjacentElement';

	filter.insertAdjacentElement('beforebegin', h1);
}

insertElement();

function run() {
	console.log(1);
}

// document.querySelector('#click').onclick = run;
document.getElementById('click').onclick = run;

const logo = document.querySelector('#clear');

const doubleClick = () => {
	if (document.body.style.backgroundColor !== 'purple') {
		document.body.style.backgroundColor = 'purple';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
};

logo.addEventListener('dblclick', doubleClick);

function clearBtn() {
	const clear = document.querySelector(ul);
}
