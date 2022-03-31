import styled from "styled-components"


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
                            <a href="">View Project</a>
                            <box-icon color="#fff" name='right-arrow-alt'></box-icon>
                    </div>
                    <div>
                        <a style={{color:'#232323'}} href="">Contact Us</a>
                        <box-icon color="#232323" name='right-arrow-alt'></box-icon>
                    </div>
            </ProjectButton>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 7rem;
    height: 50vh;
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

`

export const ProjectButton = styled.div`
    display: flex;
    gap: 2rem;
    
    div:nth-of-type(1) {
        display: flex;
        align-items: center;
        padding: 0.5rem 1.2rem;
        background-color:#232323;
        border-radius: 5px;
    }
    
    a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px
    }

    div:nth-of-type(2) {
        display: flex;
        align-items: center;
        padding: 1rem 1.4rem;
        background-color: #E59D30;
        border-radius: 5px;
    }
    
    a:nth-of-type(2) {
        color: #232323;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px
        padding: 1rem 1.4rem;
    }
`