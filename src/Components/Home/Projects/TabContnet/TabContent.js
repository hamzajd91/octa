import React from "react";
import "./TabContnet.css";
import Grid from "@mui/material/Grid";
import play from "./Assets/play.png";
import box from "./Assets/box.png";
import main from "./Assets/main.png";

function TabContent() {
  return (
    <div className="container containerWide">
      <Grid container md={12} className="projectSplit align-items-center">
        <Grid item md={6} sm={12} className="ProjVideoContainer">
          <div
            className="ProjectVideo centered"
            style={{
              // backgroundImage: `url(${box})`,
              background: `linear-gradient(360deg, #101010 0%, rgba(0, 0, 0, 0) 53.33%), url(${main})`,
            }}
          >
            <img src={play} alt="" />
          </div>
        </Grid>

        <Grid item md={6} sm={12} className="ProjectDetails">
          <p>SUPER VET:</p>
          <p>
            Super Vet is a vet-themed game where the vets with extraordinary
            superpowers rescue innocent animals in times of trouble and need.
            This GameFi is built on BSC technology following a native token
            $SVET of BEP-20 standard. There are super vet characters with their
            respective rescuing tools and equipment and each of them has
            different super abilities to help innocent souls. In their missions,
            they rescue the animals in the Super Vet World.
            <br />
            This P2E game has an RPG gameplay that requires super vet characters
            and rescue gadgets as an NFT key to unlocking the rescue missions by
            playing and for that, you need to buy them from the NFT marketplace.
            The Super Vet world comprises 4 tiers, T1, T2, T3, and T4. Though T4
            is the Metaverse, named as Super Verse. You can buy these NFTs with
            the $SVET tokens from the NFT marketplace. Our team of designers,
            developers and creatives work collaboratively to deliver this
            masterpiece piece with its unique features and design.
          </p>

          <div className="projectImageSection">
            <div
              className="Projimages"
              style={{ backgroundImage: `url(${box})` }}
            >
              {" "}
            </div>
            <div
              className="Projimages"
              style={{ backgroundImage: `url(${box})` }}
            >
              {" "}
            </div>
            <div
              className="Projimages"
              style={{ backgroundImage: `url(${box})` }}
            >
              {" "}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TabContent;
