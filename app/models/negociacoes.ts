import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push.(negociacao)
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;
    }
}

//Teste
// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     n.data
//     n.quantidade
//     n.valor
// })