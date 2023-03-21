import React from 'react'
import { Button, Grid } from '@mui/material'
import Banner1 from "./Assets/banner1.png"
function ProjectGoals() {
    return (
        <div className='ProjectGoals'>

            <Grid container md={12} className=" container centered justify-content-between"
                style={{ marginBottom: "50px" }}>

                <Grid item md={5.8} xs={12} className=" ProjectDataGrid ProjectDataGridAlign centered flex-column" >

                    <h3>Project Main Goals</h3>

                    <p>D-Streak is based on the drive-to-earn concept and it has been designed to help drivers
                        effortlessly generate cash flow by driving with D-Streak and from their digital assets. You
                        can do a lot on D-Streak and some of the main functions are:</p>

                    <p>Requirments</p>
                    <div className='projtagtagDiv centered' style={{ marginBottom: "45px" }}>
                        {
                            WorkTags.map((data) => {
                                return (
                                    <div className='projDatatag projDatataggrey centered'>
                                        {data.tag}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <p>Technologies</p>
                    <div className='projtagtagDiv centered' style={{ marginBottom: "45px" }}>
                        {
                            WorkTags.map((data) => {
                                return (
                                    <div className='projDatatag centered'>
                                        {data.tag}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='d-flex flex-row flex-wrap'>
                        <div className='projGoalsinfo'>
                            <p>Team Members</p>
                            <p>1</p>
                        </div>
                        <div className='projGoalsinfo'>
                            <p>Months</p>
                            <p>1</p>
                        </div>
                    </div>

                </Grid>

                <Grid item md={5.8} xs={12} className=" ProjectDataGrid centered flex-column">
                    <div className='w-100 centered'><img src={Banner1} alt="" /></div>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProjectGoals

const WorkTags = [
    { tag: "Andriod" },
    { tag: "AWS" },
    { tag: "Google Fit" },
    { tag: "los" },
    { tag: "Java" },
    { tag: "Kotlin" },
    { tag: "MY SQL" }
]