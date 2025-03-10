// src/index.ts
import { EstoqueVeiculos } from './EstoqueVeiculos';
import { GerenciadorVeiculos } from './GerenciadorVeiculos';
import { Carro } from './carro';
import { Moto } from './moto';

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

const estoqueVeiculos = new EstoqueVeiculos<Carro | Moto>();

gerenciadorCarros.adicionar(new Carro('Audi', 'A3', 'prata', 2020));
gerenciadorCarros.adicionar(new Carro('Audi', 'Q7', 'preto', 2018));
gerenciadorCarros.adicionar(new Carro('Audi', 'R8', 'vermelho', 2023));

gerenciadorMotos.adicionar(new Moto('Honda CG', 160, 'vermelha'));
gerenciadorMotos.adicionar(new Moto('Yamaha XTZ', 250, 'preta'));

console.log('Carros gerenciados:');
console.log(gerenciadorCarros.listarVeiculos());

console.log('Motos gerenciadas:');
console.log(gerenciadorMotos.listarVeiculos());

estoqueVeiculos.adicionarEstoque('Audi R8', 5);
estoqueVeiculos.adicionarEstoque('Honda CG', 10);
estoqueVeiculos.adicionarEstoque('Yamaha XTZ', 7);

console.log(`Estoque de Audi R8: ${estoqueVeiculos.consultarEstoque('Audi R8')}`);
console.log(`Estoque de Honda CG: ${estoqueVeiculos.consultarEstoque('Honda CG')}`);
console.log(`Estoque de Yamaha XTZ: ${estoqueVeiculos.consultarEstoque('Yamaha XTZ')}`);

estoqueVeiculos.removerEstoque('Audi R8', 2);
estoqueVeiculos.removerEstoque('Yamaha XTZ', 3);

console.log(`Estoque de Audi R8 após remoção: ${estoqueVeiculos.consultarEstoque('Audi R8')}`);
console.log(`Estoque de Yamaha XTZ após remoção: ${estoqueVeiculos.consultarEstoque('Yamaha XTZ')}`);

estoqueVeiculos.removerEstoque('Honda CG', 15);
