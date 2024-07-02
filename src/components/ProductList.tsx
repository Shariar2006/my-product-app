import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { useGetProductsQuery } from '../redux/api';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({ limit: 10, skip: (page - 1) * 10 });
  const navigate = useNavigate();
  console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Button onClick={() => navigate(`/products/${record.id}`)}>View Details</Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={data.products}
      columns={columns}
      pagination={{ current: page, pageSize: 10, total: data.total, onChange: setPage }}
      rowKey="id"
    />
  );
};

export default ProductList;
