import styled from "styled-components";
import { Footer } from "../../components/footer/Footer";
// import { NavBar } from "../../components/navbar/NavBar";
import { DesignCard } from "./components/DesignContent/DesignContent";
import { useTheme } from "../../context/useTheme";

export const Service = () => {
  const { mode } = useTheme();

  return (
    <>
      {/* <NavBar /> */}
      <HeaderText>
        <div className={`about ${mode}`}>
          Services
          <p></p>
        </div>
      </HeaderText>
      <DesignCard />
      <Footer />
    </>
  );
};

export const Container = styled.div``;
export const HeaderText = styled.div`
  .about.dark {
    /* border: 3px solid red; */
    /* background-color: red; */
  }

  .about.light {
    /* background-color: teal; */
    color: #000;
  }

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

  @media screen and (max-width: 767px) {
    p {
      width: 25%;
    }
  }

  @media screen and (max-width: 579px) {
    margin-left: 2rem;
    margin-right: 2rem;

    p {
      width: 25%;
    }
  }
`;
