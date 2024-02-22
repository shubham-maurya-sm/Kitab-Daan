import React from 'react'
import image1 from '../img/books/book1to12.jpg'
import image2 from '../img/books/booksUGPG.jpg'
import image3 from '../img/books/booksCompetition.jpg'
import image4 from '../img/books/booksOthers.jpg'
export default function BooksCategory() {
    return (
        <div>
            <section>
                <div className="container dealavailable mb-3">
                    <h4 className="text-center" >Books Category to Donate</h4>
                    <div className="row">

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image1} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>Class 1-12<span></span></p>
                                    </div>
                                    {/* <div>
                                        <button className="btn btn-sm">CLICK HERE</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image2} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>UG/PG</p>
                                    </div>
                                    {/* <div>
                                        <button className="btn">CLICK HERE</button>
                                    </div> */}
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image3} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>JEE/NEET/CUET etc.</p>
                                    </div>
                                    {/* <div>
                                        <button className="btn">CLICK HERE</button>
                                    </div> */}
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image4} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>Others (Tales/Religious/Biographies) </p>
                                    </div>
                                    {/* <div>
                                        <button className="btn">CLICK HERE</button>
                                    </div> */}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </div >
    )
}
