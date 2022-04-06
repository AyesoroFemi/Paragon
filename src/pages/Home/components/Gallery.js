import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Gallery = () => {
  return (
    <GalleryContainer>
      <h3>Portfolio</h3>
      <ImageWrapper>
        <img src="assets/photo5.png" alt="" />
        <img src="assets/photo.png" alt="" />
        <img src="assets/photo4.png" alt="" />
        <img src="assets/photo6.png" alt="" />
        <img src="assets/photo2.png" alt="" />
        <img src="assets/photo3.png" alt="" />
      </ImageWrapper>
      <ProfileButton>
        <span>
          <Link to="/portfolio" style={{ color: "#232323" }} href="">
            Show Portfolio
          </Link>
          <BsArrowRight color="" size={20} />
        </span>
      </ProfileButton>
    </GalleryContainer>
  );
};

export const GalleryContainer = styled.div`
  margin-left: 7rem;
  margin-right: 7rem;
  margin-bottom: 5rem;

  h3 {
    color: #fff;
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 579px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }


`;

export const  ImageWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  
    img {
    width: 100%;
    height: 400px;
  }

  @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
  }

  @media screen and (max-width: 579px) {
      
  }

`

export const ProfileButton = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  
  span {
    display: flex; 
    align-items: center;
    padding: 0.1rem 1rem;
    background-color: #232323;
    border-radius: 5px;
    justify-content: ;
    background-color: #fff;
    margin: 5rem 0;
    gap: 8px;
  }
  a {
    color: #fff;
    /* background: #fff; */
    padding: 0.8rem 0.1rem;
    border-radius: 5px;
  }
`;
