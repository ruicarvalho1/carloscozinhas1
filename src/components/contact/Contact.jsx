import React from "react";
import img from "../images/cozinha-contact.jpeg";
import Back from "../common/Back";
import "./contact.css";
import Team from "../contact/Team";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <Back
          name="Contacte-nos"
          title="Obtenha a ajuda necessária aqui!"
          cover={img}
        />
      </section>
      <Team />
    </>
  );
};

export default Contact;
