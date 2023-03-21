import React from "react";
import "./Clients.css";
import img1 from "./Assets/1.png";
import img2 from "./Assets/2.png";
import img3 from "./Assets/3.png";
import img4 from "./Assets/4.png";
import img5 from "./Assets/5.png";

function Clients() {
  return (
    <div className="ClientMain">
      <div className="container">
        <h3 className="OctaHeader centered flex-column">
          Our Clients
          <p>Our Clients</p>
        </h3>
        <marquee behavior="" direction="">
          <div className="d-flex Cliendsdiv">
            <a href="https://www.deflyball.com/" target="_blank">
              <img src={img1} alt="" />
            </a>

            <a href="https://www.dstreak.io/" target="_blank">
              <img src={img2} alt="" />
            </a>

            <a href="https://fmcdigital.io/" target="_blank">
              <img src={img3} alt="" />
            </a>

            <a href="https://lilfrens.xyz" target="_blank">
              <img src={img4} alt="" />
            </a>
            <a href="https://supervet.io/" target="_blank">
              <img src={img5} alt="" />
            </a>
          </div>
        </marquee>

        {/* <div class="m-scroll">
                    <div class="m-scroll__title">
                        <div>
                            <h1>
                                <a href="https://dribbble.com/JulianoF" className=' mx-auto' > <img src={img1} alt="" /></a>
                                 <a href="https://dribbble.com/JulianoF" className=' mx-auto' > <img src={img2} alt="" /></a> 
                                 <a href="https://dribbble.com/JulianoF" className=' mx-auto' > <img src={img3} alt="" /> </a>
                            </h1>
                            <h1>
                                <a href="https://dribbble.com/JulianoF" className=' mx-auto' > <img src={img4} alt="" /></a>
                                 <a href="https://dribbble.com/JulianoF" className=' mx-auto' > <img src={img5} alt="" /></a>
                                 <a href="https://dribbble.com/JulianoF" className=' mx-auto' > <img src={img1} alt="" /> </a>
                            </h1>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default Clients;
