import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Logo } from "../icons/Logo"


export const NavBar = () => {
  return (
    <Container>
        <div>
            <Logo/>
        </div>
        <NavItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </NavItem>
    </Container>
  )
}

export const Container = styled.div`
    margin-left: 7rem;
    margin-right: 7rem;
    margin-top: 2rem;
    /* border: 3px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavItem = styled.div`

    .active {
        border-bottom: 3px solid #E59D30;
        padding: 8px 8px;
    }

    a {
        margin-right: 3rem;
        text-decoration: none;
        color: #fff;
    }
` 
