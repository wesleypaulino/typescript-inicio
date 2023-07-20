export class Negociacao {
    //Propriedades Privata
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //Metodos Acessos as propriedades
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
