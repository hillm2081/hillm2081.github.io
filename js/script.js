console.log("js connect");


// var endpoint = '?api_key=5428';
// var url = 'https://api.nasa.gov/planetary/apod';
// var link = url + endpoint;
var phpNoise = "https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json"
var currentLevel = 1
var baseurl = "https://pokeapi.co/api/v2/pokemon/"
var pokemonOne = 'null';
var typeOne = 'null';
var typeTwo = 'null';
var backgroundImage = "null";
var baseurl = "https://pokeapi.co/api/v2/pokemon/"
var flipflop = 0;
var duration = 0;
var locations = "null";
var postAmount = 1;
var sentence = "null";
var totalLikes = 0;
var localEnabled = 0;
var oneTime = 0;
var myPokemon = [];
var totalPokemon = []





//#####SEARCH BUTTON
const search = document.getElementById('search')
search.addEventListener('change', (e) => {
    document.getElementById('selectPokemon').innerHTML = "This Is My Friend"
    const value = e.target.value
    console.log(value)
    grab(value)
    /* Whatever you want to do with the value */
})



//#####IMPORTANT DISCLAIMER
//In the Pokemon API, the types begin at 1, NOT 0. This means that any time I use type values, it must be increased by one when referenced.
const typeColors  = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dark: '#705848',
    steel: '#B8B8D0',
    dragon: '#7038F8',
    fairy: '#EE99AC',
};


// //##### Having an issue, possibly about something not being loaded in time
// document.addEventListener("DOMContentLoaded", function() {
//     // var element = document.getElementById("pokeWindow")
//     // element.style.backgroundColor= typeColors.fire;
//     // console.log(typeColors.fire)
//     var query = "?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json"
//     makeBackground(query);
//     query = "bulbasaur"
//     randomPokemon();
//     // grab(query);

// })

//##### Having an issue, possibly about something not being loaded in time
document.addEventListener("DOMContentLoaded", function() {


    element = document.getElementById('globalFeed')
    element.style.visibility = "hidden"


pickYourPokemon();



setTimeout(alertPlayer(), 5000)

produce()

})


function alertPlayer() {
    alert("Welcome to PokeMedia! 1. Add your friends 2. Begin browsing posts! You can see the global collection of posts, or opt to view your friends' posts!")

}
// function startTime() {
//     console.log("Start time")
//     produce()
// }




function pickYourPokemon() {
    document.getElementById('footer').style.visibility = "hidden"
}



function produce() {
    console.log("Making post")
    var locationBaseUrl = "https://pokeapi.co/api/v2/location/"
    var queryThree = '?offset=20&limit=20'
    link = locationBaseUrl + queryThree
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.send(null)
    xhr.onload = function() {
        if (xhr.status == 200) {
            locations = JSON.parse(xhr.responseText)
            console.log(locations)
            query = "bulbasaur"
            randomPokemon();
            // grab(query);
            // setTimeout(produce(), 5000)
        }
        }





}




// const globalButton = document.getElementById('global')
// globalButton.addEventListener('click', () => {
 
// })
const local = document.getElementById('local')
local.addEventListener('click', () => {
    if (localEnabled == 0) {
        localEnabled = 1;
        element = document.getElementById('local')
        element.innerHTML = "Show What Anyone Is Doing <br> Global Feed"

        element = document.getElementById('title').innerHTML = "Local Feed"

        document.getElementById('globalFeed').style.visibility = "hidden"
        document.getElementById('localFeed').style.visibility = "visible"

    } else {
        localEnabled = 0;
        element = document.getElementById('local')
        // element.style.visibility = "visible"
        // element.style.visibility = "hidden"
        element.innerHTML = "Show What Friends Are Doing <br> Local Feed"
        element = document.getElementById('title').innerHTML = "Global Feed"
        console.log(localEnabled)
        document.getElementById('globalFeed').style.visibility = "visible"
        document.getElementById('localFeed').style.visibility = "hidden"









    }



})
// const other = document.getElementById('other')
// other.addEventListener('click', () => {

// })


// const dev = document.getElementById('dev')
// dev.addEventListener('click', () => {
// switchPokemonSearchVisibility();
// })

