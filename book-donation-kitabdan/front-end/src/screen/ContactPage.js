import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import ContactForm from '../components/ContactForm'


export default function ContactPage() {
    return (
        <div>
            <div><Navigation /></div>
       
            <br />
           <div> <ContactForm/></div>
           <br />
           {/* <br /> */}
            <div> <Footer /> </div>
        </div>
    )
}
