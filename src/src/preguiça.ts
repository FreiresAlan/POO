import{ Animal } from "./animal";

export class Preguiça extends Animal {
    lerdeza: string;
    preguica: string;
    
    constructor(
        lerdeza: string,
        preguica: string,
        especie: string,
        familia: string,
        classe: string, 
        subclasse: string,
      
    ){
        super(especie, familia, classe, subclasse)
        this.lerdeza=lerdeza
        this.preguica=preguica
    }
    lutar(){
        console.log("preguiças não lutam ")
    }
    cagar() {
        console.log("cague como uma preguiça")
    }
    berrar() {
        console.log("preguiça quase não faz barulho")
    }
}