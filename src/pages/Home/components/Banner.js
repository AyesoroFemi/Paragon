import styled from "styled-components"
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <Wrapper>
            <h1> We pay attention to make 
                interior stylish
            </h1>
            <p>
                We are happy to share our work with you. For your convenience, we have collected 
                by category. Enjoy watching!        
            </p>

            <ProjectButton>
                    <div>
                            <Link to="/portfolio">View Project</Link>
                            <BsArrowRight color="#fff" size={20} />
                    </div>
                    <div>
                        <Link style={{color:'#232323'}} to="/contact">Contact Us</Link>
                        <BsArrowRight color="#232323" size={20} />
                    </div>
            </ProjectButton>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
    padding-top: 2rem;
    padding-bottom: 4rem;
    padding-left: 7rem;
    height: 100%;
    background-image: linear-gradient(90deg, #C4C4C4, 47.28%, rgba(148, 134, 122, 0) 62.75%), url(./assets/banner.png);
    background-position: center;
    background-repeat: no-repeat;

    h1 {
        font-size: 64px;
        width: 60%;
    }

    p {
        transform: translateY(-2rem);
        width: 50%;
    }

    @media screen and (max-width: 991px) {
        background-image: linear-gradient(90deg, #C4C4C4, 47.28%, rgba(148, 134, 122, 0) 99.75%), url(./assets/banner.png);
        padding-left: 7rem;
        padding-right: 7rem;
        h1 {
            font-size: 2rem;
            width: 100%;
        }
        p {
            margin-top: 2rem;
            width: 100%;
        }
    }

    @media screen and (max-width: 579px) {
        padding-left: 2rem;
        padding-right: 2rem;

        h1 {
            font-size: 2rem;
        }
    }

`

export const ProjectButton = styled.div`
    display: flex;
    gap: 2rem;
    
    div:nth-of-type(1) {
        display: flex;
        align-items: center;
        padding: 0.8rem 1.2rem;
        background-color:#232323;
        border-radius: 5px;
        gap: 10px;
    }
    
    a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        /* font-size: 18px */
    }

    div:nth-of-type(2) {
        display: flex;
        align-items: center;
        /* padding: 1rem 1.4rem; */
        padding: 0.8rem 1.2rem;
        background-color: #E59D30;
        border-radius: 5px;
        gap: 10px;
    }
    
    a:nth-of-type(2) {
        color: #232323;
        text-decoration: none;
        font-weight: 500;
        /* font-size: 18px */
        padding: 1rem 1.4rem;
    }


    @media screen and (max-width: 579px) {
        display: block;

        div:nth-of-type(1) {
            margin: 1rem 0;
            display: flex;
            justify-content: center;
        }

        div:nth-of-type(2) {
            margin: 1rem 0;
            display: flex;
            justify-content: center;
        }
    }
`