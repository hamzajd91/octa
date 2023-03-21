import React from 'react'
import { Button, Grid } from '@mui/material'
import "./ProjectsPage.css"
import Banner2 from "./Assets/banner2.png"
function ProjectDisplay2() {
    return (
        <div>
            <div className='ProjectDisplay2'>

                <Grid container md={12} className=" container centered justify-content-between">
                    <Grid item md={5.8} xs={12} className=" ProjectGrid projGridAlign centered flex-column">

                        <h3>Metamuze
                            <span>
                            Marketplace Website
                            </span>
                        </h3>
                        <p>Technologies</p>

                        <div className='projtagtagDiv centered'>
                            {
                                WorkTags.map((data) => {
                                    return (
                                        <div className='projtag centered'>
                                            {data.tag}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <p>D-Streak is based on the drive-to-earn concept and it has been designed to help drivers
                            effortlessly generate cash flow by driving with D-Streak and from their digital assets. You
                            can do a lot on D-Streak and some of the main functions are:</p>

                        <Button className='projLearnmore mt-5'>
                            learn more
                        </Button>
                    </Grid>

                    <Grid item md={5.8} xs={12} className=" ProjectGrid centered flex-column">
                        <div className='w-100 centered'><img src={Banner2} alt="" /></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProjectDisplay2

const WorkTags = [
    { tag: "Andriod" },
    { tag: "AWS" },
    { tag: "Google Fit" },
    { tag: "los" },
    { tag: "Java" },
    { tag: "Kotlin" },
    { tag: "MY SQL" }
]