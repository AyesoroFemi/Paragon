import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../icons/Logo";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { useTheme } from "../../context/useTheme";

import {
  Container,
  NavItem,
  BurgerNav,
  NavWrapper,
  CustomNav,
  CustomClose,
  ToggleImg,
} from "./NavBar.styles";

import ModeIcon from "../../assets/mode-icon2.svg";

export const NavBar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <NavWrapper>
      <Container>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <NavItem>
          <div className={`about ${mode}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            {/* <img onClick={() => changeColor('yellow')} src={ModeIcon} alt="toggle_mode" /> */}
            <img
              style={{
                filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
              }}
              onClick={toggleMode}
              src={ModeIcon}
              alt="toggle_mode"
            />
          </div>
        </NavItem>
        <ToggleImg className="img_toggle" src={ModeIcon} alt="toggle_mode" />
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
  );
};
