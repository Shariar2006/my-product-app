// src/components/SignUp.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Divider, Result } from 'antd';
import { useAuth } from '../context/AuthProvider';
import './Product.css'
import googleImg from '../images/google-login.png'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signup(email, password)
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        icon: "success",
                        title: "Good job!",
                        text: "You are successfully Sign Up!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate('/sign-in')
                })
            //   history.push('/');
        } catch (error) {
            console.error("Failed to create an account", error);
        }
    };

    const loginWithGoogle = async () => {
        try {
            await googleLogin()
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: "success",
                    title: "Good job!",
                    text: "You are successfully Sign Up!",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/')
            })
            
        }catch (error)  { console.log(error) }
    }

return (
    <Card style={{ marginTop: '50px', maxWidth: '400px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Title>Sign Up</Title>
        <Form onSubmitCapture={handleSubmit}>
            <Form.Item label="Email">
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Item>
            <Form.Item label="Password">
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Item>
            <Form.Item>
                <Button style={{ backgroundColor: '#28C8A4', marginTop: '10px' }} type="primary" htmlType="submit">Sign Up</Button>
            </Form.Item>
            <Divider plain>or</Divider>
            <img onClick={loginWithGoogle} style={{ width: '320px', cursor: 'pointer' }} src={googleImg} alt="img" />
            <p>Already have an account? Please <Link to='/sign-in'>Sign In</Link></p>

        </Form>
    </Card>
);
};

export default SignUp;
