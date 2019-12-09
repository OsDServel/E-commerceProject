//adding cart value
var cart= 0;

//creating cart function
$('#container').on('click', '.item-add', function(){
	let price= comicArray[i].price;

	cart+= price;

	$('#cart-container').text('$'+ cart);
	
})


// creating item remove function
// $('#container').on('click', '.item-remove', function(){
// 	$(this).parent().remove();
// });                                   //DOES NOT FUNCTION THE WAY I WISH IT TO






















//Comic function that starts up on window load
function Comic(order, price, img, condition){
	this.order= order;
	this.price= price;
	this.img= img;
	this.condition= condition;
}

//creating array of img file
var comicArray= [
	new Comic(1, 150, "img/spawn1.jpg", "Perfect"),
	new Comic(2, 150, "img/spawn2.jpg", "Fair"),
	new Comic(3, 150, "img/spawn3.jpg", "Fair"),
	new Comic(4, 150, "img/spawn4.jpg", "Perfect"),
	new Comic(5, 150, "img/spawn5.jpg", "Fair"),
	new Comic(6, 150, "img/spawn6.jpg", "Perfect"),
	new Comic(7, 150, "img/spawn7.jpg", "Perfect"),
	new Comic(8, 150, "img/spawn8.jpg", "Perfect"),
];

//loop through products of array
for(i= 0; i < comicArray.length; i++) {
	//pushing array of boxes set up in HTML
	//newBox should be ONE div inside boxArray
	var newBox = document.createElement("div");
	if(i % 2 == 0) {
		newBox.className = "col-3 bg-success";
	} else {
		newBox.className = "col-3 bg-dark text-white";
	}
	newBox.id = "box" + i;

	var sequence = document.createElement("h2");
	var condition = document.createElement("h3");
	var price = document.createElement("h3");
	var display = document.createElement("img");
	//adding the "add to cart" and "remove item" buttons, and giving them ID's
	var addBtn= document.createElement('button');
	addBtn.className= 'item-add';
		//Note: do not capitalize var names, as they will be highlighted as a function, in blue, and is confusing, need to experiment to see if it will change the functionality of the element.
	var removeBtn= document.createElement('button');
	removeBtn.className= 'item-remove';


//appending created elements to the newBox div element created
	newBox.appendChild(sequence);
	newBox.appendChild(condition);
	newBox.appendChild(price);
	newBox.appendChild(display);
//appending buttons to newBox div
	newBox.appendChild(addBtn);
	newBox.appendChild(removeBtn);

	//creating text for array properties
	var arrangent= document.createTextNode(comicArray[i].order)
	var comicDisplay= document.createTextNode("Condition of the comic: " + comicArray[i].condition)
	var priceDisplay= document.createTextNode("$" + comicArray[i].price)
	//creating text node for buttons
	var addItem= document.createTextNode("Add to Cart");
	var removeItem= document.createTextNode("Remove");


	//image src file link
	display.src = comicArray[i].img

	//add textnode to elements
	sequence.appendChild(arrangent)
	condition.appendChild(comicDisplay)
	price.appendChild(priceDisplay)
	//add textnode to button elements
	addBtn.appendChild(addItem);
	removeBtn.appendChild(removeItem);

	//append newBox to row
	document.getElementById("comics").appendChild(newBox);
};