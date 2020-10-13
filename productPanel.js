function createItemPanel() {
	let panelList = '';
	panelList += `<div 
					id="product-panel-columns" 
					class="product-list grid"></div>`;
	$('#product-panel').append(panelList);

	products.forEach((product) => {
		$('#product-panel-columns').append(getItem(product));

		// Handles the checkbox change word
		let productLabelToggle = checkboxLabelToggle();
		$(`#input-checkbox-compare-${product.id}`).change(() => {
			// update the checkbox word to other one
			productLabelToggle(product);
		});

		// Screen Size change the checkbox need to be the same word or not
		let productLabelNameToggle = checkboxLabelNameToggle();
		// initialize label name
		productLabelNameToggle(product);
		$(window).resize(() => {
			productLabelNameToggle(product);
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

// change the name when the window size is <= / > than assigned value
function checkboxLabelNameToggle() {
	let windowChange = false;
	let lastwindowWidth = null;
	return function (product) {
		// window.innerWidth is much accurate than $(window).width()
		let windowWidth = window.innerWidth;
		let smallerWindow;

		if (lastwindowWidth === null) {
			windowChange = true;
			smallerWindow = windowWidth <= 500;
		} else if (windowWidth <= 500 && lastwindowWidth > 500) {
			windowChange = true;
			smallerWindow = true;
		} else if (windowWidth > 500 && lastwindowWidth <= 500) {
			windowChange = true;
			smallerWindow = false;
		} else {
			windowChange = false;
		}

		if (windowChange) {
			let labelCheckbox = $(`#label-checkbox-compare-${product.id}`);
			if (smallerWindow) {
				// change functionality for smaller screens
				labelCheckbox.find('span').text('產品比較');
				labelCheckbox.find('.replace').text('產品比較');
			} else {
				// change functionality for larger screens
				labelCheckbox.find('span').text('比較');
				labelCheckbox.find('.replace').text('產品比較');
			}
		}
		lastwindowWidth = windowWidth;
	};
}

function getItem(product) {
	let item = '';
	// start
	item += `<div
				class="product-tile">`;
	item += `<div 
				id="div-${product.id}"
				class="product">`;
	item += getItemImage(product);
	item += getItemCaption(product);
	item += `<div class="dtc-error-message"></div>`;
	item += `<div class="clearfix"></div>`;
	// end
	item += `</div>`;
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
	stars =
		'https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto/Olay_HK/zh-hk/-/media/Olay_HK/Images/Common%20Icons/RatingStars-on.png?v=1-201608042014';
	emptyStars =
		'https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto/Olay_HK/zh-hk/-/media/Olay_HK/Images/Common%20Icons/RatingStars.png?v=1-201608042014';

	if (product.rating) {
		let ratingPercentage = (product.rating / 5.0) * 100;
		rating += `<a
					 class="product-rating" 
					 href="${product.link}">`;

		rating += `<div id="rating-wrapper-${product.id}" class="rating-wrapper">`;

		rating += `<div class="rating">`;
		rating += `<img id="empty-stars-${product.id}" src="${emptyStars}" alt="Rating Stars Off" data-src="https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto/Olay_HK/zh-hk/-/media/Olay_HK/Images/Common%20Icons/RatingStars.png?v=1-201608042014" class="lazyload" title="Rating Stars Off">`;
		rating += `<div id="rating-stars-${product.id}" style="Width:${ratingPercentage}%;">`;
		rating += `<img id="full-stars-${product.id}" src="${stars}" alt="Rating Stars On" data-src="https://res.cloudinary.com/mtree/image/upload/f_auto,q_auto/Olay_HK/zh-hk/-/media/Olay_HK/Images/Common%20Icons/RatingStars-on.png?v=1-201608042014" class="lazyload">`;
		rating += `</div>`;
		rating += `</div>`;

		rating += `<span class="reviewtxt">(<span id="review-${product.id}">${product.reviewText}</span>)</span>`;

		rating += `</div>`;

		rating += `</a>`;
	}

	return rating;
}

function getItemPrice(product) {
	let price = '';
	price += `<div 
                class="product-price">`;

	price += `<span 
                id="span-price-${product.id}">`;
	price += `$${product.price.toFixed(2)}`;
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
	checkbox += `<div class="pretty p-default" id>`;
	checkbox += `<input 
                    name="input-checkbox-compare-name-${product.id}" 
                    type="checkbox" 
					id="input-checkbox-compare-${product.id}">`;
	checkbox += `<div class="state">`;
	checkbox += `<label 
                    for="input-checkbox-compare-${product.id}" 
                    id="label-checkbox-compare-${product.id}">`;
	checkbox += `<span>比較</span>`;
	checkbox += `<span class="replace">產品比較</span>`;
	checkbox += `</label>`;
	checkbox += `</div>`;
	checkbox += `</div>`;
	checkbox += `</div>`;

	return checkbox;
}

$(document).ready(function () {
	createItemPanel();
});
