import faker from 'faker';
let products = '';

[...Array(5)].forEach(() => {
	const name = faker.commerce.productName();
	products += `<div>${name}</div>`;
});

// console.log(products);
document.getElementById('dev-products').innerHTML = products;
