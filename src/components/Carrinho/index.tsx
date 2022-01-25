import { List, Button, InputNumber, PageHeader } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { countValorTotalItens, selectAllItens } from '../../store/carrinho/selector';
import styles from './carrinho.module.css';
import { decrementarItemCarrinho, incrementarItemCarrinho, removerItemCarrinho } from '../../store/carrinho/actions';

const Carrinho = () => {
  const itens = useSelector(selectAllItens);
  const precoTotal = useSelector(countValorTotalItens)
  const router = useRouter();
  const dispatch = useDispatch();

  const removerItem = (item) => {
    dispatch(removerItemCarrinho(item))
  }

  const incrementarItem = (item) => {
    dispatch(incrementarItemCarrinho(item))
  }

  const decrementarItem = (item) => {
    dispatch(decrementarItemCarrinho(item))
  }

  const formartToReal = (valor: number) => {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  return (
    <div className={styles.container}>
      <PageHeader
        className={styles.site_page_header}
        onBack={() => { router.push('/') }}
        title="Carrinho de Compras"
      />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={itens}
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <span style={{ marginLeft: '10px' }}><b>TOTAL:</b> {formartToReal(precoTotal)}</span>
            <Button type="primary" size="large" icon={<CheckCircleOutlined />}>Finalizar Compra</Button>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.produto.id}
            actions={[
              <InputNumber
                addonBefore={<PlusOutlined onClick={() => incrementarItem(item)} />}
                addonAfter={<MinusOutlined onClick={() => decrementarItem(item)} />}
                value={item.quantidade} />,
              <Button type="link" icon={<DeleteOutlined />} danger onClick={() => removerItem(item)}>Remover</Button>,
            ]}
            extra={
              <img
                width={100}
                height={100}
                alt="logo"
                src={item.produto.image}
              />
            }
          >
            <List.Item.Meta
              title={item.produto.title}
              description={item.produto.description}
            />
            <p><strong>Preço: </strong> {formartToReal(item.produto.price * item.quantidade)} R$</p>
          </List.Item>
        )}
      />
    </div>
  )
};

export default Carrinho;
