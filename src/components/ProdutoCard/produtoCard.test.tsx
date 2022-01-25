import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProdutoCard from '.';
import store from '../../store';
import Produto from '../../types/produto';

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

describe('ProdutoList Component', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  test('deve conter um botão adicionar ao carrinho', () => {
    render(<Provider store={store}><ProdutoCard produto={produto} /></Provider>);

    const botaoAdicionar = screen.getByText('Adicionar ao Carrinho');

    expect(botaoAdicionar).toBeInTheDocument();
  });

  test('deve conter um input para informar a quantidade de itens', () => {
    render(<Provider store={store}><ProdutoCard produto={produto} /></Provider>);

    const container = document.querySelector('.ant-input-number-input')

    expect(container).toBeInTheDocument();
  });

  test('deve iniciar input quantidade com valor igual a 1', () => {
    render(<Provider store={store}><ProdutoCard produto={produto} /></Provider>);

    const inputQuantidade = screen.getByDisplayValue(1);

    expect(inputQuantidade).toBeInTheDocument();
  });

  test('deve setar quantidade com valor informado no input', () => {
    const { queryByTestId, } = render(<Provider store={store}><ProdutoCard produto={produto} /></Provider>);
    const quantidadeField = queryByTestId('quantidade')

    fireEvent.focus(quantidadeField)
    fireEvent.change(quantidadeField, { target: { value: "2" } });
    fireEvent.blur(quantidadeField);

    expect(quantidadeField.getAttribute('value')).toEqual("2");
  });

});
