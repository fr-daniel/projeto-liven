import Produto from "./produto";

class Item {
    private _produto: Produto;
    private _quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this._produto = produto;
        this._quantidade = quantidade;
    }

    get produto(): Produto {
        return this._produto;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    incrementarQuantidade(): void {
        this._quantidade = this._quantidade + 1;
    }

    decrementarQuantidade(): void {
        this._quantidade = this._quantidade - 1;
    }

    get precoTotal() {
      return this._produto.price * this._quantidade;
    }
}

export default Item;
