import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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
        <img
          src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375745/paragon-project/assets/pic2_r5scom.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649378714/paragon-project/assets/sliderimg3_sgwfwp.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649378710/paragon-project/assets/sliderimg2_p7qxg2.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649378706/paragon-project/assets/sliderimg_e0nq51.png"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export const Carousel = styled(Slider)`
  /* border: 3px solid red; */
  width: 100%;
  /* position: relative; */

  .slick-slider {
    border: 10px solid teal;
  }

  .slick-prev,
  .slick-next {
    opacity: 0.01;
    background: black;
    color: #232323;
    /* display: none; */
    position: relative;
  }

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    position: absolute;
    background-color: #232323;
  }

  /* div {
    width: 100%;
    height: 100%;
  } */
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
