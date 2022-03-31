import styled from "styled-components"

export const SocialIcon = () => {
  return (
    <Section>
        <div>
            <a href="">
                <box-icon size="1.5rem" name='facebook' type='logo' color='#ffffff' ></box-icon>
            </a>
        </div>
       <div>
        <a href="">
                <box-icon size="1.5rem" name='twitter' type='logo' color='#ffffff' ></box-icon>
            </a>
       </div>
       <div>
            <a href="">
                    <box-icon size="1.5rem" name='instagram' type='logo' color='#ffffff' ></box-icon>
            </a>
       </div>
        <div>
            <a href="">
                <box-icon size="1.5rem" type='logo' color='#ffffff' name='behance'></box-icon>
            </a>
        </div>
       <div>
            <a href="">
                    <box-icon size="1.5rem" type='logo' name='linkedin' color='#ffffff'   ></box-icon>
            </a>
       </div>
       <div>
        <a href="">
                <box-icon size="1.5rem" type='logo' name='pinterest-alt' color='#ffffff' ></box-icon>
        </a>
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
        border-radius: 2rem;
        border: 1.5px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
