import { useEffect } from "react" 
import styled from "styled-components";
import { HeaderText } from "../Service/Service";
import { AboutContent } from "./components/AboutContent/AboutContent";
import { useTheme } from "../../context/useTheme";

export const About = () => {
  const { mode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <AboutWrap mode={mode}>
        <HeaderText style={{ marginTop: "1.3rem" }}>
          <div className={`about ${mode}`}>
            About Us
            <p></p>
          </div>
        </HeaderText>
        <AboutContent />
      </AboutWrap>
    </div>
  );
};

export const AboutWrap = styled.div`
  border: 1px solid transparent;
  background-image: ${(props) =>
    props.mode === "dark"
      ? `url(pattern_dark.png)`
      : `url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649666846/paragon-project/assets/PatternLight_d0zven.svg)`};
  margin-top: 4rem;
  margin-bottom: 120px;
`;

export const ContainerText = styled(HeaderText)`
  .about.dark {
    /* border: 3px solid blue; */
    /* background-color: red; */
  }

  .about.light {
    /* background-color: teal; */
    color: #000;
  }
`;
