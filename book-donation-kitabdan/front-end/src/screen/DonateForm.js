import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import DonateForm from '../components/DonateForm'
export default function GetInvolve() {
    return (
        <div>
            <div><Navigation /></div>
            
            <div><DonateForm/></div>
            <div> <Footer /> </div>
        </div>
    )
}
