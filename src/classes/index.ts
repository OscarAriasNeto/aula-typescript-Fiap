// src/index.ts
import { GerenciadorVeiculos } from './GerenciadorVeiculos';
import { Carro } from './carro';
import { Moto } from './moto';

// Criar o gerenciador de carros
const gerenciadorCarros = new GerenciadorVeiculos<Carro>();

// Adicionar carros da Audi, incluindo o Audi R8
gerenciadorCarros.adicionar(new Carro('Audi', 'A3', 'prata', 2020));
gerenciadorCarros.adicionar(new Carro('Audi', 'Q7', 'preto', 2018));
gerenciadorCarros.adicionar(new Carro('Audi', 'R8', 'vermelho', 2023)); // Audi R8

// Listar carros
console.log('Carros Audi cadastrados:');
gerenciadorCarros.listarVeiculos().forEach(carro => {
    console.log(`${carro.marca} ${carro.modelo} - Cor: ${carro.cor} - Ano: ${carro.ano}`);
});

// Criar o gerenciador de motos
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

// Adicionar motos
gerenciadorMotos.adicionar(new Moto('Honda CG', 160, 'vermelha'));
gerenciadorMotos.adicionar(new Moto('Yamaha XTZ', 250, 'preta'));

// Listar motos
console.log('Motos cadastradas:');
gerenciadorMotos.listarVeiculos().forEach(moto => {
    console.log(`${moto.modelo} - Cilindrada: ${moto.cilindrada}cc - Cor: ${moto.cor}`);
});

// Remover um carro e listar novamente
gerenciadorCarros.remover(new Carro('Audi', 'A3', 'prata', 2020));  // Remover o Audi A3
console.log('Carros após remoção:');
gerenciadorCarros.listarVeiculos().forEach(carro => {
    console.log(`${carro.marca} ${carro.modelo} - Cor: ${carro.cor} - Ano: ${carro.ano}`);
});
