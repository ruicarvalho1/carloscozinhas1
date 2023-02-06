import React from "react";

import img2 from "../../images/principal2.jpeg";
import img3 from "../../images/principal3.jpeg";
import img4 from "../../images/principal4.jpeg";

const RecentCard = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      </div>
    </>
  );
};

export default RecentCard;
