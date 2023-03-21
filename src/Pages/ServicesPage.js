import React from "react";
import AllServices from "../Components/ServicesPage/AllServices";
import ServicesHeader from "../Components/ServicesPage/ServicesHeader";
import Goals from "../Components/ServicesPage/Assets/ourgoals.png";
import ServicesPricing from "../Components/ServicesPage/ServicesPricing";
import OurWork from "../Components/ServicesPage/OurWork";
import ServicesCarousel from "../Components/ServicesPage/ServicesCarousel";
import { Button } from "@mui/material";

function ServicesPage() {
  return (
    <div>
      <ServicesHeader />
      <AllServices />
      <img src={Goals} alt="goals" className="w-100" />
      <ServicesPricing />
      <ServicesCarousel />
      <OurWork />
      <div className="centered">
        <Button className="OurWorkBTN mx-auto">Our Work</Button>
      </div>
    </div>
  );
}

export default ServicesPage;
