import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
 
export const ServicesContainer = styled.div`
height: 1100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: black;

@media screen and (max-width: 768px){
    height: 1500px;
}

@media screen and (max-width: 480px){
    height: 1700px;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 60px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const ServicesCard = styled(LinkR)`
background: white;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 440px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in;
text-decoration: none;
color: black;

&:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in;
    cursor: pointer;
}
`
export const ServicesIcon = styled.img`
height: 150px;
width: 150px;
margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: white;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 1.5rem;
}
`
export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;