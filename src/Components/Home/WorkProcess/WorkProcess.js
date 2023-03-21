import React from "react";
import "./WorkProcess.css";

import Grid from "@mui/material/Grid";

function WorkProcess() {
  return (
    <div className=" Workmain">
      <h3 className="OctaHeader centered flex-column">
        Work Process
        <p>Work Process</p>
      </h3>

      <div className="container ">
        <Grid container className="splitWorkContent">
          <Grid item md={7.5} sm={12} className="  WorkCardsContainer">
            <Grid container xs={12}>
              {WorkData.map((data) => (
                <Grid item md={6} xs={12} className="">
                  <div className="WorkCard">
                    <div className="WorkCardNumber">{data.id}</div>
                    <div>
                      <div className="WorkCardTitle"> {data.title}</div>
                      <div className="WorkCardContent"> {data.content}</div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={4.5} md={12} sm={12} className="  centered">
            <div className="WorkImg"></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WorkProcess;

const WorkData = [
  {
    id: "1",
    title: "Search",
    content:
      "After understanding the client’s requirements, we do a market search to generate a solution that provides them an edge over their competitors.",
  },

  {
    id: "2",
    title: "Idea",
    content:
      "After search, we discuss our unique project idea with the client to make sure its key features align with their business goals.",
  },

  {
    id: "3",
    title: "Design",
    content:
      "We design products that are visually appealing, easy to use and accessible to a wide range of devices.",
  },

  {
    id: "4",
    title: "Development",
    content:
      "Highly skilled in all modern back-end and front-end technologies, our developers work hard to deliver the end product with efficiency and creativity.",
  },
];
