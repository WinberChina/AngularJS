(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller("ReviewController", function() {
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});
	
	app.directive("productPanels", function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function() {
				this.tab = 1; // Moving our tab initializer
				this.selectTab = function(setTab) {
					this.tab = setTab;
				}
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		}
	});
	/*app.controller("PanelController", function() {
		this.tab = 1; // Moving our tab initializer
		this.selectTab = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});*/

	app.directive("productTitle", function() {
		return {
			restrict: 'E',
			// restrict: 'A',
			templateUrl: 'product-title.html'
		};
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