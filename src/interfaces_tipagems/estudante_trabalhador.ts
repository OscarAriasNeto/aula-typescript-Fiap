type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Oscar",
    curso: "ADS",
    empresa: "BTG",
    cargo: "Tech Lead"
};

console.log(estudanteTrabalhador);