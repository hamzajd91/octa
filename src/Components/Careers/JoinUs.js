import React from 'react'
import PropTypes from "prop-types";
import {
    Tabs,
    Tab,
    Typography,
    Box,
} from '@mui/material';
import JobCard from './JobCard';
import phone from "./Assets/phone.png"
import email from "./Assets/email.png"
import location from "./Assets/location.png"

import add1 from "./Assets/add1.png"
import add2 from "./Assets/add2.png"
import add3 from "./Assets/add3.png"


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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function JoinUs() {

    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='JoinUsSection centered'>

            <h3 className=''>JOIN US</h3>

            <div className='AboutDetail JoinUsSection_title'>
                <p>JOIN US
                    <hr />
                </p>
            </div>


            <div className="w-100 centered flex-column">
                <div className=' mb-5'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"

                    >

                        <Tab style={{ color: "silver" }} className="tab1" label="All" {...a11yProps(0)} />
                        <Tab style={{ color: "silver" }} className="tab2" label="dEVELOPERS" {...a11yProps(1)} />
                        <Tab style={{ color: "silver" }} className="tab3" label="gRAPHICS" {...a11yProps(2)} />
                        <Tab style={{ color: "silver" }} className="tab4" label="cONTENT WRITER" {...a11yProps(3)} />
                        <Tab style={{ color: "silver" }} className="tab5" label="MANAGEMENT" {...a11yProps(4)} />
                    </Tabs>
                </div>

                <TabPanel value={value} index={0}>
                    display search data here
                </TabPanel>
                <TabPanel value={value} index={1}>

                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />



                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
            </div>
        </div>
    )
}

export default JoinUs