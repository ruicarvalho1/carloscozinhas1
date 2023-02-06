import React from "react";
import Back from "../common/Back";
import img1 from "../images/roupeiro1.jpeg";
import img2 from "../images/roupeiro2.jpeg";
import img3 from "../images/roupeiro3.jpeg";
import img4 from "../images/roupeiro4.jpeg";
import img5 from "../images/roupeiro5.jpeg";
import img6 from "../images/roupeiro6.jpeg";
import img7 from "../images/roupeiro7.jpeg";
import img8 from "../images/roupeiro8.jpeg";
import img9 from "../images/roupeiro9.jpeg";
import img11 from "../images/roupeiro11.jpeg";
import img12 from "../images/roupeiro12.jpeg";
import img13 from "../images/roupeiro13.jpeg";
import img15 from "../images/roupeiro15.jpeg";
import "../home/recent/recent.css";
import img from "../images/about.jpg";

const Roupeiros = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back
          name="Roupeiros"
          title="Roupeiros-Os nossos roupeiros"
          cover={img}
        />
        <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="content grid2 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img1} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img
                    alt=""
                    src={img2}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img3} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img4} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img6} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img7} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img8} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img13} />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="content grid3 mtop">
              <div className="box shadow">
                <div className="img">
                  <img alt="" src={img11} />
                </div>
                <div className="text"></div>
              </div>
            </div>
          </div>
          <div className="content grid3 mtop">
            <div className="box shadow">
              <div className="img">
                <img alt="" src={img15} />
              </div>
              <div className="text"></div>
            </div>
          </div>
          <div className="content grid3 mtop">
            <div className="box shadow">
              <div className="img">
                <img alt="" src={img5} />
              </div>
              <div className="text"></div>
            </div>
          </div>
          <div className="content grid3 mtop">
            <div className="box shadow">
              <div className="img">
                <img alt="" src={img9} />
              </div>
              <div className="text"></div>
            </div>
          </div>
          <div className="content grid3 mtop">
            <div className="box shadow">
              <div className="img">
                <img alt="" src={img12} />
              </div>
              <div className="text"></div>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default Roupeiros;
