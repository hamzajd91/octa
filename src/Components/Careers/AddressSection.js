import React from 'react'
import add1 from "./Assets/add1.png"
import add2 from "./Assets/add2.png"
import add3 from "./Assets/add3.png"

import phone from "./Assets/phone.png"
import email from "./Assets/email.png"
import location from "./Assets/location.png"

function AddressSection() {
    return (
        <div className='centered flex-column'
            style={{
                background: "var(--basegrey)",
                minHeight: "200px",
                paddingBlock: "25px"
            }}>
            <div className='AddressDiv'>
                <div className='addresscard'>
                    <div>
                        <img className='addresscardimg' src={location} alt="" />
                        <p className='addresstitle'>Office</p>
                    </div>
                    <p className='addresscontent'>Address Office#1,2nd floor,Pak Land City centreNear D.Watson, I8 Markaz.</p>
                </div>

                <div className='addresscard'>
                    <div>
                        <img className='addresscardimg' src={email} alt="" />
                        <p className='addresstitle'>Email</p>
                    </div>
                    <p className='addresscontent'>hi@octaloop.io</p>
                    {/* <p className='addresscontent'>Octaloophr@gmail.com</p> */}
                </div>

                <div className='addresscard'>
                    <div>
                        <img className='addresscardimg' src={phone} alt="" />
                        <p className='addresstitle'>Contact</p>
                    </div>
                    <p className='addresscontent'>Support: 0900 78601</p>
                    <p className='addresscontent'>Office: +92 315 0080888</p>
                </div>
            </div>

            {/* <div className='AddressDiv'>
                <img src={add3} alt="" style={{ scale: "1.1", border: "2px solid red" }} />
                <img src={add2} alt="" style={{ scale: "1.1", border: "2px solid red" }} />
                <img src={add1} alt="" style={{ scale: "1.1", border: "2px solid red" }} />
            </div> */}
        </div>
    )
}

export default AddressSection