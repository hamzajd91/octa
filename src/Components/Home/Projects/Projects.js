import React from "react";
import "./Projects.css";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabContent from "./TabContnet/TabContent";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Nav } from "react-bootstrap";

// ---------------------   tabs ---------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=" ProjectsMain">
      <h3 className="OctaHeaderlight centered flex-column">
        Projects
        <p>Projects</p>
      </h3>

      <div className="container">
        {/* <div sx={{ width: "100%" }} className="ProjectTabsContainer"> */}
        <div className="ProjectTabsContainer">
          <div className="forborder-top"></div>
          <div className="tabs-wraop">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
              scrollable
            >
              <Tab eventKey="home" title="Gaming">
                <TabContent />
              </Tab>
              <Tab eventKey="profile" title="nft’s">
                <TabContent />
              </Tab>
              <Tab eventKey="contact" title="website">
                <TabContent />
              </Tab>
            </Tabs>
          </div>

          {/* <Box
            sx={{ borderBottom: 1, borderColor: "divider", overflow: "hidden" }}
          >
            <div className="tabs-wrapper">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                <Tab sx={{ color: "silver" }} label="All" {...a11yProps(0)} />
                <Tab
                  sx={{ color: "silver" }}
                  label="Gaming"
                  {...a11yProps(1)}
                />
                <Tab sx={{ color: "silver" }} label="NFTs" {...a11yProps(2)} />
                <Tab
                  sx={{ color: "silver" }}
                  label="Websites"
                  {...a11yProps(3)}
                />
                <Tab
                  sx={{ color: "silver" }}
                  label="Applications"
                  {...a11yProps(4)}
                />
              </Tabs>
            </div>
          </Box> */}
          {/* <TabPanel className="w-100" value={value} index={0}>
            <TabContent />
          </TabPanel>
          <TabPanel className="w-100" value={value} index={1}>
            <TabContent />
          </TabPanel>
          <TabPanel className="w-100" value={value} index={2}>
            <TabContent />
          </TabPanel>
          <TabPanel className="w-100" value={value} index={3}>
            <TabContent />
          </TabPanel>
          <TabPanel className="w-100" value={value} index={4}>
            <TabContent />
          </TabPanel> */}
        </div>
      </div>

      <Grid container className="">
        <Grid item md={7} sm={12} className="WorkCardsContainer"></Grid>
        <Grid item md={5} sm={12} className=""></Grid>
      </Grid>
    </div>
  );
}

export default Projects;
