import { Link } from "react-router-dom";
import { useTheme } from "../../../context/useTheme";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";
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

export const ServiceSlider = () => {
  const { mode } = useTheme();

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
        <Items>
          <ItemWrapper mode={mode}>
            {mode === "dark" ? <DarkRuler /> : <Arrow />}
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
        </Items>
        <Items>
          <ItemWrapper mode={mode}>
            {mode === "dark" ? <DarkProjectDev /> : <ProjectDev />}
            <h2>Project Development Consultancy</h2>
            <p>
              we leverage our experience our project management systems and
              processes are continually kept under review to ensure current best
              practice
            </p>
            <GroupLink>
              <LinkWrapper mode={mode} to="/services">
                Show more
              </LinkWrapper>
              <BsArrowRight
                color={mode !== "dark" ? "#fff" : "#232323"}
                size={20}
              />
            </GroupLink>
          </ItemWrapper>
        </Items>
        <Items>
          <ItemWrapper mode={mode}>
            {mode === "dark" ? <DarkPlanIcon /> : <PlanIcon />}
            <h2>Planning & Urban Design</h2>
            <p>
              We are happy to share our work with you. For your convenience, we
              have collected by category. Enjoy watching!
            </p>
            <GroupLink>
              <LinkWrapper mode={mode} to="/services">
                Show more
              </LinkWrapper>
              <BsArrowRight color={mode !== "dark" ? "#fff" : "#232323"} size={20} />
            </GroupLink>
          </ItemWrapper>
        </Items>
        <Items>
          <ItemWrapper mode={mode}>
            {mode === "dark" ? <DarkInteriorIcon /> : <InteriorIcon />}
            <h2>Interior Design</h2>
            <p className="interior__design" style={{ marginTop: "4rem" }}>
              We are trusted by clients to create beautiful, experiential
              environments that engage and delight communities through a
              strategic and insightful approach.
            </p>
            <GroupLink>
              <LinkWrapper mode={mode} to="/services">
                Show more
              </LinkWrapper>
              <BsArrowRight color={mode !== "dark" ? "#fff" : "#232323"} size={20} />
            </GroupLink>
          </ItemWrapper>
        </Items>
        <Items>
          <ItemWrapper mode={mode}>
            {mode === "dark" ? <DarkBimIcon /> : <BimIcon />}
            <h2>Paragon Bim Solutions</h2>
            <p>
              An information model-centric approach brings common understanding
              among stakeholders--the client, contractors, and suppliers--and
              helps them make.
            </p>
            <GroupLink>
              <LinkWrapper mode={mode} className="link__service" to="/services">
                Show more
              </LinkWrapper>
              <BsArrowRight color={mode !== "dark" ? "#fff" : "#232323"} size={20} />
            </GroupLink>
          </ItemWrapper>
        </Items>
      </Slider>
    </div>
  );
};

export const Items = styled.div`
  /* border: 10px solid red; */
  margin-top: 2rem;
  margin-bottom: 2rem;

  div h2 {
    text-align: left;
    width: 94%;
    font-weight: 900;
    font-size: 1.8rem;
  }

  div p {
    /* border: 3px solid red; */
  }

  @media screen and (max-width: 579px) {
    div h2 {
      text-align: left;
      width: 100%;
      font-weight: 900;
      font-size: 1.5rem;
    }

    div p {
      font-size: 16px;
    }
  }
`;

export const ItemWrapper = styled.div`
  background-color: ${(props) => (props.mode === "dark" ? "#fff" : "#232323")};
  color: ${(props) => (props.mode === "dark" ? "#232323" : "#fff")};
  margin: 0 1.2rem;
  /* width: 100%; */
  padding: 2rem;
  box-shadow: 5px 9.9px 9.9px hsl(0deg 0% 0% / 0.35);
  height: 450px;

  &:hover {
    background-color: ${(props) =>
      props.mode === "dark" ? "#E59D30" : "#E59D30"};
    border: ${(props) =>
      props.mode === "dark" ? "3px solid #232323" : "3px solid #fff"};
  }

  .architecture__design {
    margin-top: 3rem;
  }

  .interior__design {
    margin-top: 4rem;
  }

  div:nth-of-type(1) {
    /* border: 2px solid red; */

    /* color: ${(props) => props.current}; */
  }

  @media screen and (max-width: 991px) {
    .architecture__design {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 579px) {
    /* margin: 0 0.5rem; */
    margin-left: 1rem;
    margin-right: 1rem;
    /* width: 100%; */
    padding: 1rem;
    height: 100%;
  }
`;

export const DarkWrapper = styled(DarkRuler)`
  border: 5px solid yellow;
  /* color: ${(props) => props.current}; */
  background-color: #fff;
  /* border: 5px solid red; */

  &:hover {
    color: ${(props) => props.fill};
  }
`;

export const GroupLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  margin-top: 3rem;
  margin-bottom: 1rem;

  /* .link__service:hover {
    color: #fff;
  } */
`;

export const LinkWrapper = styled(Link)`
    color: ${(props) => (props.mode === "dark" ? "#232323" : "#fff")};
`
