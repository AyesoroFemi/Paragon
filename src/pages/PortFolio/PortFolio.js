import { useState } from 'react'
import styled from "styled-components"
import { Footer } from "../../components/footer/Footer"
// import { NavBar } from "../../components/navbar/NavBar"
import { HeaderText } from "../Service/Service"
import { ArchDesign } from "./components/ArchDesign"
import { InteriorDesign } from "./components/InteriorDesign"
import { ViewAll } from "./components/ViewAll/ViewAll"


export const PortFolio = () => {

    const [step, setStep] = useState(1)

    return (
      <div>
          {/* <NavBar/> */}
          <HeaderText>
                 Portfolio
                <p></p>
         </HeaderText>
         <Links>
             <span onClick={()=> setStep(1)} className={step===1? "activeStep" : "step"}>View All</span>
             <span onClick={()=> setStep(2)} className={step===2? "activeStep" : "step"}>Architecture Design</span>
             <span onClick={()=> setStep(3)} className={step===3? "activeStep" : "step"}>Interior Design</span>
         </Links>
        {step === 1 &&  <ViewAll/>}
        {step === 2 &&  <ArchDesign/>}
        {step === 3 &&   <InteriorDesign/>}
         <Footer/>
      </div>
    )
}

export const Links = styled.div`
    margin-top: -2rem;
    margin-left: 7rem;
    margin-right: 7rem;
    color: #fff;
    
    .step{
        font-size: 18px;
        margin-right: 72px;
        cursor: pointer;
    }
    .activeStep{
        font-size: 18px;
        margin-right: 72px;
        cursor: pointer;
        border-bottom: 3px solid #E59D30;
        padding: .8rem .2rem;
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

        .activeStep{
        font-size: 16px;
        margin-right: 72px;
        cursor: pointer;
        border-bottom: 3px solid #E59D30;
        padding: 1.4rem .2rem;
    }
    }
`