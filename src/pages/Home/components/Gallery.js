import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/useTheme";

export const Gallery = () => {
  const { mode } = useTheme();
  return (
    <GalleryContainer>
      <div className={`about ${mode}`}>
        <h3>Portfolio</h3>
        <ImageWrapper>
          <img
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375741/paragon-project/assets/photo5_rhkb7r.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375742/paragon-project/assets/photo_ki97gz.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375744/paragon-project/assets/photo4_sohmsr.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375744/paragon-project/assets/photo6_wci7wm.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375745/paragon-project/assets/photo2_iydmcd.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649375742/paragon-project/assets/photo3_wt3fgh.png"
            alt=""
          />
        </ImageWrapper>
        <ProfileButton mode={mode}>
          <span>
            <Link to="/portfolio" >
              Show Portfolio
            </Link>
            <BsArrowRight
              color={mode === "dark" ? "#232323" : "#fff"}
              size={20}
            />
          </span>
        </ProfileButton>
      </div>
    </GalleryContainer>
  );
};

export const GalleryContainer = styled.div`
  margin-left: 7rem;
  margin-right: 7rem;
  margin-bottom: 5rem;

  .about.light h3 {
    /* background-color: teal; */
    color: #000;
  }

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

export const ImageWrapper = styled.div`
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
`;

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
    background-color: ${(props) =>
      props.mode === "dark" ? "#fff" : "#232323"};
    margin: 5rem 0;
    gap: 8px;
  }

  a {
    padding: 0.8rem 0.1rem;
    border-radius: 5px;
    color: ${(props) => (props.mode === "dark" ? "#232323" : "#fff")};
  }
`;
