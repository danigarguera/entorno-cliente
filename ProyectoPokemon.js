class Pokemon {
    constructor(nombre,tipo,hpActual,hpMaximo,ataque,defensa){
        this.nombre = nombre
        this.tipo = tipo
        this.hpActual = hpActual
        this.hpMaximo = hpMaximo
        this.ataque = ataque
        this.defensa = defensa
    }
    ataque(){
        dano=(ataque/defensa)*dMovimiento*(Math.random() * (1.0 - 0.85) + 0.85);
        return dano;
    }
    curar(hpMaximo){
        curacion=(hpMaximo/2);
        return curacion;

    }
}
class Movimientos{    
    constructor(nombre,dBase,tipo){
        this.nombre = nombre        
        this.dBase = dBase
        this.tipo = tipo
}
}
class tipo{
    charizard=new Pokemon(charizard,fuego,100,100,10,10);
    blastoise=new Pokemon(blastoise,agua,100,100,10,10);
    pidgeot=new Pokemon(pidgeot,volador,100,100,10,10);
    pikachu=new Pokemon(pikachu,electrico,100,100,10,10);
    mewtwo=new Pokemon(mewtwo,psiquico,100,100,10,10);
    ekans=new Pokemon(ekans,veneno,100,100,10,10);
    onix=new Pokemon(onix,roca,100,100,10,10);
    venosaur=new Pokemon(venosaur,planta,100,100,10,10);
}
