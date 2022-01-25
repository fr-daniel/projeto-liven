export const selectAllItens = (state) => state.carrinho;

export const countValorTotalItens = (state) => {
  let total = 0;
  state.carrinho.forEach(item => total += item.produto.price * item.quantidade);
  return total;
}

