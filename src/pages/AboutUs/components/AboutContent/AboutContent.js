import { ContentWrapper } from "./AboutContent.styles";

import { useTheme } from "../../../../context/useTheme";

export const AboutContent = () => {

  const { mode } = useTheme()

  return (
    <ContentWrapper>
      <div className={`about ${mode}`}>
        <h2>Who we are? </h2>
        <p>
          Paragon Architects is a multidisciplinary design company of
          professionals and experts located in Nigeria. The main aim is to
          provide top of the notch design services Established in 2017 in Abuja,
          Nigeria. The practice led by Rabi Musa Babayo provides full
          architectural design, urban design, master planning and interior
          design services for both clients in the public and private sectors.
          The professionals of the company have vast experiences, backgrounds in
          architecture, interior design, urban design/planning, landscape
          architecture and other related fields. <br />
          With the belief that a
          sustainable living has an impact on how people live and interact with
          their environment. PARAGON strives to be a pacesetter when it comes to
          sustainable living, and this can only be achieved with different
          design professionals to develop the practice of PARAGON ARCHITECTS.
        </p>
      </div>
      <div>
          <img src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375743/paragon-project/assets/aboutpic_mrbd7x.png" alt="" />
      </div>
    </ContentWrapper>
  );
};
