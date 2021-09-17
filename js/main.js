const app = new Vue({
	el: "#root",
	data: {
		products: [
			{
				"id": 1,
				"name": "Mocassino da barca",
				"price": 60,
				"image": "img/mocassino.jpg"
			},
			{
				"id": 2,
				"name": "Scarpa Nike",
				"price": 80,
				"image": "img/scarpa-nike.jpg"
			},
			{
				"id": 3,
				"name": "Scarpa Bershka",
				"price": 30,
				"image": "img/bershka.jpg"
			},
			{
				"id": 4,
				"name": "Pier One",
				"price": 49,
				"image": "img/pier-one.jpg"
			},
			{
				"id": 5,
				"name": "Vans",
				"price": 56,
				"image": "img/vans.jpg"
			},
			{
				"id": 6,
				"name": "Scarpa puma",
				"price": 70,
				"image": "img/scarpa-puma.jpg"
			}
		],
		cart: []
	},
	methods: {
		addToCart: function(product) {
			this.cart.push(product);
		},
		removeToCart: function(id) {
			this.cart = this.cart.filter(
				(elm) => {
					if ( elm.id != id ) {
						return true;
					}
					return false;
				}
			);
		},
		getTotalPrice: function() {
			let tot = 0;
		
			this.cart.forEach(
				(elm) => {
					tot += elm.price;
				}
			);
	
			return tot;
		}
	}
});