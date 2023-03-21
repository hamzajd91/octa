import React from "react";
import "../Components/OurWork/ProjectsPage.css";
import ProjectsHeader from "../Components/OurWork/ProjectsHeader";
import ProjectDisplay1 from "../Components/OurWork/ProjectDisplay1";
import ProjectDisplay2 from "../Components/OurWork/ProjectDisplay2";
function ProjectsPage() {
  return (
    <div>
      <ProjectsHeader />
      <div className="RecentprojectsDiv centered">
        <p>RECENT PROJECTS</p>
        <p>
          ver the years our company has been helping to solve even the most
          complex and unique tasks for clients from all over the world. Our
          experienced specialists can provide quality and effective solutions
          for every project we have. We have all resources to create a
          qualitative product that will make your business more efficient.
        </p>
      </div>
      <ProjectDisplay1 />
      <ProjectDisplay2 />
    </div>
  );
}

export default ProjectsPage;
