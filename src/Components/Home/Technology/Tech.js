import React, { useState } from "react";
import "./Tech.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./Assets/1.png";
import img2 from "./Assets/2.png";
import img3 from "./Assets/3.png";
import img4 from "./Assets/4.png";
import img5 from "./Assets/5.png";
import img6 from "./Assets/6.png";
import imgweb1 from "./Assets/web/1.png";
import imgweb2 from "./Assets/web/2.png";
import imgweb3 from "./Assets/web/3.png";
import imgweb4 from "./Assets/web/4.png";
import imgweb5 from "./Assets/web/5.png";

import imgdes1 from "./Assets/design/1.png";
import imgdes2 from "./Assets/design/2.png";
import imgdes3 from "./Assets/design/3.png";
import imgdes4 from "./Assets/design/4.png";
import imgdes5 from "./Assets/design/5.png";
import imgdes6 from "./Assets/design/6.png";
import imgdes7 from "./Assets/design/7.png";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

function Tech() {
  return (
    <div className="TechMain">
      <div className="container">
        <h3 className="OctaHeader centered flex-column">
          TECHNOLOGIES
          <p>TECHNOLOGIES</p>
        </h3>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-none d-md-block">
                <div className="tit-wraoop">
                  <h5>Mobile Development</h5>
                </div>
                {/* <p>...</p> */}
              </div>
              <div className="d-flex tectimgs">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
              </div>
            </div>

            <div className="carousel-item">
              <div className=" d-none d-md-block">
                <div className="tit-wraoop">
                  <h5>Web Development</h5>
                </div>
              </div>
              <div className="d-flex tectimgs">
                <img src={imgweb1} alt="" />
                <img src={imgweb2} alt="" />
                <img src={imgweb3} alt="" />
                <img src={imgweb4} alt="" />
                <img src={imgweb5} alt="" />
              </div>
            </div>

            <div className="carousel-item w-100">
              <div className=" d-none d-md-block">
                <div className="tit-wraoop">
                  <h5>Web Design</h5>
                </div>
              </div>
              <div className="d-flex tectimgs">
                <img src={imgdes1} alt="" />
                <img src={imgdes2} alt="" />
                <img src={imgdes3} alt="" />
                <img src={imgdes4} alt="" />
                <img src={imgdes5} alt="" />
                <img src={imgdes6} alt="" />
                <img src={imgdes7} alt="" />
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tech;
