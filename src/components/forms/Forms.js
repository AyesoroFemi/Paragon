import { Email, DarkEmail } from "../icons/Email";
import { DarkLocation, Location } from "../icons/Location";
import { Phone, DarkPhone } from "../icons/Phone";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../../context/useTheme";

import {
  FormWrapper,
  InfoWrapper,
  AddressWrapper,
  FormGroup,
  FormContent,
  FormElement,
  SubmitButtom,
} from "./Forms.styles";

export const Forms = () => {
  const { mode } = useTheme();
  return (
    <FormWrapper mode={mode}>
      <InfoWrapper>
        <div className={`about ${mode}`}>
          <h1>Info</h1>
        </div>
        <AddressWrapper>
        { mode === "dark" ? <Location />: <DarkLocation />}
          <div className={`about ${mode}`}>
            <p>Address</p>
            <h3>Wuse, Abuja | Nigeria</h3>
          </div>
        </AddressWrapper>
        <AddressWrapper>
        { mode === "dark" ? <Phone />:  <DarkPhone />}
          <div className={`about ${mode}`}>
            <p>Phone/Whatsapp</p>
            <h3>Wuse, Abuja | Nigeria</h3>
          </div>
        </AddressWrapper>
        <AddressWrapper style={{ marginLeft: "1rem" }}>
        { mode === "dark" ?  <Email /> :   <DarkEmail />}
          <div className={`about ${mode}`}>
            <p>E-mail</p>
            <h3>rabibabayo@gmail.com</h3>
          </div>
        </AddressWrapper>
      </InfoWrapper>
      <FormGroup>
        <div className={`about ${mode}`}>
          <FormContent>
            <FormElement>
              <label>Name</label> <br />
              <input type="text" />
            </FormElement>
            <FormElement>
              <label>E-mail</label> <br />
              <input type="Email" />
            </FormElement>
            <FormElement>
              <label>Phone</label> <br />
              <input type="number" />
            </FormElement>
            <FormElement>
              <label>Message</label> <br />
              <textarea type="Message" />
            </FormElement>
            <SubmitButtom mode={mode}>
              <button>
                Submit
                <BsArrowRight color="" size={20} />
              </button>
            </SubmitButtom>
          </FormContent>
        </div>
      </FormGroup>
    </FormWrapper>
  );
};
