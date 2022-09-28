import { Animal } from "./animal"

export class Cachorro extends Animal {
    caçar:string;
    brincar: string;

    constructor(
        caçar: string,
        brincar: string,
        especie: string,
        familia: string, 
        classe: string,
        subclasse: string, 

    ) { super(especie, familia, classe, subclasse,)
        this.caçar=caçar
        this.brincar=brincar

}
lutar() { 
    console.log("cachorros brigam mordendo")

}cagar() { 
    console.log("cagar como cachorro")
}
berrar(){
    console.log("cachorros latem")
}

}