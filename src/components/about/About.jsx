import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import image from "../../../src/components/images/about.jpeg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back
          name="Sobre nós"
          title="Sobre nós - Quem nós somos?"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Bem vindo"
              subtitle="Venha ver sobre a nossa empresa"
            />

            <p>
              Bem-vindo ao nosso site de cozinhas! Somos uma empresa
              especializada em projetar e instalar cozinhas personalizadas para
              nossos clientes.
            </p>
            <p>
              Com mais de 10 anos de experiência no setor, entendemos que a
              cozinha é o coração da casa e por isso oferecemos um serviço
              completo, desde o projeto até a instalação final. Trabalhamos com
              os melhores fornecedores e fabricantes de cozinhas para garantir
              que nossos clientes tenham acesso às últimas tendências e
              tecnologias disponíveis no mercado.
            </p>
          </div>
          <div className="right row">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
