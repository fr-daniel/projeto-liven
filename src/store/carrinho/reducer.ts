import Item from "../../types/item";
import { ADD_ITEM, REMOVER_ITEM, INCREMENTAR_QUANTIDADE_ITEM, DECREMENTAR_QUANTIDADE_ITEM } from './types';

const INITIAL_STATE: Item[] = [];

export default function carrinho(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVER_ITEM:
      const itensAposRemoverUmItem = state.filter(item => item != action.payload);
      return [...itensAposRemoverUmItem];
    case INCREMENTAR_QUANTIDADE_ITEM:
      const itensAposIncrementar = state.map(item => {
        if (item == action.payload) {
          const itemParaIncrementar = new Item(action.payload.produto, action.payload.quantidade);
          itemParaIncrementar.incrementarQuantidade();
          return itemParaIncrementar;
        }
        return item;
      });
      return [...itensAposIncrementar];
    case DECREMENTAR_QUANTIDADE_ITEM:
      const itensAposDecrementar = state.map(item => {
        if (item == action.payload) {
          const itemParaDecrementar = new Item(action.payload.produto, action.payload.quantidade);
          itemParaDecrementar.decrementarQuantidade();
          return itemParaDecrementar;
        }
        return item;
      });
      return [...itensAposDecrementar.filter(item => item.quantidade >= 1)];
    default:
      return state;
  }
}
