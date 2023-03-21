import React from 'react'
import phone1 from "./Assets/5phones/1.png"
import phone2 from "./Assets/5phones/2.png"
import phone3 from "./Assets/5phones/3.png"
import phone4 from "./Assets/5phones/4.png"
import phone5 from "./Assets/5phones/5.png"
import shadow from "./Assets/5phones/shadow.png"

function Design() {
    return (
        <div className="Design centered flex-column container">
            <h3 className='OctaHeader centered'>
                Design
                <p>Design</p>
            </h3>

            <p>roducing a light-n-bright design with the user-friendly interface
                provoking to use the application on a regular basis.</p>

            <div className='centered flex-column'>
                <div className='centered phones5  '>
                    <img src={phone1} alt=''/>
                    <img src={phone2} alt=''/>
                    <img src={phone3} alt=''/>
                    <img src={phone4} alt=''/>
                    <img src={phone5} alt=''/>
                </div>
                <img className='phonesshadow' src={shadow} alt='' />

            </div>
        </div>
    )
}

export default Design