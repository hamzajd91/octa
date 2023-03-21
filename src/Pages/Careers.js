import React from "react";
import CareersHeader from "../Components/Careers/CareersHeader";
import JoinUs from "../Components/Careers/JoinUs";
import WhyOctaloop from "../Components/Careers/WhyOctaloop";
import WorkAtOctaloop from "../Components/Careers/WorkAtOctaloop";
import Start from "../Images/start.png";
import End from "../Images/end.png";
import JoinOcta_career from "../Components/Careers/JoinOcta_career";

import "../Components/Careers/Careers.css";
import AddressSection from "../Components/Careers/AddressSection";
import OctaDivider from "../Reuseable Components/OctaDivider";
function Careers() {
  return (
    <div>
      <CareersHeader />
      <WhyOctaloop />
      <WorkAtOctaloop />
      <JoinUs />
      <OctaDivider />
      <AddressSection />
      <div
        className="centered"
        style={{
          height: "350px",
          background: "var(--baselight)",
          fontFamily: "var(--gothic)",
          fontWeight: "400",
          fontSize: "26.5362px",
          lineHeight: "33px",
          gap: "5px",
        }}
      >
        <div className="Quotes mb-3" style={{ float: "left" }}>
          <img src={Start} alt="" />
          <img src={Start} alt="" />
        </div>
        The best preparation for tomorrow is doing your best today.
        <div className="Quotes mt-3" style={{ float: "right" }}>
          <img src={End} alt="" />
          <img src={End} alt="" />
        </div>
      </div>
      <JoinOcta_career />
    </div>
  );
}

export default Careers;
