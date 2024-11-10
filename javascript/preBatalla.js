import { pokemons } from './Pokemones.js';
import { getCookie, setCookie } from './Galletas.js';

window.onload = function() {
    console.log("¡La página y los datos están listos!");

    const playerPokemon = getCookie('playerPokemon');
    if (playerPokemon) {
        console.log("Pokémon del jugador:", playerPokemon);
        document.getElementById('playerImg').src = playerPokemon.img;
        document.getElementById('playerName').textContent = playerPokemon.name;
        document.getElementById('playerType').textContent = "Tipo: " + playerPokemon.types.join(", ");
        document.getElementById('playerHP').textContent = "HP: " + playerPokemon.hp;
    } else {
        alert("No se ha encontrado el Pokémon del jugador. Redirigiendo a la selección...");
        window.location.href = 'index.html';
    }

    const enemyPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    console.log("Pokémon enemigo:", enemyPokemon);

    setCookie('enemyPokemon', enemyPokemon, 7);

    document.getElementById('enemyImg').src = enemyPokemon.img;
    document.getElementById('enemyName').textContent = enemyPokemon.name;
    document.getElementById('enemyType').textContent = "Tipo: " + enemyPokemon.types.join(", ");
    document.getElementById('enemyHP').textContent = "HP: " + enemyPokemon.hp;

    document.getElementById('startBattleButton').addEventListener('click', function() {
        window.location.href = 'battle.html';
    });
};
