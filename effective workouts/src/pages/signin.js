import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const Container = styled.div`
min-height: 692px;
background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
bottom: 0;
top: 0;
right: 0;
left: 0;
overflow: hidden;
position: fixed;

@media screen and (max-width: 768px){
  min-height: 450px;
}`;

const FormWrap = styled.div`
display: flex;
height: 100%;
justify-content: center;
flex-direction: column;
`;
// const Icon = styled(Link)`
// color: white;
// font-weight: 700;
// display: flex;
// margin-top: 32px;
// margin-left: 32px;
// `;
const FormContent = styled.div`
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`;
const Form = styled.form`
background: black;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 10px;
`;
const FormH1 = styled.h1`
color: white;
padding-bottom: 30px;
`;

const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: white;
`

const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

const FormButton = styled.button`
background: white;
border-radius: 10px;
padding: 16px 0%;
border: none;
font-weight: 700;
color: black;
background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
cursor: pointer;

&:hover{
  transform: scale(1.1)
}
`;

const Text = styled.span`
text-align: center;
margin-top: 24px;
color: white;
font-size: 14px;
cursor: pointer;

&:hover{
  text-decoration: underline;
}
`;

const SignInPage = () => {
  return (
    <Container>
      <FormWrap>
      {/* <Icon to='/'>HomeWorkouts</Icon> */}
      <FormContent>
        <Form action='#'>
          <FormH1>Sign in to your Account</FormH1>
          <FormLabel htmlFor='for'>Email</FormLabel>
          <FormInput type='email' required />
          <FormLabel htmlFor='for'>Password</FormLabel>
          <FormInput type='password' required />
          <FormButton type='submit'>Continue</FormButton>
          <Text>Forgot Password</Text>
        </Form>
      </FormContent>
       </FormWrap>
    </Container>
  )
}

export default SignInPage