import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding-top: 27px;
  padding-bottom: 27px;
  padding-left: 7rem;
  padding-right: 7rem;
  background-color: ${props => props.mode === 'dark' ? '#434343' : '#fff' };
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 991px) {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
