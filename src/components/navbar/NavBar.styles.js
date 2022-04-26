import styled from "styled-components";

export const NavWrapper = styled.div`
  border: 1px solid transparent;
  margin-top: -0.5rem;
 

`;

export const Container = styled.div`
  /* min-height: 100px; */
  /* border: 5px solid red; */
  margin-left: 7rem;
  margin-right: 7rem;
  margin-top: 2rem;

  /* border: 3px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:last-child .about.light a{
    color: #000; 
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    align-items: start;
  }

  @media screen and (max-width: 579px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const NavItem = styled.div`

  .about.light a {
    /* background-color: teal; */
    color: #000;
  }

  .active {
    border-bottom: 3px solid #e59d30;
    padding: 8px 8px;
  }

  a {
    margin-right: 3rem;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }

  img {
    transform: translateY(0.5rem);
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }

  @media screen and (max-width: 579px) {
  }
`;

export const ToggleImg = styled.span`
  margin-top: 1rem;
  margin-left: 3rem;
  

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export const BurgerNav = styled.div`
  display: none;


  @media screen and (max-width: 991px) {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.mode === 'dark' ? '#232323' : '#fff'};
    width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
    border: 3px solid transparent;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;


    .active {
      border-bottom: 3px solid #e59d30;
      padding: 8px 8px;
    }

    div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
    }

    .about.light a{
      color: #000;
    }

    a {
      margin-left: 3rem;
      margin-right: 3rem;
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
      color: #fff;
      font-size: 18px;
      width: 7rem;
    }
  }
`;

export const CustomNav = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: inline-block;
    cursor: pointer;
    margin-top: .5rem;
  }
`;
export const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  cursor: pointer;
`;

