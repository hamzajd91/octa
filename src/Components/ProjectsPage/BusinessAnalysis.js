import { Grid } from '@mui/material'
import React from 'react'
import BAimg from "./Assets/businessAnalysis.png"

function BusinessAnalysis() {
    return (
        <div className='BusinessAnalysis centered flex-column'>
            <div className='BA_Header centered flex-column container '>

                <h3 className='centered flex-column'>BUSINESS ANALYSIS
                    <p>BUSINESS ANALYSIS</p>
                </h3>
                <p>The main challenge is developing a mobile application for tracking all activities: NFT’s, Driving
                    and integrating in-app payment systems for competitions.</p>
            </div>

            <Grid container md={12} className="container d-flex justify-content-between">
                <Grid item md={6.8} xs={12} className="BA-Grid centered flex-column ">
                    <div className='w-100 centered'><img src={BAimg} alt="" /></div>
                </Grid>

                <Grid item md={4.8} xs={12} className="BA-Grid BA-Grid-text centered flex-column" >
                    <h3>Identify The Problem &Solutions</h3>
                    <h3>Problems</h3>
                    <ul>
                        <li>
                            Fake user activity data
                        </li>
                    </ul>
                    {/* <p></p> */}
                    <h3>Solutions</h3>
                    <ul>
                        <li>
                            Using smartphone sensors (google Fit and app;e health
                            database) for activity tracking
                        </li>
                        <li>
                            Creating a unique tool for massive competition and prize
                            funds splitting
                        </li>
                    </ul>

                </Grid>

            </Grid>
        </div>
    )
}

export default BusinessAnalysis