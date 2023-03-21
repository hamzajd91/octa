import React from 'react'
import ProjFeatures_Card from './ProjFeatures_Card'

function ProjFeatures() {
    return (
        <div className='ProjFeatures centered flex-column'>
            <h3 className='OctaHeaderlight centered' style={{ flexDirection: "column" }}>
                Project Features
                <p>Project Features</p>
            </h3>

            <div className=' w-100'>
                {
                    featureData.map((data) => {
                        return (
                            <ProjFeatures_Card
                                id={data.id}
                                title={data.title}
                                content={data.content}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjFeatures


const featureData = [
    {
        id: 1,
        title: "Buy NFT’S",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut egeteros vulputate lectus bibendum placerat gravida. Non eget felislaoreet eget vivamus ullamcorper metus id nisl. Id tellus a donecneque varius turpis ut sem vestibulum. Nisl ac ipsum aenean aliquam nullam vel tempus. Lorem orci orci a mauris, nisi consequat, euismod habitant. Nibh vitae nunc, id a facilisis montes, viverra lacus. At sed lacinia auctor pulvinar aliquet suscipit posuere. Dignissiid molestie mi consectetur sed in amet sed porttitor. Nullam sagittis id diam, tempus et commodo purus nulla suspendisse. Vel aliquam amet eget non lorem."
    },

    {
        id: 2,
        title: "Compition",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut egeteros vulputate lectus bibendum placerat gravida. Non eget felislaoreet eget vivamus ullamcorper metus id nisl. Id tellus a donecneque varius turpis ut sem vestibulum. Nisl ac ipsum aenean aliquam nullam vel tempus. Lorem orci orci a mauris, nisi consequat, euismod habitant. Nibh vitae nunc, id a facilisis montes, viverra lacus. At sed lacinia auctor pulvinar aliquet suscipit posuere. Dignissiid molestie mi consectetur sed in amet sed porttitor. Nullam sagittis id diam, tempus et commodo purus nulla suspendisse. Vel aliquam amet eget non lorem."
    },

    {
        id: 3,
        title: "Activity Details",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut egeteros vulputate lectus bibendum placerat gravida. Non eget felislaoreet eget vivamus ullamcorper metus id nisl. Id tellus a donecneque varius turpis ut sem vestibulum. Nisl ac ipsum aenean aliquam nullam vel tempus. Lorem orci orci a mauris, nisi consequat, euismod habitant. Nibh vitae nunc, id a facilisis montes, viverra lacus. At sed lacinia auctor pulvinar aliquet suscipit posuere. Dignissiid molestie mi consectetur sed in amet sed porttitor. Nullam sagittis id diam, tempus et commodo purus nulla suspendisse. Vel aliquam amet eget non lorem."
    },
]
