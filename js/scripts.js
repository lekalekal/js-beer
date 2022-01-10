var wrap = document.querySelector(".wrapper");
var beers = document.getElementsByClassName("beer-item");

console.log(beers)

toFirst(beers)

wrap.addEventListener("mouseenter", function( event ) {

    slideBeer(beers, ordre)

    ordre++;

    console.log(slideBeer(beers, ordre));

    // if (ordre == beers.length-1) {
    //     ordre=1;
    // }
    
});

function slideBeer(beers, last) {
    // premiere biere
    if (last == 0) {
        toFirst (beers)
    }
    // toutes les bières jusque 12
    else if (last < beers.length -1) {
        beerToCenter(beers[last])
        beerToLeft(beers[last-1])
    }
    // bière 13
    else if (last < beers.length) {
        beerToCenter(beers[beers.length-1])
        beerToLeft(beers[0])
    }
    // on repart à zéro
    else {
        toFirst(beers)
    }

    return ordre;
}
function toFirst(beers) {
    restart(beers);
    beerToCenter(beers[0])
    beerToLeft(beers[12])
}

function restart(beers) {
    for (var beer = 0 ; beer < beers.length ; beer++) {
        beerToRight(beers[beer]);
    }
    ordre = 0;
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