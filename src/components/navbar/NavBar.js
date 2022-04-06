import { useState } from "react";
import { NavLink, Link } from "react-router-dom"
import { Logo } from "../icons/Logo"
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { Container, NavItem, BurgerNav, NavWrapper, CustomNav, CustomClose } from "./NavBar.styles"

export const NavBar = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <NavWrapper>
    <Container>
        <div>
            <Link to="/"><Logo/></Link>
        </div>
        <NavItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </NavItem>
        <CustomNav onClick={() => setBurgerStatus(true)}>
            <IoIosMenu color="#fff" size={40} />
        </CustomNav>
        <BurgerNav show={burgerStatus}>
            <CustomClose onClick={() => setBurgerStatus(false)}>
                <IoMdClose color="#fff" size={30} />
            </CustomClose>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </BurgerNav>
    </Container>    
</NavWrapper>
  )
}
