function cards(name, src, type, rarity) {
    this.name = name;
    this.source = src;
    this.type = type;
    this.rarity = rarity;
}

var imgCard = document.getElementsByClassName("card");
var imgCardLength = imgCard.length;
var SearchArea = document.getElementById("search-area");
var SearchValue = SearchArea.value;
var SearchValueLowerCase = SearchValue.toLowerCase();
var SearchBtn = document.querySelector(".search-btn");
console.log(SearchBtn);
console.log(imgCard);
console.log(document.getElementsByClassName("card")[0].getAttribute("name"));
const capTainCard = new cards(imgCard[0].getAttribute("name"),imgCard[0].getAttribute("src"),imgCard[0].getAttribute("type"),imgCard[0].getAttribute("rarity"));
console.log(capTainCard);
const bPantherCard = new cards(imgCard[1].getAttribute("name"),imgCard[1].getAttribute("src"),imgCard[1].getAttribute("type"),imgCard[1].getAttribute("rarity"));
const thorCard = new cards(imgCard[2].getAttribute("name"),imgCard[2].getAttribute("src"),imgCard[2].getAttribute("type"),imgCard[2].getAttribute("rarity"));
const nickFuryCard = new cards(imgCard[3].getAttribute("name"),imgCard[3].getAttribute("src"),imgCard[3].getAttribute("type"),imgCard[3].getAttribute("rarity"));

var yourCards = [capTainCard,bPantherCard,thorCard,nickFuryCard] ;
var yourCardsName = [];
SearchBtn.addEventListener("click",function(){
    for(i=0;i<imgCardLength;i++){
        var getyouCardsName = yourCards[i].name;
        var yourCardsNameString = getyouCardsName.toString();
        var yourCardsNameLowerCase = yourCardsNameString.toLowerCase();
        yourCardsName.push(yourCardsNameLowerCase);
        if(yourCardsName[i].includes(SearchValueLowerCase) == false ){
            imgCard[i].classList.add("disable")
        }
        console.log(yourCardsName[i]);
        console.log(yourCardsName[i].includes(SearchValueLowerCase))
    }
    
});