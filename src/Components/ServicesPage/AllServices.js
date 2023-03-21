import React from "react";
import "./Services.css";

import image1 from "./Assets/1.png";
import image2 from "./Assets/2.png";
import image3 from "./Assets/3.png";
import image4 from "./Assets/4.png";
import image5 from "./Assets/5.png";
import image6 from "./Assets/6.png";
import image7 from "./Assets/7.png";
import image8 from "./Assets/8.png";

function AllServices() {
  return (
    <div className="AllServices centered">
      <div className="allservices_Header centered">
        <p>Scalable Digital Facilities</p>
        <p>
          We aim to understand the demands of our clients and offer the services
          that help you achieve a competitive edge and breathe new life into
          your business strategies. By working on a plethora of projects and
          partnering with clients all over the world, we have acquired
          substantial resources and the right skills to help your projects
          succeed.
        </p>
      </div>

      <div>
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
      </div>
    </div>
  );
}

export default AllServices;

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

  {
    id: "5",
    image: image5,
    title: "GAME DEV",
    items: [
      { ServiceName: "MOBILE" },
      { ServiceName: "WEB GL" },
      { ServiceName: "DESKTOP" },
    ],
  },

  {
    id: "6",
    image: image6,
    title: "MARKETING",
    items: [{ ServiceName: "DESIGN CONTENT" }, { ServiceName: "CAMPAIGNS" }],
  },

  {
    id: "7",
    image: image7,
    title: "Q&A",
    items: [
      { ServiceName: "PERFORMANCE TESTING" },
      { ServiceName: "MOBILE & DEVICE TEST" },
      { ServiceName: "SECURITY TESTING" },
      { ServiceName: "SYSTEM TESTING" },
    ],
  },

  {
    id: "8",
    image: image8,
    title: "CLOUD COM",
    items: [
      { ServiceName: "SAAS" },
      { ServiceName: "PAAS" },
      { ServiceName: "IAAS" },
    ],
  },
];
