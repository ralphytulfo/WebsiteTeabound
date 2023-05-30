const btns=[
{
	id: 1,
	name: 'Regular Flavors'
},
{
	id: 2,
	name: 'Coolers'
},
{
	id: 3,
	name: 'Special'
},
{
	id: 4,
	name: 'House Special'
},
{
	id: 5,
	name: 'Matcha Series'
},
{
	id: 6,
	name: 'Nutella Series'
},
{
	id: 7,
	name: 'Iced Drinks'
},
{
	id: 8,
	name: 'Fruit Soda'
},
{
	id: 9,
	name: 'Fruit Tea'
},
]

const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const product = [
{
	id: 1,
	image: 'image/gg-1.jpg',
	title: 'Classic',
	price: 38,
	price2: 63,
	category: 'Regular Flavors'
},
{
	id: 1,
	image: '#',
	title : 'Milky Taro',
	price: 38,
	price2: 63,
	category: 'Regular Flavors'
},
{
	id: 1,
	image: '#',
	title : 'Red Velvet',
	price: 38,
	price2: 63,
	category: 'Regular Flavors'
},
{
	id: 1,
	image: '#',
	title : 'Milk Choco',
	price: 38,
	price2: 63,
	category: 'Regular Flavors'
},
{
	id: 1,
	image: '#',
	title : 'Sweet Melon',
	price: 38,
	price2: 63,
	category: 'Regular Flavors'
},
{
	id: 2,
	image: '#',
	title : 'Green Apple',
	price: 38,
	price2: 63,
	category: 'Coolers'
},
{
	id: 2,
	image: '#',
	title : 'Blueberry',
	price: 38,
	price2: 63,
	category: 'Coolers'
},
{
	id: 2,
	image: '#',
	title : 'Kiwi',
	price: 38,
	price2: 63,
	category: 'Coolers'
},
{
	id: 2,
	image: '#',
	title : 'Strawberry',
	price: 38,
	price2: 63,
	category: 'Coolers'
},
{
	id: 2,
	image: '#',
	title : 'Mango-Lychee',
	price: 38,
	price2: 63,
	category: 'Coolers'
},
{
	id: 2,
	image: '#',
	title : 'Lemonade Fusion',
	price: 38,
	price2: 63,
	category: 'Coolers'
},
{
	id: 3,
	image: '#',
	title : 'Cheesecake',
	price: 58,
	price2: 80,
	category: 'Special'
},
{
	id: 3,
	image: '#',
	title : 'Mango-Graham Cheesecake',
	price: 58,
	price2: 80,
	category: 'Special'
},
{
	id: 4,
	image: '#',
	title: 'Wintermelon',
	price: 44,
	price2: 68,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Okinawa',
	price: 44,
	price2: 68,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Cookies & Cream',
	price: 44,
	price2: 68,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Creamy Mango',
	price: 44,
	price2: 68,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Choco-Berry',
	price: 44,
	price2: 68,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: '',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Signature',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Dark Chocolate',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Dark Oreo',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Creamy Velvet',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Dark-Choco Berry',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Classic Oreo',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Premium Avocado',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Banana & Cream',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Strawberry Creme',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Chocolate Oreo',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Oreo-Strawberry',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 4,
	image: '#',
	title: 'Brown Sugar',
	price: 48,
	price2: 73,
	category: 'House Special'
},
{
	id: 5,
	image: '#',
	title: 'Classic Matcha',
	price: 58,
	price2: 80,
	category: 'Matcha Series'
},
{
	id: 5,
	image: '#',
	title: 'Choco-Matcha',
	price: 58,
	price2: 80,
	category: 'Matcha Series'
},
{
	id: 5,
	image: '#',
	title: 'Coffee-Matcha',
	price: 58,
	price2: 80,
	category: 'Matcha Series'
},
{
	id: 5,
	image: '#',
	title: 'Oreo-Matcha',
	price: 58,
	price2: 80,
	category: 'Matcha Series'
},
{
	id: 5,
	image: '#',
	title: 'Smooth Matcha',
	price: 58,
	price2: 80,
	category: 'Matcha Series'
},
{
	id: 6,
	image: '#',
	title: 'Nutella',
	price: 58,
	price2: 80,
	category: 'Nutella Series'
},
{
	id: 6,
	image: '#',
	title: 'Strawberry-Nutella',
	price: 58,
	price2: 80,
	category: 'Nutella Series'
},
{
	id: 6,
	image: '#',
	title: 'Nutella-Banana',
	price: 58,
	price2: 80,
	category: 'Nutella Series'
},
{
	id: 7,
	image: '#',
	title: 'Iced Coffee',
	price: 50,
	price2: 80,
	category: 'Iced Drinks'
},
{
	id: 7,
	image: '#',
	title: 'Iced Mocha',
	price: 50,
	price2: 80,
	category: 'Iced Drinks'
},
{
	id: 7,
	image: '#',
	title: 'Tiramisu',
	price: 50,
	price2: 80,
	category: 'Iced Drinks'
},
{
	id: 7,
	image: '#',
	title: 'Iced Choco',
	price: 50,
	price2: 80,
	category: 'Iced Drinks'
},
{
	id: 8,
	image: '#',
	title: 'Green Apple',
	price: 48,
	price2: 73,
	category: 'Fruit Soda'
},
{
	id: 8,
	image: '#',
	title: 'Blueberry',
	price: 48,
	price2: 73,
	category: 'Fruit Soda'
},
{
	id: 8,
	image: '#',
	title: 'Blue Lemonade',
	price: 48,
	price2: 73,
	category: 'Fruit Soda'
},
{
	id: 8,
	image: '#',
	title: 'Strawberry',
	price: 48,
	price2: 73,
	category: 'Fruit Soda'
},
{
	id: 8,
	image: '#',
	title: 'Mango-Lychee',
	price: 48,
	price2: 73,
	category: 'Fruit Soda'
},
{
	id: 9,
	image: '#',
	title: 'Kiwi',
	price: 50,
	price2: 80,
	category: 'Fruit Tea'
},
{
	id: 9,
	image: '#',
	title: 'Green Apple',
	price: 50,
	price2: 80,
	category: 'Fruit Tea'
},
{
	id: 9,
	image: '#',
	title: 'Cucumber',
	price: 50,
	price2: 80,
	category: 'Fruit Tea'
},
{
	id: 9,
	image: '#',
	title: 'Blueberry',
	price: 50,
	price2: 80,
	category: 'Fruit Tea'
},
{
	id: 9,
	image: '#',
	title: 'Lemon-Strawberry',
	price: 50,
	price2: 80,
	category: 'Fruit Tea'
},
];

const categories = [...new Set(product.map((item)=>
	{return item}))]

const filterItems = (a)=>{
	const flterCategories = categories.filter(item);
	function item(value){
		if(value.id==a){
			return(
				value.id
				)
		}
	}
	displayItem(flterCategories)
}


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item)=>
	{
		var {image, title, price, price2} = item;
		return(
			`<div class='box'>
			<h3>${title}</h3>
			<div class='img-box'>
			<img class='images' src=${image}></img>
			</div>
			<div class='bottom'>
			<h2>PHP ${price}.00 - Reg</h2>
			<h2>PHP ${price2}.00 - Supreme</h2>
			<button>Order Now</button>
			</div>
			</div>`)
	}).join('');
}
displayItem(categories);