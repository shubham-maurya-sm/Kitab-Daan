import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import Competition from '../components/Competition'

export default function Option() {
    return (
        <div>
            <div><Navigation /></div>
            <div><Competition/></div>
          
            <div> <Footer /> </div>
        </div>
    )
}
