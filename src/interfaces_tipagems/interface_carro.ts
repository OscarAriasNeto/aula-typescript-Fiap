interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor: string;
}

const meuCarro: Carro = {
    marca: "Audi",
    modelo: "R8",
    ano: 2023,
    motor: "5.2L V10",
    detalhes: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(meuCarro);