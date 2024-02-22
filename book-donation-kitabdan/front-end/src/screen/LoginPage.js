import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default function LoginPage() {
    return (
        <div>
            <div><Navigation /></div>
           
            <div><Login /></div>
          
            <div> <Footer /> </div>
        </div>
    )
}
