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


//appending created elements to the newBox div element created
	newBox.appendChild(sequence);
	newBox.appendChild(condition);
	newBox.appendChild(price);
	newBox.appendChild(display);

	//creating text for array properties
	var arrangent= document.createTextNode(comicArray[i].order)
	var comicDisplay= document.createTextNode("Condition of the comic: " + comicArray[i].condition)
	var priceDisplay= document.createTextNode("$" + comicArray[i].price)

	//image src file link
	display.src = comicArray[i].img

	//add text to elements
	sequence.appendChild(arrangent)
	condition.appendChild(comicDisplay)
	price.appendChild(priceDisplay)

	//append newBox to row
	document.getElementById("comics").appendChild(newBox);
};