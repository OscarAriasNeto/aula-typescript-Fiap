let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

let valores: number[] = [60, 50, 40];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Oscar"));

class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) { }
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Audi", "R8", 2024);
console.log(carro1.detalhes());