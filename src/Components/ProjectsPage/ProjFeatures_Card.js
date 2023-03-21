import { Grid } from '@mui/material'
import React from 'react'
import featureimg from "./Assets/feature.png"

function ProjFeatures_Card(props) {
    const {id, title, content} = props
    return (
        <div className='ProjFeatures_Card w-100'>
            <Grid container md={12}
                className={`${id % 2 == 0 ?
                    "container d-flex justify-content-end featureSplit" :
                    "container d-flex justify-content-start featureSplit"}`}
            >
                <Grid item className="FeaturesGrid centered flex-column ">
                    <div className='feature_img centered'>
                        <img src={featureimg} alt="feature" />
                    </div>
                </Grid>
                <Grid item className="FeaturesGrid features_content centered flex-column" >
                    <h3> {title}</h3>
                    <p> {content}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjFeatures_Card
