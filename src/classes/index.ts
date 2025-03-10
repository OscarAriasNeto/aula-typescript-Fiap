// src/index.ts
import { filtrarPorAno, filtrarPorMarca, filtrarPorModelo } from '../utils/FiltroVeiculos';
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

gerenciadorMotos.adicionar(new Moto('Honda CG', 160, 'vermelha', 'Honda', 2020));
gerenciadorMotos.adicionar(new Moto('Yamaha XTZ', 250, 'preta', 'Yamaha', 2021));

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

const veiculos2020 = filtrarPorAno([...gerenciadorCarros.listarVeiculos(), ...gerenciadorMotos.listarVeiculos()], 2020);
console.log('Veículos de 2020:', veiculos2020);

const audiVeiculos = filtrarPorMarca([...gerenciadorCarros.listarVeiculos(), ...gerenciadorMotos.listarVeiculos()], 'Audi');
console.log('Veículos da marca Audi:', audiVeiculos);

const hondaCG = filtrarPorModelo([...gerenciadorCarros.listarVeiculos(), ...gerenciadorMotos.listarVeiculos()], 'Honda CG');
console.log('Veículos modelo Honda CG:', hondaCG);
