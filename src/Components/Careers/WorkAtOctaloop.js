import React from 'react'
import CarevalueCard from './CarevalueCard'

function WorkAtOctaloop() {
    return (
        <div className='octaWork centered'>
            <div className='octaWork_Text'>
                <p>WHY YOU LOVE WORKING AT OCTALOOP TECHNOLOGIES</p>
                <p>(Our Core Values)</p>
            </div>


            <div className='CareValues'>
                <div className='leftCareValues'>
                    {
                        leftCareValues.map((data) => {
                            return (
                                <CarevalueCard
                                    id={data.id}
                                    title={data.title}
                                    content={data.content}
                                    variant="left"
                                />
                            )
                        })
                    }
                </div>
                <div className='midCareValues'>
                    Great things in
                    business are
                    never done by
                    one person.
                    They're done
                    by a team
                    of people.

                </div>
                <div className='rightCareValues'>
                    {
                        rightCareValues.map((data) => {
                            return (
                                <CarevalueCard
                                    id={data.id}
                                    title={data.title}
                                    content={data.content}
                                    variant="right"
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkAtOctaloop

const leftCareValues = [
    {
        id: "1",
        title: " learning opportunity",
        content: "Treat every failure as a learning opportunity"
    },
    {
        id: "2",
        title: "Innovation",
        content: "Fertilize innovation with customer listening"
    },
    {
        id: "3",
        title: "Bring Simplicity",
        content: "Bring simplicity to all that us complex"
    },
]

const rightCareValues = [
    {
        id: "4",
        title: "be bold",
        content: "Treat every failure as a learning opportunity"
    },
    {
        id: "5",
        title: "Transparency",
        content: "Build honest and transparent relationships"
    },
    {
        id: "6",
        title: "Passionate",
        content: "Be passionate but keep the fun in the workday"
    },
]

