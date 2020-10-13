function createItemPanel() {
	let panelList = '';
	panelList += `<div 
					id="product-panel-columns" 
					class="product-list"></div>`;
	$('#product-panel').append(panelList);

	products.forEach((product) => {
		let productLabelToggle = checkboxLabelToggle();
		$('#product-panel-columns').append(getItem(product));
		$(`#input-checkbox-compare-${product.id}`).change((div) => {
			productLabelToggle(product);
		});
	});
}

function checkboxLabelToggle() {
	let state = true;
	return function (product) {
		let labelCheckbox = $(`#label-checkbox-compare-${product.id}`);
		if (state) {
			labelCheckbox.find('span').css('display', 'none');
			labelCheckbox.find('.replace').css('display', 'inline');
		} else {
			labelCheckbox.find('span').css('display', 'inline');
			labelCheckbox.find('.replace').css('display', 'none');
		}
		state = !state;
	};
}

function getItem(product) {
	let item = '';
	// start
	item += `<div 
				id="div-${product.id}"
				class="product">`;

	item += getItemImage(product);
	item += getItemCaption(product);
	item += `<div class="dtc-error-message"></div>`;
	item += `<div class="clearfix"></div>`;
	// end
	item += `</div>`;

	return item;
}

function getItemCaption(product) {
	let caption = '';
	caption += `<div 
					class="caption">`;
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
	heading += `<h2 class="product-heading">${product.brand} ${product.chiName}&nbsp;${product.engName}</h2>`;
	heading += `</a>`;
	return heading;
}

function getItemDescription(product) {
	// item description
	let description = '';
	description += `<p class="product-description">${product.description}</p>`;
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
	price += `&nbsp;`;
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
	checkbox += `<div 
                id="div-checkbox-compare-${product.id}" 
				class="product-compare">`;

	checkbox += `<div
					class="checker">`;
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

	checkbox += `</div>`;

	return checkbox;
}

$(document).ready(function () {
	createItemPanel();

	$('.checker').hover(
		function () {
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		}
	);
});
