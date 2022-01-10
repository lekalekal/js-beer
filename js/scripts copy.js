var wrap = document.querySelector(".wrapper");
var beers = document.getElementsByClassName("beer-item");
console.log(beers);

for (var beer = 0 ; beer < beers.length ; beer++) {
    beerToRight(beers[beer]);
}

last = 0;
current = 1;

beerToLeft(beers[last])
beerToCenter(beers[current])

wrap.addEventListener("mouseenter", function( event ) {
    last++;
    current++;
    
    beerToLeft(beers[last])
    beerToCenter(beers[current])
});



function beerToRight(beer) {
    beer.classList.add("beer-right");
    beer.classList.remove("beer-center", "beer-left");
}

function beerToCenter(beer) {
    beer.classList.add("beer-center");
    beer.classList.remove("beer-left", "beer-right");
}

function beerToLeft(beer) {
    beer.classList.add("beer-left");
    beer.classList.remove("beer-center", "beer-right")
}