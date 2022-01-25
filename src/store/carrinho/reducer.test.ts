import Item from '../../types/item';
import Produto from '../../types/produto';
import reducer from './reducer';

const produto: Produto = {
  id: 1,
  title: 'Produto',
  price: 22.50,
  rating: {
    count: 10,
    rate: 5.4
  },
  category: 'Categoria',
  description: 'Descrição',
  image: 'Imagem',
};

describe('Layout Reducer', () => {
  test('deve retonar o state inicial', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  test('deve adicionar um item ao carrinho', () => {
    const novoItem: Item = new Item(produto, 1);
    expect(reducer(undefined, { type: 'ADD_ITEM', payload: novoItem })).toEqual([novoItem]);
  });

  test('deve remover um item remover o item do carrinho', () => {
    const itemParaRemover: Item = new Item(produto, 1);
    expect(reducer([itemParaRemover], { type: 'REMOVER_ITEM', payload: itemParaRemover })).toEqual([]);
  });

  test('deve incrementar a quantidade de um item', () => {
    const itemParaIncrementar = new Item(produto, 1);
    expect(reducer([itemParaIncrementar], { type: 'INCREMENTAR_QUANTIDADE_ITEM', payload: itemParaIncrementar })).toEqual([new Item(produto, 2)]);
  });

  test('deve decrementar a quantidade de um item', () => {
    const itemParaDecrementar= new Item(produto, 2);
    expect(reducer([itemParaDecrementar], { type: 'DECREMENTAR_QUANTIDADE_ITEM', payload: itemParaDecrementar })).toEqual([new Item(produto, 1)]);
  });

  test('deve remover o item se a quantidade for menor ou igual a zero', () => {
    const itemParaDecrementar= new Item(produto, 1);
    expect(reducer([itemParaDecrementar], { type: 'DECREMENTAR_QUANTIDADE_ITEM', payload: itemParaDecrementar })).toEqual([]);
  });

});
