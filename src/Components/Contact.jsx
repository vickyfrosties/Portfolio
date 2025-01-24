import "../App.css";
import "../variables.css";
import { Element } from "react-scroll";
import Footer from "../Containers/Footer";
import { useForm } from "react-hook-form";

const Contact = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Element name="Contact">
        <h2>Let's Connect</h2>
        <section className="formsocial-container">

          <section className="socials-section">
            <div className="socials">
              <img src="/Icons/linkedin.svg" alt="www.linkedin.com/in/sounia-mhalla-dit-aounallah" />
              <p>LinkedIn</p>
              <a href="https://www.linkedin.com/in/sounia-mhalla-dit-aounallah/" target="blank">
                <img id="arrow" src="/Icons/arrow-link.svg" alt="" />
              </a>
            </div>

            <div className="socials">
              <img src="/Icons/github.svg" alt="https://github.com/vickyfrosties" />
              <p>GitHub</p>
              <a href="https://github.com/vickyfrosties" target="blank">
                <img id="arrow" src="/Icons/arrow-link.svg" alt="" />
              </a>
            </div>
          </section>

          <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-div">
              <label htmlFor="">
                Name
              </label>
              <input {...register("name")} type="text" placeholder="Name" />
            </div>

            <div>
              <label htmlFor="">
                Last name
              </label>
              <input {...register("lastname")} type="text" placeholder="Last name" />
            </div>

            <div>
              <label htmlFor="">
                Email
              </label>
              <input {...register("email")} type="email" placeholder="Email" />
            </div>

            <div>
              <label htmlFor="">
                Message
              </label>
              <textarea {...register("message")} name="message" id="" placeholder="Feel free to reach out" maxLength={500} />
            </div>

            <input type="submit" id="submit" />

          </form>
        </section>
      </Element >
      <Footer />
    </>
  );
};

export default Contact;