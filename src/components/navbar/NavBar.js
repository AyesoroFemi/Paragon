import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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

import LightMode from "../../assets/light_mode.svg";
import DarkModeLight from "../../assets/dark_mode_white.svg";
import LogoLight from "../../assets/logo_light.svg";
import LogoMode from "../../assets/logo_mode.svg";

export const NavBar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
//   console.log(mode);
  return (
    <NavWrapper>
      <div className={`about ${mode}`}>
        <Container>
          <div>
            <Link to="/">
              {mode === "dark" ? (
                <img src={LogoLight} alt="company_logo" />
              ) : (
                <img src={LogoMode} alt="company_logo" />
              )}
            </Link>
          </div>
          <NavItem>
            <div className={`about ${mode}`}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <span onClick={toggleMode}>
                {mode === "dark" ? (
                  <img src={DarkModeLight} alt="" />
                ) : (
                  <img src={LightMode} alt="" />
                )}
              </span>
            </div>
          </NavItem>
          <ToggleImg onClick={toggleMode}>
            {mode === "dark" ? (
              <img src={DarkModeLight} alt="" />
            ) : (
              <img src={LightMode} alt="" />
            )}
          </ToggleImg>
          <CustomNav onClick={() => setBurgerStatus(true)}>
            <IoIosMenu color={mode === "dark" ? "#fff" : "#232323"} size={40} />
          </CustomNav>
            <BurgerNav mode={mode} show={burgerStatus}>
              <CustomClose onClick={() => setBurgerStatus(false)}>
                <IoMdClose color={mode === "dark" ? "#fff" : "#232323"} size={30} />
              </CustomClose>
              <div className={`about ${mode}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </BurgerNav>
        </Container>
      </div>
    </NavWrapper>
  );
};
