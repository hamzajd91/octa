import { Typography } from "@mui/material";
import React from "react";
import Start from "./start.png";
import End from "./end.png";
import "../AboutUs.css";

function AboutUsHeader() {
  return (
    <div className="aboutHeader">
      <h1 className="AboutHeader">
        <span>Who</span>
        <span>Are</span>
        <span>We</span>
        <span>?</span>
      </h1>

      <Typography
        className="AboutusText"
        gutterBottom
        variant="p"
        component="p"
      >
        <div className="Quotes" style={{ float: "left" }}>
          <img className="invert" src={Start} alt="" />
          <img className="invert" src={Start} alt="" />
        </div>
        Octaloop is a multi-faceted IT company providing block-chain based
        solutions for companies and businesses. Our vibrant team of artists,
        designers, and developers provide IT services ranging from web and
        software development to cloud computing and marketing strategies. Our
        expertise lies in our end-to-end Nft game design, prototyping, and
        development services.
        <div className="Quotes" style={{ float: "right" }}>
          <img className="invert" src={End} alt="" />
          <img className="invert" src={End} alt="" />
        </div>
      </Typography>
    </div>
  );
}

export default AboutUsHeader;