const selectPokemon = document.getElementById('selectPokemon')
selectPokemon.addEventListener('click', () => {
    document.getElementById('selectPokemon').innerHTML = "Friend Chosen!<br> Search for another!"
    myPokemon.push(pokemonOne)
    console.log(myPokemon)
    if (myPokemon.length == 3) {
        document.getElementById('selectPokemon').innerHTML = "Begin Loading Social Media"
    }
    if (myPokemon.length > 3) {
        document.getElementById('selectPokemon').style.visibility = "hidden"
        document.getElementById('pokemonSearch-Search').style.visibility = "hidden"
        document.getElementById('pokemonSearch-Name').style.visibility = "hidden"
        document.getElementById('pokemonSearch-Information').style.visibility = "hidden"
        document.getElementById('pokemonSearch-Search').style.visibility = "hidden"
        document.getElementById('globalFeed').style.visibility = "visible"
        document.getElementById('footer').style.visibility = "visible"
        document.getElementById('globalFeed-Title').style.display = "flex"
        element = document.getElementById('localFeed')
        element.style.visibility = "hidden"
        setInterval(function() {
            produce()
        }, 1000);





    }
    // putIntoLocal();

})


// function switchPokemonSearchVisibility() {
//     if (flipflop == 0) {
//         flipflop = 1;
//         console.log(flipflop + " should be 1")
//         var element = document.getElementById('pokemonSearch-Name')
//         element.style.visibility = "hidden"
//         element = document.getElementById('pokemonSearch-Information')
//         element.style.visibility = "hidden"
//         element = document.getElementById('pokemonSearch-Search')
//         element.style.visibility = "hidden"        
//         console.log("off")
//     } else {
//         console.log(flipflop + " should be 0")
//         flipflop = 0;
//         var element = document.getElementById('pokemonSearch-Name')
//         element.style.visibility = "visible"
//         element = document.getElementById('pokemonSearch-Information')
//         element.style.visibility = "visible"
//         element = document.getElementById('pokemonSearch-Search')
//         element.style.visibility = "visible"
//         console.log("on")
//     }
// }


// //#####INCREASE BY ONE
// const incrementLevel = document.getElementById('levelButtonIncrease')
// incrementLevel.addEventListener('click', () => {
//     if (currentLevel == 100) {
//         console.log("Level 100")
//     } else {
//         currentLevel++;
//         console.log(currentLevel)

//     }
//     updateLevelHTML(currentLevel); 

// })


// // #####DECREASE BY ONE
// const decrementLevel = document.getElementById('levelButtonDecrease')
// decrementLevel.addEventListener('click', () => {
//     if (currentLevel == 1) {
//         console.log("Level 1")
//     } else {
//         currentLevel--;
//         console.log(currentLevel)
//     }
//     updateLevelHTML(currentLevel); 
// })

//##### UPDATE LEVEL
function updateLevelHTML(currentLevel) {
    document.getElementById('level').innerHTML = currentLevel;
}


// var current = baseurl+query;

function makeBackground(query) {

}



