var wrap = document.querySelector(".wrapper");
var beers = document.getElementsByClassName("beer-item");

console.log(beers)

for (var beer = 0 ; beer < beers.length ; beer++) {
    beerToRight(beers[beer]);
}

ordre = 1;

wrap.addEventListener("mouseenter", function( event ) {

    slideBeer(beers, ordre)

    ordre++;

    if (slideBeer(beers, ordre) == beers.length) {
        slideBeer(beers, 0)
        ordre = 0
    }

    console.log(slideBeer(beers, ordre));

    // if (ordre == beers.length-1) {
    //     ordre=1;
    // }
});

function slideBeer(beers, ordre) {
    if (ordre == 0) {
        beerToCenter(beers[0])
        beerToLeft(beers[12])
    }
    else if (ordre == beers.length -1) {
        beerToCenter(beers[12])
        beerToLeft(beers[0])
    }
    else {
        beerToCenter(beers[ordre])
        beerToLeft(beers[ordre-1])
    }
    

    return ordre;
}

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