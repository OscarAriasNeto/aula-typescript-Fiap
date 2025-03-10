import { Carro } from '../classes/carro';
import { Moto } from '../classes/moto';

export function filtrarPorAno(veiculos: (Carro | Moto)[], ano: number): (Carro | Moto)[] {
    return veiculos.filter(veiculo => veiculo.ano === ano);
}

export function filtrarPorMarca(veiculos: (Carro | Moto)[], marca: string): (Carro | Moto)[] {
    return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}

export function filtrarPorModelo(veiculos: (Carro | Moto)[], modelo: string): (Carro | Moto)[] {
    return veiculos.filter(veiculo => veiculo.modelo.toLowerCase() === modelo.toLowerCase());
}