function randomPokemon() {
    var random = Math.round(Math.random()*1000);
    console.log(random);
    grab(random);
}
function feedNewPokemon() {

    var post = '<div class="testDiv" id="testDiv' +postAmount+ '"><div class="like-bar"id="feed-likes' +postAmount+ '"><span class="material-symbols-rounded" id="heartIcon' +postAmount+ '">favorite</span><div id="feed-like-count' +postAmount+ '">one like</div><div> likes</div></div><div class="imageCanvas"><img class="pokemonImgBackground" id="pokemonImgBackground' +postAmount+ '"><img class="pokemonImg"id="pokemonImg' +postAmount+ '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png"></div><div class="statSection row" id="feed-nameLocation' +postAmount+ '"><div><p class="subtext">Posted by</p><div class="statSquare noOutline" id="feed-name-value' +postAmount+ '">name</div></div><div><p class="subtext">Photo taken at</p><div id="feed-location-value' +postAmount+ '" class="statSquare noOutline ">location</div></div></div><div id="miniStats' +postAmount+ '"><div class="statSquare description noOutline" id="feed-description' +postAmount+ '"></div></div></div>'




    
    var x = Math.round(Math.random(20));
    console.log(locations.results[x].name);
    console.log(sentence)
    console.log(pokemonOne)
    var randomLikes = Math.round(Math.random(1)*postAmount)
    totalLikes = totalLikes + randomLikes;
    console.log(duration + " current like multiplier," + randomLikes + " likes generated.");
    document.getElementById('track').innerHTML= document.getElementById('track').innerHTML + post;
    document.getElementById('pokemonImg'+postAmount).src =  pokemonOne.sprites.front_default
    document.getElementById('feed-name-value'+postAmount).innerHTML=pokemonOne.name.toUpperCase();
    document.getElementById('feed-like-count'+postAmount).innerHTML= randomLikes + " '";
    document.getElementById('feed-location-value'+postAmount).innerHTML= locations.results[x].name.toUpperCase();
    document.getElementById('feed-description'+postAmount).innerHTML= sentence +" "+ pokemonOne.name.toUpperCase();
    var baseurl = "https://php-noise.com/noise.php"
    var query = "?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json"
    link = baseurl + query

    console.log(link)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.send(null)
    xhr.onload = function() {

        if (xhr.status == 200) {
            backgroundImage = JSON.parse(xhr.responseText)
            console.log(backgroundImage.uri)
            // var element =  document.getElementById('backgroundImage'+postAmount);
            // element.src= backgroundImage.uri;
            console.log(postAmount)
            var element =  document.getElementById('pokemonImgBackground'+postAmount);
            console.log(element)

            // var element =  document.getElementById('imgContainer');
            // var element =  document.getElementById('imgContainer');

            element.src= backgroundImage.uri;

            element.src= backgroundImage.uri;
            postAmount = postAmount + 1;


        }

    }

    console.log(pokemonOne.id)
    console.log(myPokemon[0].id)
    // if (oneTime == 0) {
    //     putIntoLocal();
    //     oneTime = 1;
    //     console.log("One Time Activated")
    // }
    for (x = 0; x <= myPokemon.length; x++) {

        if (pokemonOne == myPokemon[x]) {
            console.log("MATCH");
            putIntoLocal();
        }
    }




    finish();





}

function putIntoLocal() {
    
    var post = '<div class="testDiv" id="testDivLocal' +postAmount+ '"><div class="like-bar"id="feed-likes' +postAmount+ '"><span class="material-symbols-rounded" id="heartIcon' +postAmount+ '">favorite</span><div id="feed-like-count' +postAmount+ '">one like</div><div> likes</div></div><div class="imageCanvas"><img class="pokemonImgBackground" id="pokemonImgBackgroundLocal' +postAmount+ '"><img class="pokemonImg"id="pokemonImgLocal' +postAmount+ '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png"></div><div class="statSection row" id="feed-nameLocationLocal' +postAmount+ '"><div><p class="subtext">Posted by</p><div class="statSquare noOutline" id="feed-name-valueLocal' +postAmount+ '">name</div></div><div><p class="subtext">Photo taken at</p><div id="feed-location-valueLocal' +postAmount+ '" class="statSquare noOutline ">location</div></div></div><div id="miniStats' +postAmount+ '"><div class="statSquare description noOutline" id="feed-description' +postAmount+ '"></div></div></div>'

    var x = Math.round(Math.random(20));
    console.log(locations.results[x].name);
    console.log(sentence)
    console.log(pokemonOne)
    var randomLikes = Math.round(Math.random(1)*postAmount)
    totalLikes = totalLikes + randomLikes;
    console.log(duration + " current like multiplier," + randomLikes + " likes generated.");
    document.getElementById('trackLocal').innerHTML= document.getElementById('trackLocal').innerHTML + post;
    document.getElementById('pokemonImgLocal'+postAmount).src =  pokemonOne.sprites.front_default
    document.getElementById('feed-name-valueLocal'+postAmount).innerHTML=pokemonOne.name.toUpperCase();
    document.getElementById('feed-like-countLocal'+postAmount).innerHTML= randomLikes + " '";
    document.getElementById('feed-location-valueLocal'+postAmount).innerHTML= locations.results[x].name.toUpperCase();
    document.getElementById('feed-descriptionLocal'+postAmount).innerHTML= sentence +" "+ pokemonOne.name.toUpperCase();
    var baseurl = "https://php-noise.com/noise.php"
    var query = "?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json"
    link = baseurl + query

    console.log(link)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.send(null)
    xhr.onload = function() {

        if (xhr.status == 200) {
            backgroundImage = JSON.parse(xhr.responseText)
            console.log(backgroundImage.uri)
            // var element =  document.getElementById('backgroundImage'+postAmount);
            // element.src= backgroundImage.uri;
            console.log(postAmount)
            var element =  document.getElementById('pokemonImgBackgroundLocal'+postAmount);
            console.log(element)

            // var element =  document.getElementById('imgContainer');
            // var element =  document.getElementById('imgContainer');

            element.src= backgroundImage.uri;

            element.src= backgroundImage.uri;
            postAmount = postAmount + 1;


        }

    }






}




