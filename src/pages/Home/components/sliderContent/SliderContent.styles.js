import styled from "styled-components";


export const Wrapper = styled.div`
  margin-top: 2rem;
  height: 77vh;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;

  @media screen and (max-width: 991px) {
    height: 100%;
    overflow-y: hidden;
  }

  @media screen and (max-width: 579px) {
    height: 100%;
  }
`;

export const TextWrapper = styled.div`
   margin-left: 7rem;
  color: #fff;

  @media screen and (max-width: 991px) {
    overflow-y: hidden;
  }

  @media screen and (max-width: 579px) {
      margin-left: 2rem;
      margin-right: 2rem;
      overflow-x: hidden;
    h1 {
    margin-top: 3rem;
    font-size: 2rem;
    }
  }
`;

export const HeaderText = styled.h1`
     margin-top: 6rem;
    font-size: 4rem;
    @media screen and (max-width: 991px) {
        font-size: 2.5rem;
   
 }
    @media screen and (max-width: 579px) {
    
    margin-top: 3rem;
    font-size: 2rem;
  }
`

export const ParaText = styled.div`
  margin-top: -2rem;
  width: 33rem;
  font-size: 18px;
  line-height: 40px;
  font-weight: 400;

  @media screen and (max-width: 991px) {
    width: 80%;
  }
  @media screen and (max-width: 579px) {
    margin-right: 2rem;
    margin-top: 1rem;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 991px) {
 }
 @media screen and (max-width: 579px) {
    margin-top: 5rem;
   flex-direction: column;
 }

  div {
    border-radius: 5px;
    justify-content: center;
  }

  div a {
    text-decoration: none;
    color: #232323;
    font-weight: 500;
  }
`;

export const ShowButton = styled.div`
  background-color: #e59d30;
  box-shadow: 5.0px 9.9px 9.9px hsl(0deg 0% 0% / 0.35);

  div {

      display: flex;
      align-items: center;
      gap: .5rem;
      padding: 0.8rem 1.2rem;
  }

  div a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 579px) {
   flex-direction: column;
 }

  div {
    /* padding: 1rem 1.4rem; */
    border-radius: 5px;
    justify-content: center;
  }

  div a {
    text-decoration: none;
    color: #232323;
    font-weight: 500;
  }
`;

export const PortFolioButton = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 5.0px 9.9px 9.9px hsl(0deg 0% 0% / 0.35);

  div {
      display: flex;
      align-items: center;
      gap: .5rem;
      padding: 0.8rem 1.2rem;
  }

  div a {
    text-decoration: none;
    color: black;
  }
`;
