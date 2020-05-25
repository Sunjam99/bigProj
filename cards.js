function cards(name, age, position, address, next_of_kin, image){
	this.name = name;
	this.age = age;
	this.position = position;
	this.address = address;
	this.next_of_kin = next_of_kin;
	this.image= image;
	this.showMore = function(){
		let dialog =  document.createElement("dialog");
		dialog.innerHTML = name + "<br>" + age + "<br>" + position + "<br>" + address + "<br>" + next_of_kin + "<br>" + "Press 'Esc' to exit modal";
		document.body.appendChild(dialog)
		dialog.showModal()
	}
};

var card1 = new cards(
	"Simbarashe Alan Musanjeya",
	"21",
	"General Manager",
	"98 Emerald Way SummerGreens",
    "Mother - Esnath Banda",
    "https://st.motortrend.ca/uploads/sites/10/2015/11/2016-bmw-x3-xdrive-28i-suv-angular-front.png"
    );
    
var card2 = new cards(
	"Takudzwa Dzvapa",
	"22",
	"Marketing Manager",
	"3 Best Close Sea Point",
    "Father",
    "C:\Users\User\Documents\final\avator1.png"
    );
    
var card3 = new cards(
	"Micheal Keis",
	"20",
	"Director of Operations",
	"12 Harley Street Bloubergstrand",
    "Sister",
    "C:\Users\User\Documents\final\avator1.png"
    );

var card4 = new cards(
	"Tapiwa Midzi",
	"25",
	"Staff Member",
	"98 Mnandi Street Milnerton",
    "Father",
    "C:\Users\User\Documents\final\avator1.png"
    );

let arrayCards = [card1, card2, card3, card4];

var loaded = {};

loaded.addCards = function(){
	arrayCards.forEach(function(card){
		let div = document.getElementById("details");
		let imageCard = document.createElement("img");
		imageCard.onclick = function(){
			card.showMore()
		}
		imageCard.src = card.images;
		imageCard.style.height = "300px";
		imageCard.style.width = "400px";
		imageCard.style.padding = "15px";

		div.appendChild(imageCard);
		
	});
	
};
loaded.addCards();