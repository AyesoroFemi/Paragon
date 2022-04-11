import styled from "styled-components";
import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { useTheme } from "../../../context/useTheme";
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const SocialIcon = () => {
  const { mode } = useTheme();

  return (
    <Section mode={mode}>
      <div>
        <Link to="#">
          <CgFacebook color={mode === 'dark' ? "#fff" : "#232323"}  size={23} />
        </Link>
      </div>
      <div>
        <Link to="#">
          <ImTwitter  color={mode === 'dark' ? "#fff" : "#232323"}  size={23} />
        </Link>
      </div>
      <div>
        <Link to="#">
          <FaInstagram  color={mode === 'dark' ? "#fff" : "#232323"}  size={23} />
        </Link>
      </div>
      <div>
        <Link to="#">
          <FaBehance  color={mode === 'dark' ? "#fff" : "#232323"}  size={23} />
        </Link>
      </div>
      <div>
        <Link to="#">
          <FaLinkedinIn  color={mode === 'dark' ? "#fff" : "#232323"}  size={23} />
        </Link>
      </div>
      <div>
        <Link to="#">
          <FaPinterestP  color={mode === 'dark' ? "#fff" : "#232323"}  size={24} />
        </Link>
      </div>
    </Section>
  );
};

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    width: 2rem;
    height: 2rem;
    padding-top: 2px;
    border-radius: 50%;
    border: ${props => props.mode === 'dark' ? '1.5px solid #fff' : '1.5px solid #232323'};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.mode === 'dark' ? '' : '#fff'};
  }

  div a {
    margin-top: 3px;
    /* border: 3px solid red; */

  }
`;
