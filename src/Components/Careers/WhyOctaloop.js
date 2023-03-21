import React from 'react'
import WhyOctaCard from './WhyOctaCard'

function WhyOctaloop() {
    return (
        <div className='WhyOctaMain centered'>
            <div className='WhyOctaheader centered flex-column'>
                <p>WHY OCTALOOP TECHNOLOGIES <span>?</span></p>
                <p>
                    We aspire to become a global service provider by creating a viable framework of blockchain
                    solutions and strategies. Our aim is to elevate companies and individuals by providing the best
                    services to help them reach their optimum performance.
                </p>
            </div>

            <div className='whycardContainer container'>
                {
                    octaData.map((data) => {
                        return(
                             <WhyOctaCard
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

export default WhyOctaloop

const octaData = [
    {
        id: "1",
        title: "Benefits",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, vestibulum senectus tempor etiam.Sed eu egestas libero, mi eu. Et eu volutpat, neque in. Quisque enim ante phasellus sapien sapien in bibendum ut. Posuere dui sit porta in ut.Quis sapien elit euismod purus aliquet sit sit magnanunc."

    },

    {
        id: "2",
        title: "Innovation",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, vestibulum senectus tempor etiam.Sed eu egestas libero, mi eu. Et eu volutpat, neque in. Quisque enim ante phasellus sapien sapien in bibendum ut. Posuere dui sit porta in ut.Quis sapien elit euismod purus aliquet sit sit magnanunc."

    },

    {
        id: "3",
        title: "Funday",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, vestibulum senectus tempor etiam.Sed eu egestas libero, mi eu. Et eu volutpat, neque in. Quisque enim ante phasellus sapien sapien in bibendum ut. Posuere dui sit porta in ut.Quis sapien elit euismod purus aliquet sit sit magnanunc."
    },


]