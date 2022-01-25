import Item from '../../types/item';
import Produto from '../../types/produto';
import { addItemCarrinho, decrementarItemCarrinho, incrementarItemCarrinho, removerItemCarrinho } from './actions';
import { ADD_ITEM, REMOVER_ITEM, INCREMENTAR_QUANTIDADE_ITEM, DECREMENTAR_QUANTIDADE_ITEM } from './types';

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

describe('Layout Actions', () => {
  describe('Action Types', () => {
    test('deve retornar a action type ADD_ITEM', () => {
      expect(ADD_ITEM).toEqual('ADD_ITEM');
    });

    test('deve retornar a action type REMOVER_ITEM', () => {
      expect(REMOVER_ITEM).toEqual('REMOVER_ITEM');
    });

    test('deve retornar a action type INCREMENTAR_QUANTIDADE_ITEM', () => {
      expect(INCREMENTAR_QUANTIDADE_ITEM).toEqual('INCREMENTAR_QUANTIDADE_ITEM');
    });

    test('deve retornar a action type DECREMENTAR_QUANTIDADE_ITEM', () => {
      expect(DECREMENTAR_QUANTIDADE_ITEM).toEqual('DECREMENTAR_QUANTIDADE_ITEM');
    });
  })

  describe('Actions Creators', () => {
    test('deve retornar a action creator addItemCarrinho', () => {
      expect(addItemCarrinho(produto, 1)).toEqual({type: ADD_ITEM, payload: new Item(produto, 1)});
    });

    test('deve retornar a action creator removerItemCarrinho', () => {
      expect(removerItemCarrinho(new Item(produto, 1))).toEqual({type: REMOVER_ITEM, payload: new Item(produto, 1)});
    });

    test('deve retornar a action creator incrementarItemCarrinho', () => {
      expect(incrementarItemCarrinho(new Item(produto, 1))).toEqual({type: INCREMENTAR_QUANTIDADE_ITEM, payload: new Item(produto, 1)});
    });

    test('deve retornar a action creator decrementarItemCarrinho', () => {
      expect(decrementarItemCarrinho(new Item(produto, 1))).toEqual({type: DECREMENTAR_QUANTIDADE_ITEM, payload: new Item(produto, 1)});
    });

  });
});
