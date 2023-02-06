import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ScrollToTop from "../../../scrollToTop";
//colocar trustpilot

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Tens alguma pergunta?</h1>
              <p>Nós vamos ajudar em tudo o que precisar</p>
            </div>
            <ScrollToTop />
            <Link to="/contacto">
              <button className="btn5">Contacte-nos</button>
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="map">
            <MapContainer
              center={[41.74019, -7.46879]}
              zoom={10.5}
              scrollWheelZoom={true}
              style={{ height: "350px", width: "120%" }}
            >
              <Marker position={[41.772163578, -7.502664656]}>
                <Popup>
                  <a
                    href="https://www.google.com/maps/dir//41.8056256,-7.5189949"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clique aqui para obter as direções
                  </a>
                </Popup>
              </Marker>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div class="footer">
            <iframe
              src="https://widget.trustpilot.com/trustboxes/YOUR-BUSINESS-ID/index.html"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="100%"
              title="Trustpilot evaluation"
            />
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2023 CarlosCozinhas.</span>
      </div>
    </>
  );
};

export default Footer;
