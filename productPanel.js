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
	item += `<li 
                id="li-${product.id}" 
                page-index="0" 
                style="height: 456px; 
                cursor: pointer;">`;

	item += `<div 
                id="div-${product.id}">`;

	item += getItemImage(product);
	item += getItemHeading(product);
	item += getItemDescription(product);
	if (product.rating) item += getItemRating(product);
	item += getItemPrice(product);
	// end
	item += `</div>`;
	item += `</li>`;
	return item;
}

function getItemHeading(product) {
	// item heading
	let heading = '';
	heading += `<a 
                id="anchor-heading-${product.id}" 
                title="${product.brand} ${product.chiName} ${product.engName}">`;
	heading += `<h2>${product.brand} ${product.chiName}&nbsp;${product.engName}</h2>`;
	heading += `</a>`;
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
                id="div-image-${product.id}">`;

	image += `<a 
                id="anchor-image-${product.id}" 
                href="${product.link}">`;

	image += `<img
                src="${product.image}"
                alt="${product.chiName} ${product.engName}"
                width="202px"
                height="202px">`;

	image += `</a>`;
	image += `</div>`;
	return image;
}

function getItemRating(product) {
	let rating = '';
	return rating;
}

function getItemPrice(product) {
	let price = '';
	price += `<div 
                class="product-price">`;

	price += `<span 
                id="span-price-${product.id}">`;
	price += `$${product.price}`;
	price += `</span>`;

	price += `<a 
                id="anchor-price-${product.id}" 
                href="${product.link}#msrp">`;
	price += `建議零售價`;
	price += `</a>`;

	price += `</div>`;

	return price;
}

createItemPanel();
