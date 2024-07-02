import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout } from 'antd';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ color: 'white', cursor: 'pointer' }}><Link style={{ color: 'white', cursor: 'pointer' }} to={'/'}>My Product App</Link></Header>
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>M360ICT ©2024</Footer>
      </Layout>
    </Router>
  );
};

export default App;
