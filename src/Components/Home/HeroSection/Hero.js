import { Button } from "@mui/material";
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="heroMain">
      <div className="container">
        <h3 className="heroHeader">
          Multi-Faceted IT Company
          <div className="HeroServices">
            <div>Metaverse</div>
            <div>Cloud computing</div>
            <div>NFTs</div>
            <div>Artificial Intelligence</div>
          </div>
        </h3>

        <a href="/Join-Us">
          <Button className="HeroButton">Get Quotation</Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
