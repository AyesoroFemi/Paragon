import styled from "styled-components"


export const Gallery = () => {
  return (
    <GalleryContainer>
         <h3>Portfolio</h3>
        <div>
            <img src="assets/photo5.png" alt="" />
            <img src="assets/photo.png" alt="" />
            <img src="assets/photo4.png" alt="" />
            <img src="assets/photo6.png" alt="" />
            <img src="assets/photo2.png" alt="" />
            <img src="assets/photo3.png" alt="" />
        </div>
    </GalleryContainer>
  )
}

export const GalleryContainer = styled.div`
    margin-left: 7rem; 
    margin-right: 7rem;

    margin-bottom: 10rem;

     h3{
        color:#fff;
        font-size: 3rem;
        text-align: center;
    }

     div {
        margin-top: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem; 
    }  

    div img{
        width: 100%;
        height: 400px;
    }
    
`

     