import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Logo from "../../Images/OctaloopLOGO.png";
import "./Navbar.css";
function Navbar() {
  const NavItems = [
    "",
    "AboutUs",
    "Services",
    "Projects",
    "Careers",
    "LifeAtOctaloop",
  ];

  useEffect(() => {
    // console.log(window.location.pathname);
    var temp = window.location.pathname.split("/");
    console.log(temp);
    let res = NavItems.find((e) => e == temp[1]);
    console.log(res);

    if (res != undefined) {
      if (temp[1] == "" || temp[1] == undefined) {
        document.getElementById("home").classList.add("active");
      } else {
        document.getElementById(temp[1]).classList.add("active");
      }
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
      <a className="navbar-brand logoLink" href="/">
        <img className="logo" src={Logo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse align-items-center"
        id="navbarSupportedContent"
      >
        <ul
          className="navbar-nav ml-auto align-items-center"
          style={{ gap: "20px" }}
        >
          <li id="home" className="nav-item">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>

          <li id="AboutUs" className="nav-item">
            <a className="nav-link" href="/AboutUs">
              About Us
            </a>
            <ul className="dropdown-menu-custom">
              <li id="LifeAtOctaloop" className="nav-item">
                <a className="nav-link custom-nav" href="/LifeAtOctaloop">
                  Life At Octaloop
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="">
              Team
            </a>
          </li>
          <li id="Services" className="nav-item">
            <a className="nav-link" href="/Services">
              Services
            </a>
          </li>
          <li id="Projects" className="nav-item">
            <a className="nav-link" href="/Projects">
              Projects
            </a>
          </li>
          <li id="Careers" className="nav-item">
            <a className="nav-link" href="/Careers">
              Career
            </a>
          </li>

          <li id="Contact-Us" className="d-flex align-items-center">
            <a href="/Contact-Us">
              <Button variant="outlined" className="NavButton contact-us">
                Contact Us
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
