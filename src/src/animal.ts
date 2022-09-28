 export abstract class Animal {
    especie: string; 
    familia: string;
    classe: string;
    subclasse: string; 

    constructor(
        especie: string, 
        familia: string,
        classe: string, 
        subclasse: string,

    ){
        this.especie = especie
        this.familia = familia 
        this.classe = classe
        this.subclasse= subclasse 


    } 
    lutar(): void {

    } cagar(): void {

    } berrar(): void {
        
    }

}