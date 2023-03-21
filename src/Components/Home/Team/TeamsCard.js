import React from 'react'
import "./Teams.css"
import profile from "./Assets/profile.png"

function TeamsCard() {
  return (
    <div className='TeamCard'
    style={{
        background: `linear-gradient(360deg, #101010 0%, rgba(0, 0, 0, 0) 53.33%), url(${profile})`
    }}>
        <p>Aamir Ahmed</p>
        <p>Cheif Executive Officer</p>
    </div>
  )
}

export default TeamsCard