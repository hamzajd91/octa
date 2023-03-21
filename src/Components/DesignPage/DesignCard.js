import React from 'react'
function DesignCard(props) {
    return (
        <div className='DesignCard'>
            <h4>{props.title}</h4>
            <hr />
            <div>
                {props.items.map((data) => (
                    <p> <div></div> {data.itemName}</p>
                ))}
            </div>
        </div>
    )
}

export default DesignCard