import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function JoinOcta_career() {

  const navigate = useNavigate();
  const [pass, setpass] = useState(false)


  return (
    <div className='JoinOcta centered'>
      <p>What Make Us</p>
      <p>Octaloop Family</p>

      <a href="/LifeAtOctaloop">
        <Button>Life At Octaloop</Button>
      </a>
    </div>
  )
}

export default JoinOcta_career