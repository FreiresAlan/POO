 export class Cliente {
    nome: string; 
    idade : number; 
    cpf: string; 
    telefone: string;

    constructor (
        nome : string, 
        idade:number, 
        cpf: string,
        telefone: string
    ){
        this.nome = nome
        this. idade = idade
        this. cpf= cpf 
        this.telefone= telefone
    }
verCliente () {
    console.log (`Cliente: ${this.nome}.`)
}
verIdade() {
    console.log(`Idade: ${this.idade}.`)
}
verCPF() {
    console.log(`CPF: ${this.cpf}.`)
}
VerTelefone() {
            console.log(`Telefone: ${this.telefone}.`)
}
 }
