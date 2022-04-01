import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navbar/NavBar"
import { Forms } from "../Home/components/Forms";

export const Contact = () => {
  return (
      <div>
          <NavBar />
          <div style={{marginTop: '4rem',marginBottom: '6rem'}}>
            <Forms/>
          </div>
          <Footer/>
      </div>
  )
};
