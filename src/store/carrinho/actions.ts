import Item from "../../types/item"
import Produto from "../../types/produto"
import { ADD_ITEM, REMOVER_ITEM, INCREMENTAR_QUANTIDADE_ITEM, DECREMENTAR_QUANTIDADE_ITEM } from './types';

export const addItemCarrinho = (produto: Produto, quantidade: number) => {
  return {
    type: ADD_ITEM, payload: new Item(produto, quantidade)
  }
}

export const removerItemCarrinho = (item: Item) => {
  return {
    type: REMOVER_ITEM, payload: item
  }
}

export const incrementarItemCarrinho = (item: Item) => {
  return {
    type: INCREMENTAR_QUANTIDADE_ITEM, payload: item
  }
}

export const decrementarItemCarrinho = (item: Item) => {
  return {
    type: DECREMENTAR_QUANTIDADE_ITEM, payload: item
  }
}


