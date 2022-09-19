let getData = document.querySelector("#getData");
getData.addEventListener('click', function handleClick() {
    let pokemon = document.getElementById('pokemon');
    pokemon = pokemon.value;  
    getMyData(pokemon);
});

function getMyData(pokemon) {
    $.getJSON("https://pokeapi.co/api/v2/pokemon/" + pokemon,
      function(json) {
        console.log(json);
        $('#resultado').text(JSON.stringify(json));
      }
    );
    
  }