import React from "react";
import Image2 from "./../images/spa2.png";

const Aboutus = () => {
  return (
    <React.Fragment>
      <div className="layout">
        <h2>Apie mus</h2>
        <img src={Image2} alt="" className="aboutus-img" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sit sequi facere recusandae error non voluptatem repellendus obcaecati
          sint, eos blanditiis est, debitis odio amet, nostrum dolor. Quasi,
          fugit nam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis sit sequi facere recusandae error non voluptatem
          repellendus obcaecati sint, eos blanditiis est, debitis odio amet,
          nostrum dolor. Quasi, fugit nam.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Aboutus;
