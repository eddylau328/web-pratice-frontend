function createItemPanel() {
	let panelList = '';
	panelList += `<ul 
					id="product-panel-columns" 
					class="ProductsPanel product-list thumbnails col_3">`;

	products.forEach((product) => {
		panelList += getItem(product);
	});

	panelList += `</ul>`;

	$('#product-panel').append(panelList);
}

function getItem(product) {
	let item = '';
	// start
	item += `<li 
                id="li-${product.id}" 
				page-index="0"
				class="span4 products title-separate" 
                style="height: 448px;">`;

	item += `<div 
                id="div-${product.id}">`;

	item += getItemImage(product);
	item += getItemCaption(product);
	item += `<div class="dtc-error-message"></div>`;
	item += `<div class="clearfix"></div>`;
	// end
	item += `</div>`;
	item += `</li>`;
	return item;
}

function getItemCaption(product) {
	let caption = '';
	caption += `<div 
					class="caption" 
					style="height: 219px;">`;
	caption += getItemHeading(product);
	caption += getItemDescription(product);

	if (product.rating) caption += getItemRating(product);
	caption += getItemPrice(product);
	caption += getCompareCheckBox(product);

	caption += `</div>`;
	return caption;
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
                class="product-image">`;

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

function getCompareCheckBox(product) {
	let checkbox = '';
	checkbox += `<p 
                id="p-checkbox-compare-${product.id}" 
                class="product-compare">`;
	checkbox += `<div 
                    class="checker" 
                    id="div-checkbox-compare-${product.id}">`;

	checkbox += `<span>`;
	checkbox += `<input 
                    name="input-checkbox-compare-name-${product.id}" 
                    type="checkbox" 
                    id="input-checkbox-compare-${product.id}">`;
	checkbox += `</span>`;
	checkbox += `</div>`;

	checkbox += `<label 
                    for="input-checkbox-compare-${product.id}" 
                    id="label-checkbox-compare-${product.id}"
                    title>`;

	checkbox += `<span>比較</span>`;
	checkbox += `<span class="replace">產品比較</span>`;

	checkbox += `</label>`;

	checkbox += `</p>`;

	return checkbox;
}

$(document).ready(function () {
	$('.checker').hover(
		function () {
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		}
	);
});

createItemPanel();
