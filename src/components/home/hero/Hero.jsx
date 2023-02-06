import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import Carousel from "react-bootstrap/Carousel";
import image from "../hero/cozinha.jpg";
import image2 from "../hero/cozinha2.jpg";
import image3 from "../hero/cozinha3.jpg";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Bem-vindo a CarlosCozinhas!"
            subtitle="Aqui pode encontrar vários projetos de cozinhas e roupeiros."
          />
        </div>
        <div
          class="carousel-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Carousel
            style={{ width: "100%", maxWidth: "1000px", height: "800px" }}
          >
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={image} alt="First slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
