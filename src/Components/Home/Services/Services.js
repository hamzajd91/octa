import { Button } from "@mui/material";
import React from "react";
import image1 from "./Assets/1.png";
import image2 from "./Assets/2.png";
import image3 from "./Assets/3.png";
import image4 from "./Assets/4.png";
import "./Services.css";

function Services() {
  return (
    <div className="servicesMain">
      <div className="container">
        <h3 className="OctaHeader centered flex-column">
          Our Services
          <p>Our Services</p>
        </h3>

        <p className="servicesText">
          Spearheading the IT industry by providing result-driven products for
          entrepreneurs, startups and enterprises
        </p>

        <div className="servicesContainer">
          {servicesData.map((data) => (
            <div className="ServiceCard">
              <div className="ServiceCardLine">
                <p className="ServiceCardLineText">{data.title}</p>
              </div>

              <div className="serviceHover">
                <div className="servicesItems_div">
                  {data.items.map((experience) => (
                    <div className="ServicesItems centered">
                      {experience.ServiceName}
                    </div>
                  ))}
                </div>
              </div>
              <img src={data.image} alt={data.title} />
            </div>
          ))}
        </div>

        <Button>See More</Button>
      </div>
    </div>
  );
}

export default Services;

const servicesData = [
  {
    id: "1",
    image: image1,
    title: "Design",
    items: [
      { ServiceName: "UI/UX" },
      { ServiceName: "2D CHARACTER" },
      { ServiceName: "ENVIRONMENT" },
      { ServiceName: "SOCIAL MEDIA" },
    ],
  },
  {
    id: "2",
    image: image2,
    title: "Development",
    items: [
      { ServiceName: "WEBSITE" },
      { ServiceName: "APPLICATION" },
      { ServiceName: "CUSTOM WEBSITE" },
    ],
  },

  {
    id: "3",
    image: image3,
    title: "Web 3.0",
    items: [
      { ServiceName: "BLOCK CHAIN" },
      { ServiceName: "SMART CONTRACT" },
      { ServiceName: "WALLET CONNECT" },
      { ServiceName: "SECURITY" },
    ],
  },

  {
    id: "4",
    image: image4,
    title: "3d World",
    items: [
      { ServiceName: "ENVIRONMENT" },
      { ServiceName: "3D CHARACTER" },
      { ServiceName: "ANIMATIONS" },
      { ServiceName: "VFX" },
    ],
  },
];