//Make this a game about upgrading your pokemon team? Seeing a better pokemon and making the switch????? Possibly just show an ever-increasing line of pokemon?
//Make this something related to social media. Maybe "PokeMedia"? Use database to randomly generate posts.
//Maybe make a finctional app/functionality, where you can enable/discable local things. Things happening near you, or things that are importnat to you. Number of notifications are DRASTICALLY different.
//Could use a News API to deliver notifications



function grab(query) {
    var baseurl = "https://pokeapi.co/api/v2/pokemon/"
    link = baseurl + query
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.send(null)
    xhr.onload = function() {

        if (xhr.status == 200) {

            // console.log(xhr.responseText.name)
            pokemonOne = JSON.parse(xhr.responseText)

            getCaption();


            console.log(pokemonOne.stats[0].base_stat)
            document.getElementById('name.value').innerHTML= pokemonOne.name.toUpperCase()
            document.getElementById('hp.value').innerHTML=pokemonOne.stats[0].base_stat
            document.getElementById('speed.value').innerHTML=pokemonOne.stats[5].base_stat
            document.getElementById('attack.value').innerHTML=pokemonOne.stats[1].base_stat
            document.getElementById('special-attack.value').innerHTML=pokemonOne.stats[3].base_stat
            document.getElementById('defense.value').innerHTML=pokemonOne.stats[2].base_stat
            document.getElementById('special-defense.value').innerHTML=pokemonOne.stats[4].base_stat
            document.getElementById('pokemonImg').src=pokemonOne.sprites.front_default

            //Always set one. If there are two entries, set the second one.   

            //UPDATE
            //Fix empty elements. Fix gradient, apply to background of pokemon.
            //CLEAR previous values

            var element = document.getElementById("type.value")
        
            typeOne = pokemonOne.types[0].type.name
            console.log("Pokemon's type: " + typeOne)
            element.innerHTML = typeOne;
            element.style.backgroundColor= typeColors[typeOne];
            element = document.getElementById("pokeWindow")
            element.style.backgroundColor= typeColors[typeOne];


           if (pokemonOne.types.length == 2) {
            var element = document.getElementById("typeTwo.value")
            typeTwo = pokemonOne.types[1].type.name
            element.innerHTML= typeTwo;
            // element.style.backgroundColor= typeColors[type];
            console.log("Two types detected. Second type: " + typeTwo)
            element.style.backgroundColor= typeColors[typeTwo];

            element = document.getElementById("pokeWindow")
            element.style.background = "linear-gradient(180deg, " + typeColors[typeOne]+ " 0%, " + typeColors[typeTwo]+ " 100%)";


            } else {
                var element = document.getElementById("typeTwo.value")
                element.innerHTML= "";
                // element.style.backgroundColor= typeColors[type];
                console.log("No second type.")
                element.style.backgroundColor= "white";
    
                element = document.getElementById("pokeWindow")
                element.style.background = "none";
            }
            element.style.backgroundColor= typeColors[typeOne];
            console.log(pokemonOne.types)

        }  
    }
    }

    function getCaption() {
        var wordBaseUrl = "https://random-word-api.herokuapp.com/word"
        var queryFour = '?number=10'
        link = wordBaseUrl + queryFour
        var xhr = new XMLHttpRequest();
        xhr.open('GET', link, true);
        xhr.send(null)
        xhr.onload = function() {
            if (xhr.status == 200) {
                var sentenceArray = JSON.parse(xhr.responseText)
                console.log(sentenceArray)
                sentence = sentenceArray[0]
                for(let x = 1; x < 10; x++) {
                    sentence = sentence + " " + sentenceArray[x];
                }
                sentence = ' "' + sentence + '" -';
                console.log(sentence)
                feedNewPokemon()

            }
            }
    }
    
    



function finish() {


console.log(totalPokemon)

    totalPokemon.push[totalPokemon[0]];

    console.log("Finished")
    console.log(postAmount + " total")

    document.getElementById('total-posts').innerHTML=postAmount;
    document.getElementById('total-likes').innerHTML=totalLikes;

}