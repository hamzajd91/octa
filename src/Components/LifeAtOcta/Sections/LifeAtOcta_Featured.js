import { Grid } from '@mui/material'
import React from 'react'
import "../LifeAtOcta.css"
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.jpg"
import img6 from "../Assets/6.jpg"
import img7 from "../Assets/7.jpg"
import img8 from "../Assets/8.jpg"

function LifeAtOcta_Featured() {
  return (
    <div className='w-100 _Featured'>
      <Grid container md={12} className='container centered' style={{ gap: "8px" }}>
        {
          ImagesData.map((data) => {
            return (
              <Grid item md={5.9} sm={12} className="w-100" >
                <div className="featuredImagescontainer centered" >
                  <p className="featuredImagesText">{data.text}</p>
                  <div className="featuredImages centered"
                    style={{ backgroundImage: `url(${data.image})` }}></div>
                </div>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default LifeAtOcta_Featured

const ImagesData = [
  {
    id: 1,
    image: img1,
    text: "Image 1 Text"
  },
  {
    id: 2,
    image: img2,
    text: "Image 2 Text"
  },
  {
    id: 3,
    image: img3,
    text: "Image 3 Text"
  },
  {
    id: 4,
    image: img4,
    text: "Image 4 Text"
  },
  {
    id: 5,
    image: img5,
    text: "Image 5 Text"
  },
  {
    id: 6,
    image: img6,
    text: "Image 6 Text"
  },
  {
    id: 7,
    image: img7,
    text: "Image 7 Text"
  },
  {
    id: 8,
    image: img8,
    text: "Image 8 Text"
  },
]