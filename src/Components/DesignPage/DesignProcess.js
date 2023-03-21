import React from 'react'
import DesignCard from './DesignCard'

function DesignProcess() {
    return (
        <div className='centered DesignProcess'>

            <h3 className='OctaHeader centered flex-column'>DESIGN PROCESS
                <p>DESIGN PROCESS</p>
            </h3>

            <div className='DesignCards_container centered'>

                {
                    DesignCard_Data.map((data) => {
                        return (
                            <DesignCard
                                title={data.title}
                                items={data.items}
                            />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default DesignProcess


const DesignCard_Data = [
    {
        id: "1",
        title: "Definition Phase",
        items: [
            { itemName: "Creative Brief" },
            { itemName: "Graphic Design Research" },
            { itemName: "Brainstorming " },
            { itemName: "Mood Boarding" },

        ],
    },

    {
        id: "2",
        title: "Creation Phase",
        items: [
            { itemName: "Sketching" },
            { itemName: "Design Building" },
            { itemName: "Refining " },
        ],
    },

    {
        id: "3",
        title: "Feedback Phase",
        items: [
            { itemName: "Presenting" },
            { itemName: "Revisions" },
        ],
    },

    {
        id: "1",
        title: "Delivery Phase",
        items: [
            { itemName: "Final Delivery" },
        ],
    },
]