import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card, InputNumber, notification, Rate } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemCarrinho } from "../../store/carrinho/actions";
import styles from './produto.module.css';

const openNotification = (produto) => {
  notification.success({
    message: `Produto Adicionado!`,
    description:
      'O produto ' + produto.title + ' foi adicionado com sucesso ao carrinho!',
    placement: 'topLeft'
  });
};

const ProdutoCard = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1);
  const dispatch = useDispatch();

  const adicionarProdutoAoCarrinho = () => {
    dispatch(addItemCarrinho(produto, quantidade));
    openNotification(produto)
    setQuantidade(1);
  }

  return (<Card
    key={produto.id}
    hoverable
    title={produto.title}
    style={{ margin: '10px 20px' }}
    actions={[
      <InputNumber size="large" min={1} value={quantidade} data-testid="quantidade" onChange={(quantidade) => setQuantidade(quantidade)} />,
      <Button size="large" type="primary" icon={<PlusCircleOutlined />} onClick={() => adicionarProdutoAoCarrinho()}>Adicionar ao Carrinho</Button>,,
    ]}
    cover={<img alt={produto.title} src={produto.image} style={{ width: 140, height: 140, display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />}
  >
    <p className={styles.descricao}>{produto.description}</p>
    <p className={styles.descricao}><strong>Preço unitário: </strong>{produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    <div style={{ display: 'block' }}>Avaliações: <Rate disabled defaultValue={produto.rating.rate} /> ({produto.rating.count})</div>
  </Card>);
}

export default ProdutoCard;
