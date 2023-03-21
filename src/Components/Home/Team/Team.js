import { Button } from '@mui/material'
import React from 'react'
import "./Teams.css"
import TeamsCard from './TeamsCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Team() {


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            // breakpoint: { max: 1024, min: 464 },
            breakpoint: { max: 1024, min: 600 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            // breakpoint: { max: 464, min: 0 },
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='TeamMain'>

            <div className='TeamHeader'>
                mEET oUR tEAM
            </div>

            <div className='teamtext'>
                Awesome Strategic decision makers & PROBLEM SOLVERS
            </div>

            <div className='buttonDiv'>
                <Button>BOARD OF DIRECTORS</Button>
                <Button>TEAM MEMBERS</Button>
            </div>

            <div className=' container' style={{position:"relative"}}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}

                    autoPlaySpeed={1000}
                    keyBoardControl={true}

                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>
                    <div> <TeamsCard /> </div>

                </Carousel>;
            </div>

        </div>
    )
}

export default Team