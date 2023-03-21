import { Grid } from '@mui/material'
import React from 'react'
import img1 from "./Assets/2phones/1.png"
import img2 from "./Assets/2phones/2.png"

function ProjOverview() {
    return (
        <div className='ProjOverview'>
            <Grid container md={12} className=" container d-flex justify-content-between OverviewSplit">

                <Grid item md={5.8} xs={12} className=" projoverviewGrid centered justify-content-start ">
                    <div className='w-100 centered phones' >
                        <img src={img2} alt="" />
                        <img src={img1} alt="" />
                    </div>
                </Grid>

                <Grid item md={5.8} xs={12} className=" projoverviewGrid  centered flex-column" >
                    <h3>Project Overview</h3>
                    <p>D-Streak is based on the drive-to-earn concept and it has been
                        designed to help drivers  effortlessly generate cash flow by
                        driving with D-Streak and from their digital assets. You can do a
                        lot on D-Streak and some of the main functions are:</p>
                    <p>D-Streak is based on the drive-to-earn concept and it has been
                        designed to help drivers  effortlessly generate cash flow by
                        driving with D-Streak and from their digital assets. You can do a
                        lot on D-Streak and some of the main functions are:</p>
                </Grid>


            </Grid>
        </div>
    )
}

export default ProjOverview