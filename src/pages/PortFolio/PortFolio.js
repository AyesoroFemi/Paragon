import { useState, useEffect } from "react";
import styled from "styled-components";
import { HeaderText } from "../Service/Service";
import { ArchDesign } from "./components/ArchDesign";
import { InteriorDesign } from "./components/InteriorDesign";
import { ViewAll } from "./components/ViewAll/ViewAll";

import { useTheme } from "../../context/useTheme";

export const PortFolio = () => {
  const { mode } = useTheme();

  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PorfolioContainer>
      <HeaderText>
        <div className={`about ${mode}`}>
          Portfolio
          <p></p>
        </div>
      </HeaderText>
      <Links>
        <div className={`about ${mode}`}>
          <span
            onClick={() => setStep(1)}
            className={step === 1 ? "activeStep" : "step"}
          >
            View All
          </span>
          <span
            onClick={() => setStep(2)}
            className={step === 2 ? "activeStep" : "step"}
          >
            Architecture Design
          </span>
          <span
            onClick={() => setStep(3)}
            className={step === 3 ? "activeStep" : "step"}
          >
            Interior Design
          </span>
        </div>
      </Links>
      {step === 1 && <ViewAll />}
      {step === 2 && <ArchDesign />}
      {step === 3 && <InteriorDesign />}
    </PorfolioContainer>
  );
};

export const PorfolioContainer = styled.div`
    .about.light {
    color: #000;
  }
`

export const Links = styled.div`
  margin-top: -2rem;
  margin-left: 7rem;
  margin-right: 7rem;
  color: #fff;

  .about.light {
    color: #000;
    font-weight: 500;
  }

  .step {
    font-size: 18px;
    margin-right: 72px;
    cursor: pointer;
  }
  .activeStep {
    font-size: 18px;
    margin-right: 72px;
    cursor: pointer;
    border-bottom: 3px solid #e59d30;
    padding: 0.8rem 0.2rem;
  }

  @media screen and (max-width: 991px) {
    margin-left: 7rem;
    margin-right: 7rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 7rem;
    margin-right: 7rem;

    .step {
      display: block;
      margin: 3rem 0;
    }
  }

  @media screen and (max-width: 579px) {
    margin-left: 2rem;
    margin-right: 2rem;

    .activeStep {
      font-size: 16px;
      margin-right: 72px;
      cursor: pointer;
      border-bottom: 3px solid #e59d30;
      padding: 1.4rem 0.2rem;
    }
  }
`;
