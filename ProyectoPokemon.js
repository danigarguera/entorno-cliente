class Pokemon {


    constructor(nombre, tipo, hpActual, hpMaximo, ataque, defensa, ataque1, ataque2) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hpActual = hpActual;
        this.hpMaximo = hpMaximo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.ataque1 = ataque1;
        this.ataque2 = ataque2;
    }
}
const Type = { 
    FUEGO: "fuego",
    AGUA: "agua",
    ELECTRICO: "electrico",
    VOLADOR: "volador",
    PSIQUICO: "psiquico",
    VENENO: "veneno",
    ROCA: "roca",
    PLANTA: "planta",
    NORMAL: "normal"
};
class Acciones {
    ataque(pokemonAtacante, pokemonDefensor, movimiento) {
        let dano = (pokemonAtacante.ataque / pokemonDefensor.defensa) * movimiento.dBase * (Math.random() * (1.0 - 0.85) + 0.85);
        pokemonDefensor.hpActual = Math.max(pokemonDefensor.hpActual - dano, 0); 
        return dano;
    }

    curar(pokemon) {
        let curacion = pokemon.hpMaximo / 2;
        pokemon.hpActual = Math.min(pokemon.hpActual + curacion, pokemon.hpMaximo); 
        return pokemon.hpActual;
    }
}

class Movimientos {    
    constructor(nombre, dBase, tipo) {
        this.nombre = nombre;
        this.dBase = dBase;
        this.tipo = tipo;
    }
}

class Datos extends Pokemon{
    constructor() {
     
        this.lanzallamas = new Movimientos("Lanzallamas", 40, Pokemon.Type.FUEGO);
        this.pAgua = new Movimientos("Pistola agua", 40, Pokemon.Type.AGUA);
        this.impactrueno = new Movimientos("Impactrueno", 40, Pokemon.Type.ELECTRICO);
        this.tornado = new Movimientos("Tornado", 40, Pokemon.Type.VOLADOR);
        this.psiquico = new Movimientos("Psíquico", 40, Pokemon.Type.PSIQUICO);
        this.oToxica = new Movimientos("Onda tóxica", 40, Pokemon.Type.VENENO);
        this.lanzarrocas = new Movimientos("Lanzarrocas", 40, Pokemon.Type.ROCA);
        this.lZepa = new Movimientos("Látigo cepa", 40, Pokemon.Type.PLANTA);
        this.placaje = new Movimientos("Placaje", 20, Pokemon.Type.NORMAL);
        this.corte = new Movimientos("Corte", 20, Pokemon.Type.NORMAL);
        this.estruendo = new Movimientos("Estruendo", 20, Pokemon.Type.NORMAL);
        this.gCuerpo = new Movimientos("Golpe cuerpo", 20, Pokemon.Type.NORMAL);
        this.agilidad = new Movimientos("Agilidad", 20, Pokemon.Type.NORMAL);
        this.cornada = new Movimientos("Cornada", 20, Pokemon.Type.NORMAL);
        this.aranazo = new Movimientos("Arañazo", 20, Pokemon.Type.NORMAL);

        
        this.pokemons = [
            new Pokemon("Charizard", Pokemon.Type.FUEGO, 150, 150, 10, 10, this.lanzallamas, this.placaje),
            new Pokemon("Blastoise", Pokemon.Type.AGUA, 150, 150, 10, 10, this.pAgua, this.aranazo),
            new Pokemon("Pidgeot", Pokemon.Type.VOLADOR, 150, 150, 10, 10, this.tornado, this.gCuerpo),
            new Pokemon("Pikachu", Pokemon.Type.ELECTRICO, 150, 150, 10, 10, this.impactrueno, this.agilidad),
            new Pokemon("Mewtwo", Pokemon.Type.PSIQUICO, 150, 150, 10, 10, this.psiquico, this.estruendo),
            new Pokemon("Ekans", Pokemon.Type.VENENO, 150, 150, 10, 10, this.oToxica, this.cornada),
            new Pokemon("Onix", Pokemon.Type.ROCA, 150, 150, 10, 10, this.lanzarrocas, this.estruendo),
            new Pokemon("Venusaur", Pokemon.Type.PLANTA, 150, 150, 10, 10, this.lZepa, this.corte)
        ];
    }
}
class Juego{ 

    repartirPokemos(){
        let pokemonJ = this.datos.pokemons[Math.floor(Math.random() * this.datos.pokemons.length)];
        console.log('Tu pokemon es: ' + pokemonJ + '\n');
        let pokemonM = this.datos.pokemons[Math.floor(Math.random() * this.datos.pokemons.length)];
        console.log('Tu oponente es: ' + pokemonM + '\n');

        return [pokemonJ, pokemonM];
    }
    desarrollarJuego(pokemonJ, pokemonM){
        let salida=false;
        while (!salida) {
            console.log('Tu'+pokemonJ.nombre+' tiene ' +pokemonJ.hpActual+' hp');
            console.log(pokemonM.nombre+' tiene ' +pokemonM.hpActual+' hp');

            let accion = prompt('¿Que deseas hacer? \n 1. Atacar \n 2. Curar');
            switch (accion) {
                case 1:
                    let ataque = prompt('¿Que ataque deseas hacer? \n 1. '+pokemonJ.ataque1+' \n 2. '+pokemonJ.ataque2);
                    switch (ataque) {
                        case 1:
                            Acciones.atacar(pokemonJ, pokemonM, pokemonJ.ataque1);
                            break;
                        case 2:
                            Acciones.atacar(pokemonJ, pokemonM, pokemonJ.ataque2);
                            break;
                    
                        default:
                            console.log('No has pulsado ninguna opción valida');
                            break;
                    }
                    break;
                case 2:
                    
                    break;
            
                default:
                    break;
            }
        }

    }

 }   


