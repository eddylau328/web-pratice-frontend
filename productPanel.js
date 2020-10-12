function createItemPanel() {
	let productPanel = document.getElementById('product-panel');
	let panelList = '';
	panelList += `<ul id="product-panel-columns">`;

	products.forEach((product) => {
		panelList += getItem(product);
	});

	panelList += `</ul>`;

	productPanel.innerHTML += panelList;
}

function getItem(product) {
	let item = '';
	// start
	item += `<li id="li-${product.id}" page-index="0" style="height: 456px; cursor: pointer;">`;
	item += `<div id="div-${product.id}" style="cursor: pointer;">`;

	item += getItemImage(product);
	item += getItemHeading(product);
	item += getItemDescription(product);
	if (product.rating) item += getItemRating(product);

	// end
	item += `</div>`;
	item += `</li>`;
	return item;
}

function getItemHeading(product) {
	// item heading
	let heading = '';
	heading += `<h2>${product.brand} ${product.chiName} ${product.engName}</h2>`;
	return heading;
}

function getItemDescription(product) {
	// item description
	let description = '';
	description += `<p>${product.description}</p>`;
	return description;
}

function getItemImage(product) {
	let image = '';
	image += `<div 
                id="div-image-${product.id}" 
                style="cursor: pointer;">`;

	image += `<a 
                id="anchor-${product.link}"
                style="cursor: pointer;">`;

	image += `<img
                src="${product.image}"
                alt="${product.chiName} ${product.engName}"
                width="202px"
                height="202px"
                style="cursor: pointer;">`;

	image += `</a>`;
	image += `</div>`;
	return image;
}

function getItemRating(product) {
	let rating = '';
	return rating;
}

createItemPanel();
