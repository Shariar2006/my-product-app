import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../redux/api';
import { Rate , Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    const navigate = useNavigate();
    // const { Meta } = Card;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    console.log(data, id)

    return (
        <div className='cardContainer'>

            <Card className='card'
            hoverable
                cover={
                    <img
                        alt="example"
                        src={data.thumbnail}
                    />
                }
            >
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <h3>${data.price}</h3>
                <Rate allowHalf defaultValue={data.rating} />
                <br />
                <button onClick={() => navigate(`/products/edit/${id}`)}>Edit Product</button>
            </Card>
        </div>
    );
};

export default ProductDetail;
