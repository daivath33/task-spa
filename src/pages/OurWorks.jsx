import React from "react";
import Service1 from "./../images/service1.png";
import Service2 from "./../images/service2.png";
import Service3 from "./../images/service3.png";
import Service4 from "./../images/service4.png";
import Service5 from "./../images/service5.png";
import Service6 from "./../images/service6.png";
import Service7 from "./../images/service7.png";
import Service8 from "./../images/service8.png";

const OurWorks = () => {
  return (
    <React.Fragment>
      <div className="layout">
        <h2> SPA centre suteiktos paslaugos</h2>
        <div className="photos">
          <img src={Service1} alt="" />
          <img src={Service2} alt="" />
          <img src={Service3} alt="" />
          <img src={Service4} alt="" />
          <img src={Service5} alt="" />
          <img src={Service6} alt="" />
          <img src={Service7} alt="" />
          <img src={Service8} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurWorks;
