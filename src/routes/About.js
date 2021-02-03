import React from "react";

function About() {
  return (
    <div className="container center">
      <div className="img-box">
        <img
          className="img-profile"
          src={`${process.env.PUBLIC_URL}/redpanda.jpg`}
          alt="redpanda"
        ></img>
      </div>
      <div className="ms-box">
        <span> Redpanda is not RED </span>
      </div>
    </div>
  );
}

export default About;
