import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Careers from "./Pages/Careers";
import BlogPage from "./Pages/BlogPage";
import ServicesPage from "./Pages/ServicesPage";
import Navbar from "./Components/Navbar/Navbar";
import RecentProjectsPage from "./Pages/RecentProjectsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactUs from "./Pages/ContactUs";
import JoinusPage from "./Pages/JoinusPage";
import LifeAtOctaloop from "./Pages/LifeAtOctaloop";
import Footer from "./Components/FooterSection/Footer";
import DesignPage from "./Pages/DesignPage";
// import Test from "./Components/";

export default function Router() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Careers" element={<Careers />}></Route>
          <Route path="/Blogs" element={<BlogPage />}></Route>
          <Route path="/Services" element={<ServicesPage />}></Route>
          <Route
            path="/Recebt-Projects"
            element={<RecentProjectsPage />}
          ></Route>
          <Route path="/Projects" element={<ProjectsPage />}></Route>
          <Route path="/Contact-Us" element={<ContactUs />}></Route>
          <Route path="/Join-Us" element={<JoinusPage />}></Route>
          <Route path="/LifeAtOctaloop" element={<LifeAtOctaloop />}></Route>
          <Route path="/Design" element={<DesignPage />}></Route>
          {/* <Route path="/Test" element={<Test />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
