import React from "react";
import Heading from "../common/Heading";
import { team } from "../data/Data";
import { team2 } from "../data/Data";
import "./team.css";
import image from "../images/carlos.png";
import image2 from "../images/crespo.png";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Também temos a nossa equipa"
            subtitle="Contacte-nos quando precisar de apoio na construção da sua cozinha ou roupeiros "
          />

          <div className="grid-container">
            <div className="content mtop grid2">
              {team.map((val, index) => (
                <div className="box" key={index}>
                  <div className="details">
                    <div className="img">
                      <img src={image} alt="" />
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                    <div>
                      <ul>{val.button}</ul>
                      <pre></pre>
                      <ul>{val.phone}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content mtop grid2">
              {team2.map((val, index) => (
                <div className="box" key={index}>
                  <div className="details">
                    <div className="img">
                      <img src={image2} alt="" />
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                    <div>
                      <ul>{val.button}</ul>
                      <pre></pre>
                      <ul>{val.phone}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
