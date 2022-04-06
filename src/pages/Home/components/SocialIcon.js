import styled from "styled-components"
import { CgFacebook } from "react-icons/cg";
import { ImTwitter} from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SocialIcon = () => {
  return (
    <Section>
        <div>
            <Link to="#">
                <CgFacebook color="#fff" size={23} />
            </Link>
        </div>
       <div>
        <Link to="#">
                <ImTwitter color="#fff" size={23} />
        </Link>
       </div>
       <div>
            <Link to="#">
                 <FaInstagram color="#fff" size={23} />
            </Link>
       </div>
        <div>
            <Link to="#">
                <FaBehance color="#fff" size={23} />
            </Link>
        </div>
       <div>
            <Link to="#">
                 <FaLinkedinIn color="#fff" size={23} />
            </Link>
       </div>
       <div>
        <Link to="#">
             <FaPinterestP color="#fff" size={24} />
        </Link>
       </div>
    </Section>
  )
}


export const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    div {
        width: 2rem;
        height: 2rem;
        padding-top: 2px;
        border-radius: 50%;
        /* border-radius: 2rem; */
        border: 1.5px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div a{
        margin-top: 3px;
    }

`
