import React from "react";
import CEO from "./Assets/CEO.png";
function CEOSection() {
  return (
    <div className="CEOSec">
      <div className="ceoText">
        <p className="ceoTextHeader">A message from our CEO</p>
        <p className="ceomessage">
          <span>
            Every passing day technological advancements yield innovative
            results for brands and companies. When I started this company, my
            aim was to recruit certified professionals who could create a
            well-rounded range of super-efficient software and mobile app
            solutions for our clients. We want to spearhead the continually
            changing world of blockchain-based services and products by
            providing market-leading solutions.
          </span>

          {/* <span>
                        Hence, we are committed to fortifying our client relations while prioritising employee
                        wellbeing and the welfare of our company.
                    </span> */}

          <span>
            Hence, we are committed to fortifying our client relations while
            prioritizing employee wellbeing. I envision a future where we can
            achieve exponential growth, broaden our horizons and maximize the
            value we provide to our community.
          </span>
        </p>
      </div>

      <div className="ceoImgSec">
        <img src={CEO} alt="" />
        <div className="mt-3">
          <div className="centered">CEO</div>
          <div className="centered">AAMIR AHMED</div>
        </div>
      </div>
    </div>
  );
}

export default CEOSection;
