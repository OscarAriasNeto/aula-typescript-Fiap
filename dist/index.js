let mensagem = "Olá, TypeScript!";
console.log(mensagem);
let valores = [60, 50, 40];
let somaValores = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);
function mensagemPersonalizada(nome) {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Oscar"));
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Audi", "R8", 2024);
console.log(carro1.detalhes());
