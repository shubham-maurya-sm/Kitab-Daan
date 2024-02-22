import React from 'react'
import image1 from '../img/books/book1to12.jpg'
import image2 from '../img/books/booksUGPG.jpg'
import image3 from '../img/books/booksCompetition.jpg'
import image4 from '../img/books/booksOthers.jpg'
export default function RecepientOptions() {
    const handleOneToTwelveButtonClick = () => {
        // Navigate to the specified route for OneToTwelve
        window.location.href = '/OneToTwelve';
    };

    const handleUgPgButtonClick = () => {
        // Navigate to the specified route for UgPg
        window.location.href = '/UgPg';
    };
    const handleCompetitionButtonClick = () => {
        // Navigate to the specified route for OneToTwelve
        window.location.href = '/Competition';
    };

    const handleOthersButtonClick = () => {
        // Navigate to the specified route for UgPg
        window.location.href = '/Others';
    };



  return (
    <div>
      <section>
                <div className="container dealavailable mb-3">
                    <h4 className="text-center" >Books Category to Find Available Books</h4>
                    <br />
                    <div className="row">

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image1} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>Class 1-12<span></span></p>
                                    </div>
                                    <div>
                                    {/* <Link to="/OneToTwelve" className="btn btn-sm">CLICK HERE</Link> */}
                                        <button onClick={handleOneToTwelveButtonClick} className="btn btn-sm">CLICK HERE</button>
                                    </div>
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
                                    <div>
                                    {/* <Link to="/UgPg" className="btn btn-sm">CLICK HERE</Link> */}
                                      <button onClick={handleUgPgButtonClick} className="btn btn-sm">CLICK HERE</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image3} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>JEE/NEET </p>
                                    </div>
                                    <div>
                                    {/* <Link to="/Competition" className="btn btn-sm">CLICK HERE</Link> */}
                                      <button onClick={handleCompetitionButtonClick} className="btn btn-sm">CLICK HERE</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={image4} alt="" className="img-fluid" />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>Others </p>
                                    </div>
                                    <div>
                                    {/* <Link to="/Others" className="btn btn-sm">CLICK HERE</Link> */}
                                      <button onClick={handleOthersButtonClick} className="btn btn-sm">CLICK HERE</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
    </div>
  )
}
