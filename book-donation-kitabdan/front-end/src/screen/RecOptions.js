import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import RecepientOptions from '../components/RecepientOptions'

export default function RecOptions() {
    return (
        <div>
            <div><Navigation /></div>
            <div> <RecepientOptions/> </div>
          
            <div> <Footer /> </div>
        </div>
    )
}
