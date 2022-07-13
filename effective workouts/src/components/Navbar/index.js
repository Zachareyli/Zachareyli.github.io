import React from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const toggleHome = ()=>{
    scroll.scrollToTop()
}


const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={toggleHome}>Home Workouts</NavLogo>
                <MobileIcon onClick={toggle}>
                    <VscThreeBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        activeClass="active"
                        >Why do It</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={-80}
                        activeClass="active">Let's Start</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'
                        smooth={true}
                        duration={1500}
                        spy={true}
                        exact="true"
                        offset={80}
                        activeClass="active">Services</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar