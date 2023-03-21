import React from "react";
import "../Components/LifeAtOcta/LifeAtOcta.css";
import LifeAtOcta_Header from "../Components/LifeAtOcta/LifeAtOcta_Header";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import LifeAtOcta_Featured from "../Components/LifeAtOcta/Sections/LifeAtOcta_Featured";
import LifeAtOcta_allEvents from "../Components/LifeAtOcta/Sections/LifeAtOcta_allEvents";
import DropUsALine from "../Components/BlogPage/DropUsALine";
import Footer from "../Components/FooterSection/Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className="">
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

function LifeAtOctaloop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="LifeAtOcta">
      <LifeAtOcta_Header />
      {/* -----------  tabs --------------- */}

      <div className="Lifeatocta_Tabs">
        <div className="w-100 centered flex-column tabsWidth">
          <div className=" mb-5">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                style={{ color: "silver" }}
                className="tab1"
                label="FEATURED"
                {...a11yProps(0)}
              />
              <Tab
                style={{ color: "silver" }}
                className="tab2"
                label="ALL EVENTS"
                {...a11yProps(1)}
              />
            </Tabs>
          </div>

          <TabPanel className="w-100" value={value} index={0}>
            <LifeAtOcta_Featured />
          </TabPanel>
          <TabPanel className="w-100" value={value} index={1}>
            <LifeAtOcta_allEvents />
          </TabPanel>
        </div>
      </div>

      <DropUsALine />
      {/* <Footer /> */}
    </div>
  );
}

export default LifeAtOctaloop;
