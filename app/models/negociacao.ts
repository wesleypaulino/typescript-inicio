export class Negociacao {
    private _data: Date; 
    private _quantidade: number;
    private _valor: number; 
    
    //Propriedades Privata
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data; 
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Metodos Acessos as propriedades
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }
}