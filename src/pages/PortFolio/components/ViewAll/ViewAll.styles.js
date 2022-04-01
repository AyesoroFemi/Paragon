import styled from "styled-components";

export const ViewContainer = styled.div`
  margin-left: 7rem;
  margin-right: 7rem;
  margin-top: 5rem;
  margin-bottom: 6rem;

  img {
    width: 100%;
    height: 400px;
  }

  .first__line {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
  }

  .second__line {
    margin: 1.5rem 0;
  }

  .third__line,
  .four__line {
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: 39% 59%;
    justify-content: space-between;
  }

  .five__line {
    display: grid;
    grid-template-columns: 34% 64%;
    justify-content: space-between;
  }

  .six__line {
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: 41% 57%;
    justify-content: space-between;
  }
  .seven__line {
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
  }
  .last__line img {
    height: 100%;
  }

  @media screen and (max-width: 991px) {
    .first__line,
    .third__line,
    .four__line,
    .five__line,
    .six__line,
    .seven__line  {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    img {
    width: 100%;
    height: 100%;
  }

    .second__line {
      margin: 1.5rem 0;
    }

    .last__line img {
      height: 100%;
    }
  }

  @media screen and (max-width: 579px) {
    margin-left: 2rem;
    margin-right: 2rem;
    grid-template-columns: 1fr;

    img {
    width: 100%;
    height: 100%;
  }
  }
`;
