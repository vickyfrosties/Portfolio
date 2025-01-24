import "../App.css";
import "../variables.css";
import { Element } from "react-scroll";
import Footer from "../Containers/Footer";

const Contact = () => {
  return (
    <>
      <Element name="Contact">
        <h2>Let's Connect</h2>
        <section className="container-bip">

          <section className="socials-section">

            <div className="socials">
              <a href="https://www.linkedin.com/in/sounia-mhalla-dit-aounallah/" target="blank">
                <img src="/Icons/linkedin.svg" alt="www.linkedin.com/in/sounia-mhalla-dit-aounallah" />
              </a>
              <p>LinkedIn</p>
            </div>

            <div className="socials">
              <a href="https://github.com/vickyfrosties" target="blank">
                <img src="/Icons/github.svg" alt="https://github.com/vickyfrosties" />
              </a>
              <p>GitHub</p>
            </div>
          </section>


          <form className="form" action="">
            <label htmlFor="">
              Name :
              <input type="text" placeholder="Name" />
            </label>
            <label htmlFor="">
              Last name :
              <input type="text" placeholder="Last name" />
            </label>
            <label htmlFor="">
              Email :
              <input type="email" placeholder="Email" />
            </label>
          </form>
        </section>
      </Element>
      <Footer />
    </>
  );
};

export default Contact;