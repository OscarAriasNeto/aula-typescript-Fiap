import { Carro } from '../classes/carro';
import { Moto } from '../classes/moto';

export function gerarRelatorio(veiculos: (Carro | Moto)[]): string {
    let relatorio = 'Relatório de Veículos Cadastrados:\n\n';

    veiculos.forEach((veiculo, index) => {
        if (veiculo instanceof Carro) {
            relatorio += `Veículo ${index + 1} (Carro):\n`;
            relatorio += `Marca: ${veiculo.marca}\nModelo: ${veiculo.modelo}\nCor: ${veiculo.cor}\nAno: ${veiculo.ano}\n\n`;
        } else if (veiculo instanceof Moto) {
            relatorio += `Veículo ${index + 1} (Moto):\n`;
            relatorio += `Marca: ${veiculo.marca}\nModelo: ${veiculo.modelo}\nCilindrada: ${veiculo.cilindrada}cc\nCor: ${veiculo.cor}\nAno: ${veiculo.ano}\n\n`;
        }
    });

    return relatorio;
}
