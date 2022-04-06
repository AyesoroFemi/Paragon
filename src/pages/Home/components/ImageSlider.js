import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <div>
        <img src="assets/pic2.png" alt="" />
      </div>
      <div>
        <img src="assets/pic2.png" alt="" />
      </div>
      <div>
        <img src="assets/pic2.png" alt="" />
      </div>
    </Carousel>
  );
};

export const Carousel = styled(Slider)`
  /* border: 3px solid red; */
  width: 100%;

  /* .slick-arrow.slick-prev {
    display: block;
    border: 20px solid red;
    background-color: red;
    border-radius: none;
    z-index: 10;
    color: red;
    font-size: 5rem; */
    /* transform: translate(20rem, 20rem); */
  }

  div {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 991px) {
       display: none;
    }
`;
