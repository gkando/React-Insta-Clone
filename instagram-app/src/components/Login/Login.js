import React, { useState, useEffect } from 'react';
import './Login.css'
import { Button, Card, CardText, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import logoBundle from '../../ig_bundle.png';


const LogoTextImage = styled.div`
    background-image: url(${logoBundle});
    background-size: 312px 298px;
    background-position: -92px -71px;
    background-repeat: no-repeat;
    height: 29px;
    width: 103px;
    margin-right: 15px;
`;

const Login = () => {
    const [username, setUsername] = useState(localStorage.getItem('user_name') || '');

    const handleUser = e => {
        e.preventDefault();
        setUsername(e.target.value);
    }

      const handleSubmit = e => {
        // e.preventDefault();
        console.log(username)
        localStorage.setItem('user_name', username);
        updatePage()
      }

    const updatePage = () => {
        let x = localStorage.getItem('user_name');
        // alert(x)
    }

    useEffect(() => {
        console.log('render!');
        return () => console.log('unmounting...');
    })

    return (


            <Card id='login-container' body>
                {/* <CardTitle id='logo-card'><div className='logo2' aria-label='Instagram'></div></CardTitle> */}
                <LogoTextImage aria-label='Instagram'></LogoTextImage>
                    <Form id='login-form' onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="inputUsername" hidden>Username</Label>
                            <Input type="text" bsSize="sm" name="username" id="inputUsername" placeholder="Username" onChange={handleUser}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="inputPassword" hidden>Password</Label>
                            <Input type="password" bsSize="sm" name="password" id="inputPassword" placeholder="Password" />
                        </FormGroup>
                        <button id='login-btn' disabled={!username}>Log in </button>
                    </Form>
            </Card>

    )
  
}

export default Login;
