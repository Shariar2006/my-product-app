import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../redux/api';
import { Descriptions, Button, Rate , Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './Product.css'


const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    const navigate = useNavigate();
    const { Meta } = Card;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    console.log(data, id)

    return (
        <div className='cardContainer'>
            {/* <Descriptions title="Product Details" bordered>
        <Descriptions.Item label="Name">{data.title}</Descriptions.Item>
        <Descriptions.Item label="Price">{data.price}</Descriptions.Item>
        <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
      </Descriptions>
      <Button onClick={() => navigate(`/products/edit/${id}`)}>Edit Product</Button> */}

            <Card className=''
            hoverable
                style={{ width: 400 }}
                cover={
                    <img
                        alt="example"
                        src={data.images}
                    />
                }
            >
                {/* <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Card title"
                    description="This is the description"
                /> */}
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <h3 style={{color: '#28C8A4'}}>${data.price}</h3>
                <Rate allowHalf defaultValue={data.rating} />
                <br />
                <button onClick={() => navigate(`/products/edit/${id}`)}>Edit Product</button>
            </Card>
        </div>
    );
};

export default ProductDetail;
