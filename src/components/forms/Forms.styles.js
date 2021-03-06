import styled from "styled-components";

export const FormWrapper = styled.div`
  border: 1px solid transparent;
  /* height: 120vh; */
  background-image: ${(props) =>
    props.mode === "dark"
      ? `url(pattern_dark.png)`
      : `url(https://res.cloudinary.com/dvwbbiu0g/image/upload/v1649666846/paragon-project/assets/PatternLight_d0zven.svg)`};
  color: #fff;
  padding-top: 7rem;
  padding-bottom: 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  h1 {
    margin-top: -2rem;
    font-size: 48px;
    margin-left: -8rem;
  }

  @media screen and (max-width: 991px) {
    gap: 5rem;
    grid-template-columns: 1fr;
  }
`;

export const InfoWrapper = styled.div`
  margin-left: 350px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  .about.light h1,
  .about.light p,
  .about.light h3 {
    color: #000;
  }

  @media screen and (max-width: 991px) {
    margin-left: 2rem;

    h1 {
      margin-left: -10rem;
      text-align: left;
      margin-top: -2rem;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 579px) {
    margin-left: 1rem;
    margin-right: 4rem;

    h1 {
      margin-left: -8rem;
      text-align: left;
      margin-top: -2rem;
      font-size: 2rem;
    }
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 2rem;

  div p {
    margin-top: -0.1rem;
  }
`;

export const FormGroup = styled.div`
  .about.light div,
  .about.light textarea {
    background-color: #000;
    color: #fff;
  }
  .about.light input,
  .about.light textarea {
    border-bottom: 1px solid #fff;
    outline: none;
    background-color: #000;
  }
`;

export const FormContent = styled.div`
  background-color: #fff;
  /* margin: 5rem 5rem; */
  margin-right: 5rem;
  color: black;
  padding: 2rem;

  @media screen and (max-width: 991px) {
    margin-left: 7rem;
    margin-right: 7rem;
  }

  @media screen and (max-width: 579px) {
    margin-left: 2rem;
    margin-right: 2rem;

    h1 {
      margin-left: -10rem;
      text-align: left;
      margin-top: -2rem;
      font-size: 2rem;
    }
  }
`;

export const SubmitButtom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
  margin-bottom: 3rem;

  button {
    display: flex;
    align-items: center;
    /* background-color: #232323; */
    background-color: ${(props) => (props.mode === "dark" ? "#232323" : "#fff")};
    color: ${(props) => (props.mode === "dark" ? "#fff" : "#232323")};
    font-weight: 500;
    border: none;
    gap: 1rem;
    font-size: 16px;
    padding: 0.6rem;
    border-radius: 5px;
  }
`;

export const FormElement = styled.div`
  margin-top: 5rem;
  /* margin-bottom: 5rem; */

  label {
    font-weight: 500;
    font-size: 18px;
    /* border: 3px solid red; */
    /* width: 100%; */
  }

  input {
    /* transform: translateY(-.5rem); */
    width: 100%;
    /* padding: 12px 0; */
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
  }
  textarea {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
  }
`;
