import styled from "styled-components";
import { HeaderText } from "../Service/Service";
import { AboutContent } from "./components/AboutContent/AboutContent";
import { useTheme } from "../../context/useTheme";

export const About = () => {

  const { mode } = useTheme()

  return (
    <div>
      <AboutWrap>
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
  background-image: url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375740/paragon-project/assets/Pattern_ymflos.png);
  margin-top: 4rem;
  margin-bottom: 120px;
`;

export const ContainerText = styled(HeaderText)`

    .about.dark {

        /* border: 3px solid blue; */
        /* background-color: red; */
    }

    .about.light{
        /* background-color: teal; */
        color: #000;
    }
`
