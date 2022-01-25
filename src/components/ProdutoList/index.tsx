import { useEffect, useState } from "react";
import { Layout, Row, Col, Spin } from "antd";

import api from '../../services/api';
import Produto from "../../types/produto";
import ProdutoCard from "../ProdutoCard";
import styles from './produtoList.module.css';

const { Content } = Layout;

const ProdutoList = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    api.get('/products').then(reponse => {
      setProdutos(reponse.data);
      setSpinning(false);
    });
  }, []);

  return <Content>
    <Spin tip="Carregando lista de produtos..." spinning={spinning}>
    <Row className={styles.container}>
      {produtos.map(produto => (<Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 24, offset: 0 }}
        md={{ span: 11, offset: 0 }}
        lg={{ span: 6 }}
      >
        <ProdutoCard produto={produto} />
      </Col>))}
    </Row>
    </Spin>
  </Content>;
}

export default ProdutoList;
