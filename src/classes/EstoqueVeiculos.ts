// src/classes/EstoqueVeiculos.ts
export class EstoqueVeiculos<T> {
    private estoque: { [modelo: string]: number } = {};

    adicionarEstoque(modelo: string, quantidade: number): void {
        if (this.estoque[modelo]) {
            this.estoque[modelo] += quantidade;
        } else {
            this.estoque[modelo] = quantidade;
        }
    }

    removerEstoque(modelo: string, quantidade: number): void {
        if (this.estoque[modelo] && this.estoque[modelo] >= quantidade) {
            this.estoque[modelo] -= quantidade;
            if (this.estoque[modelo] === 0) {
                delete this.estoque[modelo];
            }
        } else {
            console.log(`Estoque insuficiente para o modelo ${modelo}.`);
        }
    }

    consultarEstoque(modelo: string): number {
        return this.estoque[modelo] || 0;
    }
}
