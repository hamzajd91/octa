import { Button } from 'react-bootstrap';
import React from 'react'

function JobCard() {
    return (
        <div className='JoinUsSection_Card'>
            <div className='d-flex flex-column'>
                <p className='JobTitle'>Full Stack Developer</p>
                <Button className='jobtype centered'>Full time</Button>
            </div>
            <p className='jobcontent'>Minimum Experience required in domain is 2 years.</p>
            <p className='jobcontent'>I-8, Markaz  City Center 2nd Floor Office #103Islamabad</p>
            <Button className='applyJob centered'>View and Apply</Button>
        </div>
    )
}

export default JobCard