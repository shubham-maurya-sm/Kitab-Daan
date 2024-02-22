import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import Options from '../components/Options'

export default function Option() {
    return (
        <div>
            <div><Navigation /></div>
            <div> <Options/> </div>
          
            <div> <Footer /> </div>
        </div>
    )
}
