import { Grid } from '@mui/material'
import React from 'react'
import person1 from "./Assets/person1.png"
import person2 from "./Assets/person2.png"

function Persona() {
    return (
        <div className='Persona'>
            <h3 className='OctaHeader centered flex-column'>PERSONA
                <p>PERSONA</p>
            </h3>

            <Grid container md={12} className="container d-flex justify-content-between">
                <Grid item md={5.8} xs={12} className="PersonaGrid centered flex-column ">
                    <div className='w-100 centered'><img src={person1} alt="" /></div>
                    <h3>User</h3>
                    <p>The user who downloaded and
                        installed the application on their
                        mobile device</p>
                </Grid>

                <Grid item md={5.8} xs={12} className="PersonaGrid centered flex-column" >

                    <img src={person2} alt="" />
                    <h3>User</h3>
                    <p>The user who downloaded and
                        installed the application on their
                        mobile device</p>
                </Grid>

            </Grid>
        </div>


    )
}

export default Persona