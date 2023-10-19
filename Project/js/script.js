console.log("js connect");


// var endpoint = '?api_key=5428';
// var url = 'https://api.nasa.gov/planetary/apod';
// var link = url + endpoint;
var phpNoise = "https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json"

var baseurl = "https://pokeapi.co/api/v2/pokemon/"
var query = "pikachu"
var pokemonOne = 'null';



var current = baseurl+query;
grab(current);

function grab(baseurl) {
    link = baseurl
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.send(null)
    xhr.onload = function() {

        if (xhr.status == 200) {
            console.log(xhr.responseText)
            pokemonOne = JSON.parse(xhr.responseText)
            console.log(pokemonOne.stats[0].base_stat)
            document.getElementById('name.value').innerHTML=pokemonOne.name
            document.getElementById('hp.value').innerHTML=pokemonOne.stats[0].base_stat
            document.getElementById('speed.value').innerHTML=pokemonOne.stats[5].base_stat
            document.getElementById('attack.value').innerHTML=pokemonOne.stats[1].base_stat
            document.getElementById('pokemonImg').src=pokemonOne.sprites.front_default

        } 
    }

}





// function buildStat(pokemon){
//     var card 
//     document.getElementById('innerCard').innerHTML=
// }




