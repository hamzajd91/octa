import React from "react";
import AboutusDetails from "../Components/About Us/AboutusDetails";
import AboutUsHeader from "../Components/About Us/AboutUsHeader/AboutUsHeader";
import CEOSection from "../Components/About Us/CEOSection";

function AboutUs() {
  return (
    <div>
      <AboutUsHeader />
      <CEOSection />
      <AboutusDetails />
    </div>
  );
}

export default AboutUs;
