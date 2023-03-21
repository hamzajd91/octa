import React from "react";
import "../Components/ProjectsPage/Projectsmainpage.css";
import ProjectPageHeader from "../Components/ProjectsPage/ProjectPageHeader";
import ProjectGoals from "../Components/ProjectsPage/ProjectGoals";
import ProjOverview from "../Components/ProjectsPage/ProjOverview";
import BusinessAnalysis from "../Components/ProjectsPage/BusinessAnalysis";
import Persona from "../Components/ProjectsPage/Persona";
import Userflow from "../Components/ProjectsPage/Userflow";
import Design from "../Components/ProjectsPage/Design";
import ProjFeatures from "../Components/ProjectsPage/ProjFeatures";

function ProjectsPage() {
  return (
    <div>
      <ProjectPageHeader />
      <div className="PtojTitle container">
        <p>D-Streak</p>
        <p>Let’s Drive And Earn</p>
        <h3>D-Streak - Mobile Application - Website </h3>
      </div>
      <ProjectGoals />
      <ProjOverview />
      <BusinessAnalysis />
      <Persona />
      <Userflow />
      <Design />
      <ProjFeatures />
    </div>
  );
}

export default ProjectsPage;
