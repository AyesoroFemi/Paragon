import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../context/useTheme";

import { Wrapper, ImageSlide, ButtonWrapper } from "./AboutSession.styles";
export const AboutSession = () => {

  const { mode } = useTheme();
  return (
    <Wrapper>
      <ImageSlide>
        <img
          src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375742/paragon-project/assets/about_taxr7a.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375740/paragon-project/assets/about1_svlbyl.png"
          alt=""
        />
      </ImageSlide>
      <div className={`about ${mode}`}>
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
        <ButtonWrapper mode={mode}>
          <Link to="/portfolio">Show porfolio</Link>
          <BsArrowRight color={mode === "dark" ? "#232323" : "#fff"} size={20} />
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};
