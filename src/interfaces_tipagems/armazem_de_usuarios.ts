interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class RepositorioUsuario implements Repositorio<{ nome: string, email: string }> {
    private dados: { nome: string, email: string }[] = [];

    salvar(dado: { nome: string, email: string }): void {
        this.dados.push(dado);
    }

    obterTodos(): { nome: string, email: string }[] {
        return this.dados;
    }
}

const repositorio = new RepositorioUsuario();

repositorio.salvar({ nome: "Oscar", email: "oscar@example.com" });
repositorio.salvar({ nome: "Max", email: "max@example.com" });

console.log(repositorio.obterTodos());