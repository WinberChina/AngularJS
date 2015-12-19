(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller("PanelController", function() {
		this.tab = 1; // Moving our tab initializer
		this.selectTab = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});
	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Origin of the Pentagona Gem is unknown,hence its' 
			+ 'low walue.It has a very high shine and 12 sides',
		canPurchase: true,
		images: [{
				full: 'img/sanmao.jpg',
				thumb: '../img/sanmao.jpg'
			}, {
				full: '../img/sanmao.jpg',
				thumb: '../img/sanmao.jpg'
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
			}]
		// soldOut: true,
	}]
})();