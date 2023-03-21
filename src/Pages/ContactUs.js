import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import "../Components/Contactus/ContactUs.css";
import icon1 from "../Components/Contactus/Assets/icon1.png";
import icon2 from "../Components/Contactus/Assets/icon2.png";
import email from "../Components/Contactus/Assets/email.png";
import phone from "../Components/Contactus/Assets/phone.png";
import location from "../Components/Contactus/Assets/location.png";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";

function ContactUs() {
  return (
    <div className="ContactUs">
      <h3 className="OctaHeaderlight centered flex-column">
        Contact Us
        <p>Contact Us</p>
      </h3>

      <div className="Contactbannertext centered">
        <p className="container m-0">Feel Free to Contact Us</p>
      </div>

      <div className="contact-us-map">
        <Grid
          container
          md={12}
          className="container d-flex justify-content-between "
        >
          <Grid
            item
            md={7}
            xs={12}
            className="ContactGrid centered flex-column "
          >
            <div className="gridhead">
              <h3>CONTACT US</h3>
              <p>What Do You Want</p>
            </div>

            <div className="offerings">
              <p>
                <label className="contact-form-checkbox-lbl">
                  {/* <img src={icon1} alt="Web Design" /> */}
                  <input className="chkboxes" type="checkbox" />
                  Web Design
                </label>
              </p>
              <p>
                <label className="contact-form-checkbox-lbl">
                  {/* <img src={icon1} alt="Web Design" /> */}
                  <input className="chkboxes" type="checkbox" />
                  Web Development
                </label>
              </p>
              <p>
                <label className="contact-form-checkbox-lbl">
                  {/* <img src={icon1} alt="Web Design" /> */}
                  <input className="chkboxes" type="checkbox" />
                  Application Design
                </label>
              </p>
              <p>
                <label className="contact-form-checkbox-lbl">
                  {/* <img src={icon1} alt="Web Design" /> */}
                  <input className="chkboxes" type="checkbox" />
                  Logo Design
                </label>
              </p>
            </div>

            <div className="contactAddress">
              <div>
                <img src={location} alt="email" />
                <p>
                  Address Office#1, 2nd floor, Pak Land City centre, Near
                  D.Watson, I-8 Markaz.
                </p>
              </div>
              <div>
                <img src={email} alt="phone" />
                <a href="mailto:hi@octaloop.io" className="mailing">
                  hi@octaloop.io
                </a>
              </div>
              <div>
                <img src={phone} alt="location" />
                <p style={{ whiteSpace: "nowrap" }}>Office: +92 315 0080888</p>
              </div>
            </div>

            <div className="contactFollow">
              <Button>Follow</Button>
              <div>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </Grid>

          <Grid
            item
            md={4.5}
            xs={12}
            className="ContactGrid centered flex-column"
          >
            <div className="contactForm">
              <p>FEEDBACK FORM</p>
              <TextField fullWidth label="Name" variant="standard" />
              <TextField fullWidth label="Email" variant="standard" />
              <TextField fullWidth label="Phone" variant="standard" />
              <TextField
                fullWidth
                id="textarea"
                label="Message"
                variant="standard"
                multiline
                maxRows={10}
                minRows={7}
              />
              <Button>Send Message</Button>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="divider"></div>
    </div>
  );
}

export default ContactUs;
