import { pokemons } from './Pokemones.js';
import { setCookie } from './Galletas.js';

// Definir selectedPokemon fuera de las funciones
let selectedPokemon = null; // Al principio no hay Pokémon seleccionado

// Función para guardar el Pokémon seleccionado en la cookie
function saveSelectedPokemon(pokemon) {
    setCookie('playerPokemon', pokemon, 7);  // Guardamos por 7 días
}

// Función para renderizar la lista de Pokémon para que el jugador pueda seleccionar uno
function renderPokemonList() {
    const pokemonList = document.getElementById('pokemonList');
    pokemons.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.dataset.id = pokemon.id; // Asignar ID único para cada tarjeta
        pokemonCard.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Tipo: ${pokemon.types.join(", ")}</p>
        `;
        
        // Evento de clic para seleccionar el Pokémon
        pokemonCard.addEventListener('click', () => selectPokemon(pokemon, pokemonCard));

        pokemonList.appendChild(pokemonCard);
    });
}

function selectPokemon(pokemon, cardElement) {
    // Si ya hay un Pokémon seleccionado, lo desmarcamos
    if (selectedPokemon) {
        selectedPokemon.card.classList.remove('selected');
    }

    // Marcamos el nuevo Pokémon como seleccionado
    selectedPokemon = { pokemon, card: cardElement };
    cardElement.classList.add('selected');

    // Habilitar el botón para comenzar la batalla
    document.getElementById('startBattleButton').disabled = false;
}

// Acción del botón "Comenzar Batalla"
document.getElementById('startBattleButton').addEventListener('click', () => {
    if (!selectedPokemon) {
        alert("Por favor, selecciona un Pokémon primero.");
        return;
    }

    // Guardar el Pokémon seleccionado en las cookies
    saveSelectedPokemon(selectedPokemon.pokemon);

    // Redirigir a la página de pre-batalla
    window.location.href = 'prebatalla.html'; // Asegúrate de que la ruta de prebatalla sea correcta
});

// Acción del botón "Selección Aleatoria"
document.getElementById('randomSelectionButton').addEventListener('click', () => {
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    
    // Actualiza el Pokémon seleccionado sin redirigir
    const randomPokemonCard = document.querySelector(`[data-id="${randomPokemon.id}"]`);
    
    // Desmarca el Pokémon actual si hay uno seleccionado
    if (selectedPokemon) {
        selectedPokemon.card.classList.remove('selected');
    }

    // Marca el Pokémon aleatorio
    selectedPokemon = { pokemon: randomPokemon, card: randomPokemonCard };
    randomPokemonCard.classList.add('selected');

    // Habilitar el botón para comenzar la batalla
    document.getElementById('startBattleButton').disabled = false;
});

// Renderizar la lista de Pokémon
renderPokemonList();
