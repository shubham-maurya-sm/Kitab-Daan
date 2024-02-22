import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import OthersBook from '../components/OthersBook'

export default function Option() {
    return (
        <div>
            <div> <Navigation/> </div>
            <div> <OthersBook/></div>
          
            <div> <Footer /> </div>
        </div>
    )
}
