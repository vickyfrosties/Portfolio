import "../App.css";
import "../variables.css";
import { Element } from "react-scroll";
import Footer from "../Containers/Footer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  const onSubmit = (data) => {

    emailjs.sendForm(
      import.meta.env.EMAIL_SERVICE_ID,
      import.meta.env.EMAIL_TEMPLATE_KEY_ID,
      form.current,
      import.meta.env.EMAIL_PUBLIC_KEY_ID,
    )
      .then(
        () => {

          setIsError(false);
          setSuccessMessage("Your message has been sent with success !");

          setInterval(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          setIsError(true);
          setSuccessMessage("Something went wrong. Please try again.");
        }
      )
      ;

    // setSuccessMessage("Your message has been sent with success !");

    // setInterval(() => {
    //   setSuccessMessage("");
    // }, 3000);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset, isSubmitSuccessful]);

  return (
    <>
      <Element name="Contact">
        <h2>Let's Connect</h2>
        <section className="formsocial-container">

          <section className="socials-section">
            <div className="socials">
              <img src="/Icons/linkedin.svg" alt="" />
              <p>LinkedIn</p>
              <a href="https://www.linkedin.com/in/sounia-mhalla-dit-aounallah/" target="blank">
                <img id="arrow" src="/Icons/arrow-link.svg" alt="https://www.linkedin.com/in/sounia-mhalla-dit-aounallah/" />
              </a>
            </div>

            <div className="socials">
              <img src="/Icons/github.svg" alt="" />
              <p>GitHub</p>
              <a href="https://github.com/vickyfrosties" target="blank">
                <img id="arrow" src="/Icons/arrow-link.svg" alt="https://github.com/vickyfrosties" />
              </a>
            </div>
          </section>

          <form ref={form} className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-div">
              <label htmlFor="name">
                Name
              </label>
              <input id="name"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Name must only contains letters."
                  },
                })}
                type="text" placeholder="Name" />
              {errors.name && (
                <p className="errors">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastname">
                Last name
              </label>
              <input id="lastname" {...register("lastname",
                {
                  required: "Lastname is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Name must only contains letters."
                  },
                })}
                type="text" placeholder="Last name" />

              {errors.lastname && (
                <p className="errors">{errors.lastname.message} </p>
              )}
            </div>

            <div>
              <label htmlFor="email">
                Email
              </label>
              <input id="email" {...register("email",
                {
                  required: "Email address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email address must only contains those symbols . _ % + -."
                  },
                })} type="email" placeholder="Email" />
              {errors.email && (
                <p className="errors">{errors.email.message} </p>
              )}
            </div>

            <div>
              <label htmlFor="message">
                Message
              </label>
              <textarea {...register("message",
                {
                  required: "Message is required",
                }
              )} name="message" id="message" placeholder="Feel free to reach out" maxLength={500} />
            </div>

            <input type="submit" id="submit" value="Send" />
            {successMessage && (
              <p className={isError ? "errors" : "success"}>
                {successMessage}
              </p>
            )}
          </form>
        </section>
      </Element >
      <Footer />
    </>
  );
};

export default Contact;