import React from 'react'

function CarevalueCard(props) {
    return (
        <div className={`${props.variant ==="left" ? "CarevalueCard" : "CarevalueCard cardflip"}`}>
            <div className='CarevalueCard_number centered'>
                {props.id}
            </div>
            <div className='CarevalueSpace'></div>
            <div className='CarevalueContent'>
                <p>{props.title}</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default CarevalueCard