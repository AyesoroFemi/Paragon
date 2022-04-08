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
    height: 100%;
    /* border: 3px solid red; */
    background-image: url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375740/paragon-project/assets/Pattern_ymflos.png);
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

    @media screen and (max-width: 991px) {
        
  }
  @media screen and (max-width: 579px) {

    div h3{
        padding-top: 3rem;
    }
    div h1{
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 2rem;
        text-align: center;
    }
  }
`



