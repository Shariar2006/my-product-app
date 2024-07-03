import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery, useGetCategoriesQuery, useUpdateProductMutation } from '../redux/api';
import { Form, Input, Button, Select } from 'antd';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading: productLoading } = useGetProductByIdQuery(id);
  const { data: categories, isLoading: categoriesLoading } = useGetCategoriesQuery([]);
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();


  const onFinish = (values: any) => {
    console.log('Received values: ', values);
    updateProduct({ id, ...values });
    Swal.fire({
        icon: "success",
        title: "Good Job",
        text: "Your change has been saved",
      });
      navigate('/')
  };

  if (productLoading || categoriesLoading) return <div>Loading...</div>;

  return (
    <Form style={{marginTop: '10px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', background:'#fff', padding: '25px', borderRadius: '10px'}} layout="vertical" onFinish={onFinish} initialValues={product}>
      <Form.Item name="title" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select>
          {categories.map((category: {name: string, slug: string}) => (
            <Select.Option key={category.name} value={category.slug}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.List name="reviews">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Form.Item key={key} label="Review">
                <Form.Item {...restField} name={[name, 'review']} fieldKey={[fieldKey!, 'review']} noStyle>
                  <Input />
                </Form.Item>
                <Button style={{backgroundColor:'#28C8A4', color:'#fff', marginTop: '10px'}} onClick={() => remove(name)}>Remove</Button>
              </Form.Item>
            ))}
            <Button type="dashed" onClick={() => add()} block>
              Add Review
            </Button>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button style={{backgroundColor:'#28C8A4', marginTop: '10px'}} type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProduct;
