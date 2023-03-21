import { Grid } from "@mui/material";
import React from "react";
import icon1 from "./Assets/icon1.png";
import icon2 from "./Assets/icon2.png";

function ServicesPricing() {
  return (
    <div className="ServicesPricing centered flex-column">
      <h3 className="">Pricing Models</h3>

      <Grid
        container
        md={12}
        className=" container centered justify-content-between"
      >
        <Grid md={5.5} xs={12} className=" PriceGrid">
          <h3>
            <img src={icon1} />
            Project Model
          </h3>
          <p>
            OctaLoop Technologies has a vast experience in developing and
            producing strategic business solutions that align with your company
            goals. Our expertise in optimizing solutions according to client
            demands has proved our abilities again and again. We have a large
            number of skilled and experienced individuals including developers,
            designers, business analysts, project managers who will assist you
            in creating your project model. We provide you with the solutions
            that work perfectly for your business growth.
          </p>
        </Grid>

        <Grid md={5.5} xs={12} className=" PriceGrid">
          <h3>
            <img src={icon2} />
            Dedicated Team:
          </h3>
          <p>
            We have a highly skilled and well trained team of IT specialists
            that understands the clients requirement for the project perfectly.
            Our dedicated team works day and night to deliver a project that
            satisfies your business goals. OctaLoop Technologies provides the
            privilege to the client to have full control over the project
            delivery. With OctaLoop Technologies, your work goes smoothly as we
            have a clear project management, progress tracking tools and
            convenient interaction means.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServicesPricing;
