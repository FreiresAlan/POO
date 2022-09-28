export class avião {
     executiva: string; 
     economica: string; 

     constructor(
        executiva: string,
        economica: string,

     ){ this.executiva=executiva
        this.economica=economica 

     }
     verExecutiva(){
      console.log(`Executiva: ${this.executiva}.` )
     }
     verEconomica(){
      console.log(`Economica: ${this.economica}.`)
     }
}
