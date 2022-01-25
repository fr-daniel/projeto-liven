import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Layout, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Head from 'next/head';

import store from '../store';
import '../styles/globals.css';

const { Header, Footer } = Layout;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>E-commerce Liven</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico"></link>
      </Head>
      <Header>
        <Menu theme="dark" mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/carrinho">
            <a>
              <Menu.Item style={{ fontSize: '18px', color: "#fff" }}><ShoppingCartOutlined style={{ fontSize: '18px', color: '#fff' }} /> Carrinho</Menu.Item>
            </a>
          </Link>
        </Menu>
      </Header>
      <Component {...pageProps} />
      <Footer style={{ textAlign: 'center' }}>E-commerce ©2022 Criado por Daniel Lima</Footer>
    </Provider>
  )
}
