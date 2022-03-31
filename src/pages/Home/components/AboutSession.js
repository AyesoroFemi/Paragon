import styled from "styled-components"


export const AboutSession = () => {
  return (
    <Wrapper>
        <ImageSlide>
            <img src="assets/about.png" alt="" />
            <img src="assets/about1.png" alt="" />
        </ImageSlide>
        <div>
            <h3>About us</h3>
            <h1>Design Excellence</h1>
            <p>
                Paragon Architects is a multidisciplinary design company of 
                professionals and experts located in Nigeria. The main aim is 
                to provide top of the notch design services Established in 2017 
                in Abuja, Nigeria. The practice led by Rabi Musa Babayo provides 
                full architectural design, urban design, master planning and 
                interior design services for both clients 
                in the public and private sectors.
            </p>
             <ButtonWrapper>
                <a href="">Show porfolio</a>
                <box-icon name='right-arrow-alt'></box-icon>
            </ButtonWrapper>
        </div>
    </Wrapper>
  )
}


export const Wrapper = styled.div`
    margin-top: 300px;
    margin-bottom: 300px;
    margin-right: 7rem;
    margin-left: 7rem;
    display: grid;
    grid-template-columns: 40% 40%;
    /* justify-content: center; */
    gap: 14%;
    color: #fff;

    div h3{
        color:#E59D30;
        font-size: 24px;
    }

    div h1{
        font-size: 3rem;
    }
    div p {
        font-size: 18px;
        line-height: 23px;
    }
`

export const ImageSlide = styled.div`
    /* border: 3px solid orange; */

    img:nth-of-type(1){
        position: absolute;
    }

    img:nth-of-type(2){
        transform: translate(13rem, 15rem);
        position: relative;
    }
`

export const ButtonWrapper = styled.div`
    margin-top: 2.4rem;
    display: flex;
    padding: 1rem 1.4rem;
    border-radius: 5px; 
    max-width: 9rem;
    background-color: #fff;

    div {
         
    }

     a{
        text-decoration: none;
        color: #232323;
        font-weight: 500;
    }
`

