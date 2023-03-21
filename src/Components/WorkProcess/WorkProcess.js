import React from 'react'
import "./WorkProcess.css"

import Grid from '@mui/material/Grid';

function WorkProcess() {
    return (
        <div className=' Workmain'>

            <h3 className='OctaHeader centered flex-column'>TECHNOLOGIES
                <p>TECHNOLOGIES</p>
            </h3>

            <div className='container ' >
                <Grid container className='splitWorkContent' >
                    <Grid item md={7.5} sm={12} className="  WorkCardsContainer" >

                        {WorkData.map(((data) => (
                            <div className='WorkCard'>
                                <div className='WorkCardNumber'>
                                    {data.id}
                                </div>
                                <div>
                                    <div className='WorkCardTitle'> {data.title}</div>
                                    <div className='WorkCardContent'> {data.content}</div>
                                </div>

                            </div>
                        )))
                        }

                    </Grid>
                    <Grid item lg={4.5} md={12} sm={12} className="  centered">
                        <div className='WorkImg'>

                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default WorkProcess


const WorkData = [
    {
        id: "1",
        title: "Search",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque senectus montes, viverra urna, in sit. Etiam facilisis eu, amet arcu nisl imperdiet."
    },

    {
        id: "2",
        title: "Idea",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque senectus montes, viverra urna, in sit. Etiam facilisis eu, amet arcu nisl imperdiet."
    },

    {
        id: "3",
        title: "Design",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque senectus montes, viverra urna, in sit. Etiam facilisis eu, amet arcu nisl imperdiet."
    },

    {
        id: "4",
        title: "Development",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque senectus montes, viverra urna, in sit. Etiam facilisis eu, amet arcu nisl imperdiet."
    }

]