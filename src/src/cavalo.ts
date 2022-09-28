import { Animal } from "./animal";

export class Cavalo extends Animal { 
    cavalga: string;
    pasta: string;

    constructor (
        cavalga: string,
        pasta: string, 
        especie: string,
        classe: string, 
        familia: string, 
        subclasse: string, 
    ) { super(especie, familia, classe, subclasse,)

        this.cavalga= cavalga
        this.pasta= pasta 

    }
    lutar() {
        console.log("cavalos lutam dando coices")
    }
    cagar() {
        console.log(" cagar como um cavalo")
    }
    berrar() {
        console.log(" cavalos relicham")
    }
}