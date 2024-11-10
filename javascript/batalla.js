import { pokemons } from './Pokemones.js';

// Recuperar los Pokémon del jugador y enemigo de las cookies
let playerPokemon = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)playerPokemon\s*=\s*([^;]*).*$)|^.*$/, "$1"));
let enemyPokemon = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)enemyPokemon\s*=\s*([^;]*).*$)|^.*$/, "$1"));

// Mostrar la información de los Pokémon en la página
document.getElementById('playerImg').src = playerPokemon.img;
document.getElementById('playerName').textContent = playerPokemon.name;
document.getElementById('playerType').textContent = `Tipo: ${playerPokemon.types.join(", ")}`;
document.getElementById('playerHP').textContent = `HP: ${playerPokemon.hp}`;

document.getElementById('enemyImg').src = enemyPokemon.img;
document.getElementById('enemyName').textContent = enemyPokemon.name;
document.getElementById('enemyType').textContent = `Tipo: ${enemyPokemon.types.join(", ")}`;
document.getElementById('enemyHP').textContent = `HP: ${enemyPokemon.hp}`;

// Función para actualizar la barra de vida del jugador
function updatePlayerHealthBar() {
    const playerHealthBar = document.getElementById('playerHealthBar');
    const playerHealthPercentage = (playerPokemon.hp / playerHpMax) * 100;
    playerHealthBar.style.width = `${playerHealthPercentage}%`;

    // Cambiar el color de la barra dependiendo del HP
    if (playerHealthPercentage > 50) {
        playerHealthBar.style.backgroundColor = 'green';
    } else if (playerHealthPercentage > 20) {
        playerHealthBar.style.backgroundColor = 'yellow';
    } else {
        playerHealthBar.style.backgroundColor = 'red';
    }
}

// Función para actualizar la barra de vida del enemigo
function updateEnemyHealthBar() {
    const enemyHealthBar = document.getElementById('enemyHealthBar');
    const enemyHealthPercentage = (enemyPokemon.hp / enemyHpMax) * 100;
    enemyHealthBar.style.width = `${enemyHealthPercentage}%`;

    // Cambiar el color de la barra dependiendo del HP
    if (enemyHealthPercentage > 50) {
        enemyHealthBar.style.backgroundColor = 'green';
    } else if (enemyHealthPercentage > 20) {
        enemyHealthBar.style.backgroundColor = 'yellow';
    } else {
        enemyHealthBar.style.backgroundColor = 'red';
    }
}

// Función para guardar los datos de la batalla en las cookies
function setBattleData() {
    // Guardar los datos del Pokémon del jugador en la cookie
    document.cookie = `playerPokemon=${JSON.stringify(playerPokemon)}; path=/; max-age=${7 * 24 * 60 * 60}`;
    // Guardar los datos del Pokémon del enemigo en la cookie
    document.cookie = `enemyPokemon=${JSON.stringify(enemyPokemon)}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

// Función para manejar el ataque
function attack() {
    const damageToEnemy = Math.max(0, playerPokemon.attack - enemyPokemon.defense);
    const damageToPlayer = Math.max(0, enemyPokemon.attack - playerPokemon.defense);

    playerPokemon.hp -= damageToPlayer;
    enemyPokemon.hp -= damageToEnemy;

    document.getElementById('playerHP').textContent = `HP: ${playerPokemon.hp}`;
    document.getElementById('enemyHP').textContent = `HP: ${enemyPokemon.hp}`;

    // Actualizar las barras de vida
    updatePlayerHealthBar();
    updateEnemyHealthBar();

    setBattleData();

    updateBattleLog(`${playerPokemon.name} atacó a ${enemyPokemon.name} causando ${damageToEnemy} de daño.`);
    updateBattleLog(`${enemyPokemon.name} atacó a ${playerPokemon.name} causando ${damageToPlayer} de daño.`);

    if (playerPokemon.hp <= 0) {
        updateBattleLog(`${playerPokemon.name} ha sido derrotado. ¡${enemyPokemon.name} gana!`);
        disableBattleButtons();
    } else if (enemyPokemon.hp <= 0) {
        updateBattleLog(`${enemyPokemon.name} ha sido derrotado. ¡${playerPokemon.name} gana!`);
        disableBattleButtons();
    }
}

// Función para manejar la curación del jugador
let pokemonCurado = false;
let playerHpMax = playerPokemon.hp;  // Usar el hp inicial como máximo

function heal() {
    if (pokemonCurado || playerPokemon.hp === playerHpMax) {
        updateBattleLog(`${playerPokemon.name} ya ha sido curado o tiene la salud máxima.`);
        return;
    }

    let healAmount = Math.floor(playerHpMax / 2);
    let actualHealAmount = Math.min(healAmount, playerHpMax - playerPokemon.hp);
    playerPokemon.hp += actualHealAmount;

    document.getElementById('playerHP').textContent = `HP: ${playerPokemon.hp}`;
    updateBattleLog(`${playerPokemon.name} se ha curado ${actualHealAmount} puntos de vida.`);
    setBattleData();

    // Actualizar la barra de vida
    updatePlayerHealthBar();

    pokemonCurado = true;
}

// Función para deshabilitar los botones de batalla
function disableBattleButtons() {
    document.getElementById('attackButton').disabled = true;
    document.getElementById('healButton').disabled = true;
    document.getElementById('startBattleButton').style.display = 'inline-block';
}

// Función para mostrar los mensajes de la batalla
function updateBattleLog(message) {
    const logContent = document.getElementById('logContent');
    const newLog = document.createElement('p');
    newLog.textContent = message;
    logContent.appendChild(newLog);
    logContent.scrollTop = logContent.scrollHeight; // Desplaza al final del log
}

// Agregar los eventos de los botones
document.getElementById('attackButton').addEventListener('click', attack);
document.getElementById('healButton').addEventListener('click', heal);
document.getElementById('startBattleButton').addEventListener('click', function() {
    window.location.href = '/Pokemones.html'; // Redirigir a la página de selección de Pokémon
});

// Inicializar las variables hpMax al inicio del combate
let enemyHpMax = enemyPokemon.hp;    // Usar el hp inicial como máximo

// Verificar que los botones estén habilitados
document.getElementById('attackButton').disabled = false;
document.getElementById('healButton').disabled = false;
