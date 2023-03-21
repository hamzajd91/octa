import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Home/HeroSection/Hero";
import Services from "../Components/Home/Services/Services";
import WorkProcess from "../Components/Home/WorkProcess/WorkProcess";
import Projects from "../Components/Home/Projects/Projects";
import Tech from "../Components/Home/Technology/Tech";
import Team from "../Components/Home/Team/Team";
import Clients from "../Components/Home/Clients/Clients";
import Carousel_Cus from "../Reuseable Components/Carousel/Carousel_Cus";
import LatestBlogs from "../Components/Home/LatestBlogs/LatestBlogs";
import ClientTestimonials from "../Components/Testimonials/testimonials";

function Home() {


  return (
    <div className="">
      <Hero />
      <Services />
      <WorkProcess />
      <Projects />
      <Tech />
      {/* <Team /> */}
      <Clients />

      {/* <Carousel_Cus /> */}
      <ClientTestimonials />
      <LatestBlogs />
    </div>
  );
}

export default Home;
