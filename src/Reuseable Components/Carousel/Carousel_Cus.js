import React from "react";
import App from "./Sections/App";
import "./Testimonials.css";

function Carousel_Cus() {
  return (
    <div className="centered TestimonialsMain">
      <h3 className="OctaHeaderlight centered flex-column">
        TESTIMONIALS
        <p>TESTIMONIALS</p>
      </h3>

      <p className="Testimonialstext">
        We Develop Enterprise-Grade Software Solutions For Businesses.
      </p>
      <div className="container">
        <App />
      </div>
      <div class="divider home-page"></div>
    </div>
  );
}

export default Carousel_Cus;
