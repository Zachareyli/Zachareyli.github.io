import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: #000;
height: 80px;
${'' /* margin-top: -80px; */}
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
height: 80px;
z-index: 1;
justify-content: space-between;
width: 100%;
padding: 0 24px;
width: 100%;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: white;
justify-self: flex-start;
font-size: 1.5rem;
cursor: pointer;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
margin-left: 24px;

&:hover{
    color: #01bf71; 
}
`
export const MobileIcon = styled.div`
display: none;

@media screen and ( max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
 }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: none;
margin-right: -22px;
@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
text-decoration: none;
cursor: pointer;

&.active{
    border-bottom: 3px solid #01bf71;
}

&:hover{
    color: #01bf71;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
font-size: 1rem;
border: none;
cursor: pointer;
outline: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: black;

&:hover{
    transition: all 0.2s ease-in-out;
    background:white;
    color: #010606;
    font-weight: 700;
}
`


