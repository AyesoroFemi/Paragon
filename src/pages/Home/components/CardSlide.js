import styled from "styled-components"
import {Link} from "react-router-dom"
import React, { useState } from "react";
import { useTheme } from "../../../context/useTheme";
import { BsArrowRight } from "react-icons/bs";
import { DarkRuler } from "../../../components/icons/DarkRuler";


export const CardSlide = ({ item }) => {
  const { mode } = useTheme();
  const [showIconOnDarkMode, setShowIconOnDarkMode] = useState(false);

  return (
    <Items
      onMouseOver={() => setShowIconOnDarkMode(!showIconOnDarkMode)}
      onMouseOut={() => setShowIconOnDarkMode(!showIconOnDarkMode)}
      key={item.id}
    >
      <ItemWrapper mode={mode}>
        {mode === "dark"
          ? item.darkIcon(showIconOnDarkMode)
          : item.lightIcon(showIconOnDarkMode)}
        <h2>{item.title}</h2>
        <p>{item.details}</p>
        <GroupLink>
          <Link style={{ color:mode === "dark" ? showIconOnDarkMode?"#fff": "#232323" : !showIconOnDarkMode?"#fff": "#232323"  }} mode={mode} to="/services">
            Show more
          </Link>
          <BsArrowRight
            color={mode === "dark" ? showIconOnDarkMode?"#fff": "#232323" : !showIconOnDarkMode?"#fff": "#232323" }
            size={20}
          />
        </GroupLink>
      </ItemWrapper>
    </Items>
  );
};

export const Items = styled.div`
  /* border: 10px solid red; */
  margin-top: 2rem;
  margin-bottom: 2rem;

  div h2 {
    text-align: left;
    width: 94%;
    font-weight: 900;
    font-size: 1.8rem;
  }

  div p {
    /* border: 3px solid red; */
  }

  @media screen and (max-width: 579px) {
    div h2 {
      text-align: left;
      width: 100%;
      font-weight: 900;
      font-size: 1.5rem;
    }

    div p {
      font-size: 16px;
    }
  }
`;

export const ItemWrapper = styled.div`
  background-color: ${(props) => (props.mode === "dark" ? "#fff" : "#232323")};
  color: ${(props) => (props.mode === "dark" ? "#232323" : "#fff")};
  margin: 0 1.2rem;
  /* width: 100%; */
  padding: 2rem;
  box-shadow: 5px 9.9px 9.9px hsl(0deg 0% 0% / 0.35);
  height: 450px;

  &:hover {
    color: ${(props) => (props.mode === "dark" ? "#fff" : "#000")};
    background-color: ${(props) =>
      props.mode === "dark" ? "#232323" : "#fff"};
    border: ${(props) =>
      props.mode === "dark" ? "1px solid #fff" : "1px solid #000"};
  }

  .architecture__design {
    margin-top: 3rem;
  }

  .interior__design {
    margin-top: 4rem;
  }

  div:nth-of-type(1) {
    /* border: 2px solid red; */

    /* color: ${(props) => props.current}; */
  }

  @media screen and (max-width: 991px) {
    .architecture__design {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 579px) {
    /* margin: 0 0.5rem; */
    margin-left: 1rem;
    margin-right: 1rem;
    /* width: 100%; */
    padding: 1rem;
    height: 100%;
  }
`;

export const DarkWrapper = styled(DarkRuler)`
  border: 5px solid yellow;
  /* color: ${(props) => props.current}; */
  background-color: #fff;
  /* border: 5px solid red; */

  &:hover {
    color: ${(props) => props.fill};
  }
`;

export const GroupLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  margin-top: 3rem;
  margin-bottom: 1rem;

  /* .link__service:hover {
    color: #fff;
  } */
`;

export const LinkWrapper = styled(Link)`
  color: ${(props) => (props.mode === "dark" ? "#232323" : "#fff")};
`;
