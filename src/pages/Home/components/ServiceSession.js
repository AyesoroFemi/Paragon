import styled from "styled-components"
import { ServiceSlider } from "./ServicesSlider"


export const ServiceSession = () => {

  return (
    <Wrap>
        <div>
            <h3>Our services</h3>
            <h1>What can we offer for your home</h1>
        </div>
        <ServiceSlider />
    </Wrap>
  )
}

export const Wrap = styled.div`
    height: 90vh;
    background-image: url(./assets/pattern.png);
    color: #fff;
    overflow-x: hidden;
    padding-bottom: 4rem;

    div h3{
        padding-top: 100px;
        color:#E59D30;
        font-size: 24px;
        text-align: center;
    }

    div h1{
        font-size: 3rem;
        text-align: center;
    }
`



