import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Wrapper, ImageSlide, ButtonWrapper } from "./AboutSession.styles"
export const AboutSession = () => {
  return (
    <Wrapper>
      <ImageSlide>
        <img src="assets/about.png" alt="" />
        <img src="assets/about1.png" alt="" />
      </ImageSlide>
      <div>
        <h3>About us</h3>
        <h1>Design Excellence</h1>
        <p>
          Paragon Architects is a multidisciplinary design company of
          professionals and experts located in Nigeria. The main aim is to
          provide top of the notch design services Established in 2017 in Abuja,
          Nigeria. The practice led by Rabi Musa Babayo provides full
          architectural design, urban design, master planning and interior
          design services for both clients in the public and private sectors.
        </p>
        <ButtonWrapper>
          <Link to="/portfolio">Show porfolio</Link>
          <BsArrowRight color="#232323" size={20} />
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};