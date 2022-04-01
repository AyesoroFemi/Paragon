import styled from "styled-components";


export const ContentWrapper = styled.div`
    color: #fff;
    margin-left: 7rem;
    margin-right: 7rem;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 50% 45%;
    justify-content: space-between;

    img{
        width: 100%;
    }

    div h2 {
        font-weight: 700;
        font-size: 36px;
        transform:translateY(-3rem); ;
    }

    div p {
        font-weight: 400;
        font-size: 18px;
        line-height: 40px;
    }

    @media screen and (max-width:991px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    }

    @media screen and (max-width: 579px) {
        margin-left: 2rem;
        margin-right: 2rem;
        grid-template-columns: 1fr;


        div p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 2rem;
    }
    }

   

`
