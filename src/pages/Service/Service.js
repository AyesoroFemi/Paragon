import styled from "styled-components";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navbar/NavBar";
import { DesignCard } from "./components/DesignContent/DesignContent";

export const Service = () => {
  return (
    <>
      <NavBar />
      <HeaderText>
        Services
        <p></p>
      </HeaderText>
      <DesignCard/>
      <Footer/>
    </>
  );
};

export const Container = styled.div``;
export const HeaderText = styled.div`
  margin-top: 100px;
  margin-left: 7rem;
  margin-right: 7rem;
  font-size: 48px;
  font-weight: 700;
  color: #fff;

  p {
    border: 1px solid #e59d30;
    width: 9%;
    transform: translateY(-2.5rem);
  }
`;


