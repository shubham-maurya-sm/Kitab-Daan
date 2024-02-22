import React from 'react'
import Home from './screen/HomePage'
import GetInvolve from './screen/ContactPage'
import DonateForm from './screen/DonateForm'
import Signin from './screen/LoginPage'
import SignUp from './screen/SignUp'
import ContactUs from './screen/ContacUs'
import Option from './screen/Options'
import RecOptions from './screen/RecOptions'
import UgPg from './screen/UgPg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Competition from './components/Competition'
import OneToTwelve from './components/OneToTwelve'
import OthersBook from './components/OthersBook'


export default function App() {
    return (
        <div>
            <Router>
                <div>

                    <Routes>

                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/ContactUs' element={<GetInvolve />}></Route>
                        <Route exact path='/DonateForm' element={<DonateForm />}></Route>
                        <Route exact path='/Login' element={<Signin />}></Route>
                        <Route exact path='/SignUp' element={<SignUp />}></Route>
                        <Route exact path='/ContactUs' element={<ContactUs />}></Route>
                        <Route exact path='/Options' element={<Option />}></Route>
                        <Route exact path='/RecepintOptions' element={<RecOptions />}></Route>
                        <Route exact path='/UgPg' element={<UgPg />}></Route>
                        <Route exact path='/Competition' element={<Competition />}></Route>
                        <Route exact path='/OneToTwelve' element={<OneToTwelve />}></Route>
                        <Route exact path='/Others' element={<OthersBook />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
