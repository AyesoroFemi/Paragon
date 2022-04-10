import styled from "styled-components";


export const Wrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
  margin-right: 7rem;
  margin-left: 7rem;
  display: grid;
  grid-template-columns: 40% 40%;
  /* justify-content: center; */
  gap: 14%;
  color: #fff;

  .about.dark {
        /* border: 3px solid red; */
        /* background-color: red; */
    }

    .about.light, .about.light h3{
        /* background-color: teal; */
        color: #232323;
    }

  div h3 {
    color: #e59d30;
    font-size: 24px;
  }

  div h1 {
    font-size: 3rem;
  }
  div p {
    font-size: 18px;
    line-height: 1.5;
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 579px) {
    margin-right: 2rem;
    margin-left: 2rem;

    div h1 {
    font-size: 2rem;
  }
  div p {
    font-size: 18px;
    line-height: 1.5;
  }
  }
`;

export const ImageSlide = styled.div`


    img:nth-of-type(1){
        position: absolute;
        max-width: 100%;
    }

    img:nth-of-type(2){
        transform: translate(13rem, 15rem);
        position: relative;
        max-width: 100%;
    }

    @media screen and (max-width: 991px) {
        margin-top: 3rem;
        margin-bottom: 5rem;
        grid-template-columns: 1fr;

        img:nth-of-type(2){
        transform: translate(10rem, 15rem);
        position: relative;
    }
  }

    @media screen and (max-width: 579px) {
        margin-top: 1rem;
        margin-bottom: 10rem;
        margin-right: 1rem;
    
        img:nth-of-type(1) {
        position: absolute;
        width: 80%;
    }

    img:nth-of-type(2){
        transform: translate(2.2rem, 16rem);
        position: relative;
        max-width: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;
  padding: 1rem 1.4rem;
  border-radius: 5px;
  max-width: 9rem;
  background-color: #fff;
  align-items: center;
  gap: 10px;
  box-shadow: 5.0px 9.9px 9.9px hsl(0deg 0% 0% / 0.35);

  div {

  }

  a {
    text-decoration: none;
    color: #232323;
    font-weight: 500;
  }
`;
