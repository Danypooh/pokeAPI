let getData = document.querySelector("#getData");
getData.addEventListener('click', function handleClick() {
    let pokemon = document.getElementById('pokemon');
    pokemon = pokemon.value;  
    getMyData(pokemon);
});

function getMyData(pokemon) {
    $.getJSON("https://pokeapi.co/api/v2/pokemon/" + pokemon,
      function(json) {
        $('#resultado').text(JSON.stringify(json.name));
        let pokeImage = json.sprites.front_default;
        let image = document.createElement('img');
        let resultado = document.getElementById('resultado');
        image.src = pokeImage;
        resultado.appendChild(image);
      }
    );
    
  }