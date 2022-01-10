var wrap = document.querySelector(".wrapper");
var beers = document.getElementsByClassName("beer-item");

console.log(beers)

restart(beers)

wrap.addEventListener("mouseenter", function( event ) {

    slideBeer(beers, ordre)

    ordre++;

    console.log(slideBeer(beers, ordre));

    // if (ordre == beers.length-1) {
    //     ordre=1;
    // }
    
});

function slideBeer(beers, last) {
    if (last == 0) {
        beerToCenter(beers[0])
        beerToLeft(beers[12])
    }
    else if (last == beers.length) {
        beerToCenter(beers[12])
        beerToLeft(beers[1])
        restart(beers);
    }
    else {
        beerToCenter(beers[last])
        beerToLeft(beers[last-1])
    }

    return ordre;
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