import { Button } from '@mui/material'
import React from 'react'

function DropUsALine() {
    return (
        <div className="DropUsALine py-5 centered">
            <div className="DropUsALine-header d-flex justify-content-center py-4">
                <h4 className='DropUsALine-header-text'>
                    Drop us a line!
                </h4>
            </div>
            <div className="DropUsALine-para d-flex justify-content-center text-center" >
                <p> Over the years our company has been helping to solve complex and unique tasks for many clients from
                    all over the world. Our experienced specialists
                    can provide quality and effective solutions for every project we have. We have all the resources
                    to create a qualitative product that will make your business more efficient.</p>
            </div>

            <div className='DropUsALine-button d-flex justify-content-center text-center'>
                <a href="/Contact-Us">
                    <Button className='DropUsALine-button-text'>CONTACT US</Button>
                </a>
            </div>
        </div>
    )
}

export default DropUsALine