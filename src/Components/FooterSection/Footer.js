import React from "react";
// import Logo from "../FooterSection/Assets/Octaloop-3 copy 2.png";
import Logo from "../../Images/OctaloopLOGO.png";
import Twitter from "../FooterSection/Assets/Vector.png";
import Linkedin from "../FooterSection/Assets/Vector-1.png";
import Facebook from "../FooterSection/Assets/Vector-2.png";
import SEND from "../FooterSection/Assets/SEND.png";

import "../FooterSection/Footer.css";
import { Button, Grid } from "@mui/material";
function Footer() {
  return (
    <div className="footerContainer centered">
      <div className="footerInnerContainer container">
        <div className="upperSection">
          <div className="row justify-content-center align-items-center">
            <Grid container md={12} className="justify-content-between">
              <Grid className="" item md={4.0} xs={12}>
                <div className="Footerlogo">
                  <img src={Logo} />
                </div>
                <div className="footeraddress">
                  <p>
                    Address Office#1,2nd Floor , Pak Land City Center Near
                    D.Watson, I8 Markaz
                  </p>
                </div>
                <div className="row justify-content-start align-items-center px-3">
                  <div className="mr-3">
                    <img src={Twitter} />
                  </div>
                  <div className="mr-3">
                    <img src={Linkedin} />
                  </div>
                  <div className="mr-3">
                    <img src={Facebook} />
                  </div>
                </div>
              </Grid>

              <Grid className="" item>
                <h5 className="mb-5 FooterHead">Quick links</h5>
                <p className="Footertext">Home</p>
                <p className="Footertext">About</p>
                <p className="Footertext">Contact</p>
                <p className="Footertext">IT Support</p>
              </Grid>

              <Grid className="" item md={3.5} xs={12}>
                <h5 className="FooterHead">Newletters</h5>
                <p className="Footertext">
                  Subscribe To Our Newletters To get daily updates
                </p>

                <form className="Footerform" id="form" role="search">
                  <input
                    type="search"
                    id="query"
                    name=""
                    className="footerinput"
                    placeholder="Email Address "
                  />

                  <Button>
                    <img src={SEND} />
                  </Button>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <hr className="break mt-5" />
      <div className="row justify-content-center align-items-center mt-2">
        <p className="m-0 copyrightTXT">
          Copyright 2022 @ by Octaloop All Rights Reserverd
        </p>
      </div>
    </div>
  );
}

export default Footer;
