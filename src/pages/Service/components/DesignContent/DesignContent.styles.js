import styled from "styled-components";


export const DesignContent = styled.div`
  transform: translateY(-2.5rem);
  margin-left: 7rem;
  margin-right: 7rem;
  margin-bottom: 300px;
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 3rem;
  color: #fff;
  justify-content: space-between;

  h3 {
    font-size: 36px;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width:991px) {
    grid-template-columns: 1fr;

    }

    @media screen and (max-width: 579px) {
        margin-left: 2rem;
        margin-right: 2rem;
        grid-template-columns: 1fr;
    }
`;