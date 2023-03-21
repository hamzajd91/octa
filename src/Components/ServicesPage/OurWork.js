import React from 'react'
import { Grid } from '@mui/material'
import phoneimg from "./Assets/phone.png"
import laptopimg from "./Assets/laptop.png"

function OurWork() {
    return (
        <div className='OurWork'>
            <div className='ourworkTitle centered flex-column'>
                <p>TAKE A GLANCE AT</p>
                <p>OUR WORKS</p>
            </div>

            <Grid container md={12} className=" container centered justify-content-between">
                <Grid item md={5.8} xs={12} className=" WorkGrid centered flex-column">

                    <div className='w-100'><img src={phoneimg} alt="" /></div>

                    <Grid md={10} className="centered WorkDetailsCard  flex-column w-100" >
                        <p>D-STREAK APP</p>

                        <div className='worktagDiv centered'>
                            {
                                WorkTags.map((data) => {
                                    return(
                                        <div className='worktag centered'>
                                        {data.tag}
                                    </div>
                                    )
                                    
                                })
                            }
                        </div>

                        <p>Activity tracking program that selects ideal opponents in sports
                            competitions by considering and comparing their capabilities.</p>

                        <a>Learn more</a>
                    </Grid>
                </Grid>

                <Grid item md={5.8} xs={12} className=" WorkGrid centered flex-column">
                    
                      <div className='w-100'><img src={laptopimg} alt="" /></div>

                    <Grid md={10} className="centered WorkDetailsCard  flex-column w-100" >
                        <p>D-STREAK APP</p>

                        <div className='worktagDiv centered'>
                            {
                                WorkTags.map((data) => {
                                    return(
                                        <div className='worktag centered'>
                                        {data.tag}
                                    </div>
                                    )
                                    
                                })
                            }
                        </div>

                        <p>Activity tracking program that selects ideal opponents in sports
                            competitions by considering and comparing their capabilities.</p>

                        <a>Learn more</a>
                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}

export default OurWork

const WorkTags = [
    { tag: "Andriod" },
    { tag: "AWS" },
    { tag: "Google Fit" },
    { tag: "los" },
    { tag: "Java" },
    { tag: "Kotlin" },
    { tag: "MY SQL" },
    { tag: "php" },
    { tag: "Swift" },
]

