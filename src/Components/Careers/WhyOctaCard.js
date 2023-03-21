import React from 'react'

function WhyOctaCard(props) {
    return (
        <div className='Octacard'>
            <div className='centered'>
                {props.title}
            </div>

            <p>
                {props.content}
            </p>
        </div>
    )
}

export default WhyOctaCard