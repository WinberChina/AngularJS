(function() {
	var app = angular.module('store', ['store-products']);
	
	app.controller('StoreController', ['$http', function($http) {
		var store = this;
		store.products = [];
		$http.get('../products.json').success(function(data) {
			store.products = data;
		});
	}]);

	app.controller("ReviewController", function() {
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});
	
	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Origin of the Pentagona Gem is unknown,hence its' + 'low walue.It has a very high shine and 12 sides',
		canPurchase: true,
		images: [{
			full: 'img/sanmao.jpg',
			thumb: '../img/sanmao.jpg'
		}, {
			full: '../img/sanmao.jpg',
			thumb: '../img/sanmao.jpg'
		}],
		reviews: [{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			}, {
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}]
			// soldOut: true,
	}, {
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		canPurchase: true,
		images: [{
			full: 'img/sanmao.jpg',
			thumb: '../img/sanmao.jpg'
		}, {
			full: '../img/sanmao.jpg',
			thumb: '../img/sanmao.jpg'
		}],
		reviews: [{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			}, {
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}]
			// soldOut: true,
	}]
})();