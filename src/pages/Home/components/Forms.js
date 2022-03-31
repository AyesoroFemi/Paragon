import styled from "styled-components"
import { Email } from "../../../components/icons/Email"
import { Location } from "../../../components/icons/Location"
import { Phone } from "../../../components/icons/Phone"


export const Forms = () => {
  return (
    <FormWrapper>
        <InfoWrapper>
            <h1>Info</h1>
            <AddressWrapper>
                <Location />
                <div>
                    <p>Address</p>
                    <h3>Wuse, Abuja | Nigeria</h3>
                </div>
            </AddressWrapper>
            <AddressWrapper>
                <Phone />
                <div>
                    <p>Phone/Whatsapp</p>
                    <h3>Wuse, Abuja | Nigeria</h3>
                </div>
            </AddressWrapper>
            <AddressWrapper style={{ marginLeft: '1rem'}}>
                <Email/>
                <div>
                    <p>E-mail</p>
                    <h3>rabibabayo@gmail.com</h3>
                </div>
            </AddressWrapper>
        </InfoWrapper>
        <FormGroup>
            <FormContent>
                <FormElement>
                    <label>
                        Name
                    </label> < br />
                    <input type="text" />
                </FormElement>
                <FormElement>
                    <label>
                        E-mail
                    </label> < br />
                    <input type="Email" />
                </FormElement>
                <FormElement>
                    <label>
                        Phone
                    </label> < br />
                    <input type="number" />
                </FormElement>
                <FormElement>
                    <label>
                        Message
                    </label> < br />
                    <textarea type="Message" />
                </FormElement>
                <SubmitButtom>
                    <button>Submit
                        <box-icon color="#fff" name='right-arrow-alt'></box-icon>
                    </button>
                </SubmitButtom>
            </FormContent>
        </FormGroup>
    </FormWrapper>
  )
}

export const FormWrapper = styled.div`
    border: 1px solid transparent;
    /* height: 120vh; */
    background-image: url(./assets/pattern.png);
    color: #fff;
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;

    h1 {
        margin-top: -2rem;
        font-size: 48px;
    }
    `

export const InfoWrapper = styled.div`
    margin-left: 350px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    
`

export const AddressWrapper = styled.div`
    display: flex;
    gap: 2rem;
    
    div p {
        margin-top: -.1rem;
    }
    `

export const FormGroup = styled.div`

`

export const FormContent = styled.div`
       background-color: #fff;
       margin: 5rem 5rem;
       color: black;
       padding: 2rem;
     `

    export const SubmitButtom = styled.div`
            display: flex;
           justify-content: flex-end;
           margin-top: 5rem;
           margin-bottom: 3rem;

           button {
            display: flex;
            align-items: center;
            background-color:#232323;
            color: #fff;
            font-weight: 500;
            border: none;
            gap: 1rem;
            font-size: 16px;
            padding: .6rem;
            border-radius: 5px;
        }
    `

export const FormElement = styled.div`
    margin-top: 5rem;
    /* margin-bottom: 5rem; */

    label{
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
`
