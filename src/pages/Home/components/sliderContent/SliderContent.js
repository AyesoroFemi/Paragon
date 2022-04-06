import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ImageSlider } from "../ImageSlider";
import {
  Wrapper,
  TextWrapper,
  HeaderText,
  ParaText,
  ButtonGroup,
  PortFolioButton,
  ShowButton,
} from "./SliderContent.styles";

export const SliderContent = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>
          Innovative ideas, <br />
          stylish designs
        </HeaderText>
        <ParaText>
          We are committed understanding the challenges and in our projects by
          understanding the challenges and solutions in each project.
        </ParaText>
        <ButtonGroup>
          <PortFolioButton>
            <div>
              <Link to="/portfolio">Show porfolio</Link>
              <BsArrowRight color="#232323" size={20} />
            </div>
          </PortFolioButton>
          <ShowButton>
            <div>
              <Link to="/contact">Contact Us</Link>
              <BsArrowRight color="#232323" size={20} />
            </div>
          </ShowButton>
        </ButtonGroup>
      </TextWrapper>
      <ImageSlider />
    </Wrapper>
  );
};
