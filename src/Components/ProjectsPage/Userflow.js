import React from 'react'
import Userflowimg from "./Assets/userflow.png"

function Userflow() {
    return (
        <div className='Userflow centered'>
            <div className='container centered flex-column'>
                <h3 className='OctaHeaderlight centered' style={{ flexDirection: "column" }}>
                    User Flow
                    <p>User Flow</p>
                </h3>
                <img src={Userflowimg} alt="User flow" />
            </div>

        </div>
    )
}

export default Userflow