import React from 'react'
import DesignHeader from '../Components/DesignPage/DesignHeader'
import "../Components/DesignPage/DesignPage.css"
import DesignProcess from '../Components/DesignPage/DesignProcess'
import TwoD_Design from '../Components/DesignPage/TwoD_Design'
import JoinOcta_career from "../Components/Careers/JoinOcta_career";

function DesignPage() {
    return (
        <div>
            <DesignHeader />
            <DesignProcess />
            <TwoD_Design />
            <JoinOcta_career />
        </div>
    )
}

export default DesignPage