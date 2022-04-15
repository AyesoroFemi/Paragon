import { useEffect } from "react";
import { Forms } from "../../components/forms/Forms";

export const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div>
          <div style={{marginTop: '4rem',marginBottom: '6rem'}}>
            <Forms/>
          </div>
      </div>
  )
};
