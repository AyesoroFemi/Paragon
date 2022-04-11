import styled from "styled-components";
import { ServiceSlider } from "./ServicesSlider";
import { useTheme } from "../../../context/useTheme";
// import partern from "../../../assets/dark_mode.svg"

export const ServiceSession = () => {
  const { mode } = useTheme();

  return (
    <Wrap>
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
  height: 100%;
  /* border: 3px solid red; */
  /* background-image: url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375740/paragon-project/assets/Pattern_ymflos.png); */

  background-image: ${(props) =>
    props.mode === "dark"
      ? `url(assets/Pattern.svg)`
      : `url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649666846/paragon-project/assets/PatternLight_d0zven.svg)`};
  color: #fff;
  overflow-x: hidden;
  padding-bottom: 4rem;

  .about.light h1,
  .about.light h3 {
    color: #000;
  }
  .about.dark {
    /* border: 3px solid red; */
    /* background-color: red; */
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
