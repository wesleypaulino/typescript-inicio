export class Negociacao {
    #data; 
    #quantidade;
    #valor; 
    
    //Propriedades Privata
    constructor(data, quantidade, valor) {
        this.#data = data; 
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    //Metodos Acessos as propriedades
    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }
}