import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DarkRuler } from "../../../components/icons/DarkRuler";
import { InteriorIcon } from "../../../components/icons/InteriorIcon";
import { PlanIcon } from "../../../components/icons/PlanIcon";
import { ProjectDev } from "../../../components/icons/ProjectDev";
import { BimIcon } from "../../../components/icons/BimIcon";
import { DarkBimIcon } from "../../../components/icons/DarkBimIcon";
import { DarkInteriorIcon } from "../../../components/icons/DarkInteriorIcon";
import { DarkPlanIcon } from "../../../components/icons/DarkPlanIcon";
import { Arrow } from "../../../components/icons/Arrow";
import { DarkProjectDev } from "../../../components/icons/DarkProjectDev";
import { CardSlide } from "./CardSlide";

export const ServiceSlider = () => {

  var settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    autoplay: true,
    // infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
 
  const data = [
    {
      id:1,
      darkIcon: (isHover)=>(<DarkRuler isHover={isHover} />),
      lightIcon: (isHover)=>(  <Arrow isHover={isHover}/>),
      title:"Architecture Design",
      details: "Our success is achieved through effective partnerships and meticulous planning by exploring opportunities before embarking on agreed design strategies. By carefully executing crafted bespoke designs"
    },
    {
      id:2,
      darkIcon: (isHover)=>(<DarkProjectDev isHover={isHover} />),
      lightIcon: (isHover)=>( <ProjectDev isHover={isHover}/>),
      title:"Project Development Consultancy",
      details: "we leverage our experience our project management systems and processes are continually kept under review to ensure current best practice"
    },
    {
      id:3,
      darkIcon:(isHover)=>(<DarkPlanIcon  isHover={isHover}/> ),
      lightIcon: (isHover)=>( <PlanIcon isHover={isHover} />),
      title:"Planning & Urban Design", 
      details: "We are happy to share our work with you. For your convenience, we have collected by category. Enjoy watching!"
    },
    {
      id:4,
      darkIcon: (isHover)=>(<DarkInteriorIcon isHover={isHover}/>),
      lightIcon: (isHover)=>( <InteriorIcon isHover={isHover} />),
      title:"Interior Design",
      details: "An information model-centric approach brings common understanding among stakeholders--the client, contractors, and suppliers--and helps them make."
    },
    {
      id:5,
      darkIcon: (isHover)=>(<DarkBimIcon isHover={isHover} />),
      lightIcon: (isHover)=>( <BimIcon isHover={isHover}/>),
      title:"Paragon Bim Solutions",
      details: "An information model-centric approach brings common understanding among stakeholders--the client, contractors, and suppliers--and helps them make.."
    },
  ]
  return (
    <div>
      <Slider
        {...settings}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        {
          data.map((item, index)=>(
            <CardSlide item={item}/>
          ))
        }
        {/* <Items onMouseOver={()=>setShowIconOnDarkMode(!showIconOnDarkMode)} onMouseOut={()=>setShowIconOnDarkMode(!showIconOnDarkMode)}>
          <ItemWrapper mode={mode}>
            {mode === "dark" ? <DarkRuler isHover={showIconOnDarkMode} /> : <Arrow isHover={showIconOnDarkMode}/>}
            <h2>Architecture Design</h2>
            <p className="architecture__design">
              Our success is achieved through effective partnerships and
              meticulous planning by exploring opportunities before embarking on
              agreed design strategies. By carefully executing crafted bespoke
              designs
            </p>
            <GroupLink>
              <LinkWrapper mode={mode} to="/services">
                Show more
              </LinkWrapper>
              <BsArrowRight color={mode !== "dark" ? "#fff" : "#232323"} size={20} />
            </GroupLink>
          </ItemWrapper>
        </Items> */}
 
      </Slider>
    </div>
  );
};

