import styled from "styled-components";
import { ServiceSlider } from "./ServicesSlider";
import { useTheme } from "../../../context/useTheme";

export const ServiceSession = () => {
  const { mode } = useTheme();

  return (
    <Wrap mode={mode}>
      <div className={`about ${mode}`}>
        <h3>Our services</h3>
        <h1>What can we offer for your home</h1>
      <img src="" alt="" />
      <ServiceSlider />
      </div>
    </Wrap>
  );
};

export const Wrap = styled.div`
  background-image: ${props => props.mode === "dark" ? `url(pattern_dark.png)` : `url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649666846/paragon-project/assets/PatternLight_d0zven.svg)`};
  height: 100%;

  color: #fff;
  overflow-x: hidden;
  padding-bottom: 4rem;

  .about.light h1,
  .about.light h3 {
    color: #000;
  }
  
  .about.light,
  .about.light {
    color: #232323;
  }

  div h3 {
    padding-top: 100px;
    color: #e59d30;
    font-size: 24px;
    text-align: center;
  }

  div h1 {
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 579px) {
    div h3 {
      padding-top: 3rem;
    }
    div h1 {
      margin-left: 2rem;
      margin-right: 2rem;
      font-size: 2rem;
      text-align: center;
    }
  }
`;
