import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow } from "../../../components/icons/Arrow"
import { ProjectDev } from "../../../components/icons/ProjectDev";
import { PlanIcon } from "../../../components/icons/PlanIcon";
import { InteriorIcon } from "../../../components/icons/InteriorIcon";
import { BimIcon } from "../../../components/icons/Location";

export const ServiceSlider = () => {

    let settings = {
        // dots: true,
        // focusOnSelect: true,
        onSwipe: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => (
          <div
            style={{
              backgroundColor: "red",
              // borderRadius: "10px",
              width: "400px",
              paddingTop: "2px",
              marginLeft: "2rem",
              // height: '2rem',
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: (i) => (
          <div
            style={{
              width: "30px",
              color: "blue",
              border: "1px blue solid",
            }}
          >
            {i + 1}
          </div>
        ),
    };

  return (

    <Carousel {...settings}>
      <div className="slider-one">
         <div> <Arrow /></div>
          <h3>
            Architecture Design
          </h3>
        <p>
            Our success is achieved through effective 
            partnerships and meticulous planning by 
            exploring opportunities before embarking 
            on agreed design strategies. By carefully 
            executing crafted bespoke designs 
        </p>
      </div>
      <div className="slider-two">
         <ProjectDev />
         <h3>
            Project Development 
            Consultancy
          </h3>
        <p>
          
        </p>
      </div>
      <div className="slider-three">
      <PlanIcon />
          <h3>
            Planning & Urban 
            Design
          </h3>
        <p>
         
        </p>
      </div>
      <div className="slider-four">
      {/* <InteriorIcon /> */}
      <h3>Interior Design</h3>
        <p>
        
        </p>
      </div>
      <div className="slider-five">
      {/* <BimIcon /> */}
        <p>
         
        </p>
      </div>
    </Carousel>
  )
}



export const Carousel = styled(Slider)`
    margin-left: 7rem;
  /* background-image: url */
  /* margin: 0 3rem; */
  /* max-width: 700px;
   */

  /* .slick-list {
      overflow: visible;
  } */


  

  .slider-one {
    background-color: #fff;
    height: 50vh;
    border: 3px solid red;
    /* padding: 1rem; */
    
    h3 {
        transform: translateY(-8rem);
        text-align: left;
        color: #232323;
    }
    p {
        transform: translateY(-8rem);
        text-align: left;
        color: #232323;
    }
    
  }

  .slider-two {
    background-color: #fff;
    height: 50vh;
    border: 3px solid blue;
  }
  .slider-three {
    background-color: #fff;
    height: 50vh;
    border: 3px solid brown;
  }
  .slider-four {
    background-color: #fff;
    height: 50vh;
    border: 3px solid green;

  }
  .slider-five {
    background-color: #fff;
    height: 50vh;
    border: 3px solid orange;
  }
`;
