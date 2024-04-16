// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';


function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform login logic, for simplicity I'm just passing data to the parent component
        onLogin({ email, password });
        navigate('./HomePage');
    };

    return ( <
        div >
        <
        h1 > Signin to your PopX account < /h1> <
        p > < span > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /span></p >
        <
        form onSubmit = { handleSubmit } >
        <
        label > Email < input type = "email"
        placeholder = " Enter email address"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        /></label >
        <
        label > Password < input type = "password"
        placeholder = " Enter Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /></label >
        <
        button onClick = {
            () => window.location.href = './homepage' } > Login < /button> <
        /form> <
        /div>
    );
}

export default LoginPage;