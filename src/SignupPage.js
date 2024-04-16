import './SignupPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [agency, setAgency] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform signup logic
        console.log({ fullName, contact, email, password, agency, companyname });
        navigate('./LoginPage');
    };

    return ( <
        div >
        <
        h2 > Create your PopX account < /h2> <
        form onSubmit = { handleSubmit } >
        <
        label > Full Name < input type = "text"
        placeholder = "Full Name"
        value = { fullName }
        onChange = {
            (e) => setFullName(e.target.value) }
        /></label >
        <
        label > Contact Number < input type = "text"
        placeholder = "Contact"
        value = { contact }
        onChange = {
            (e) => setContact(e.target.value) }
        /></label >
        <
        label > Email address < input type = "email"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        /></label >
        <
        label > Password < input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /></label >
        <
        label > Company Name < input type = "text"
        placeholder = "Company name"
        value = { companyname }
        onChange = {
            (e) => setCompanyname(e.target.value) }
        /></label >

        <
        button onClick = {
            () => window.location.href = '/login' } > Sign Up < /button> <
        /form> <
        /div>
    );
}

export default SignupPage;