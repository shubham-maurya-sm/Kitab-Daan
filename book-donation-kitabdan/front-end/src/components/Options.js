import React from 'react';
import optionImage1 from '../img/options-img1.jpg'
import optionImage2 from '../img/options-img2.jpg'

export default function Options() {
    const handleDonorButtonClick = () => {
        // Navigate to the specified route for Donor
        window.location.href = '/DonateForm';
    };

    const handleRecepientsButtonClick = () => {
        // Navigate to the specified route for Recepients
        window.location.href = '/RecepintOptions';
    };

    return (
        <div>
            <section>
                <div className="container dealavailable mb-3">
                    <h4 className="text-center">SELECT AS</h4>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card text-center">
                                <img src={optionImage1} alt="donor" className="img-fluid" style={{ height: '150px', width: '100%' }} />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>Donor</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm" onClick={handleDonorButtonClick}>CLICK HERE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 d-flex align-items-center justify-content-center">
                            <h2>OR</h2>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                            <div className="card">
                                <img src={optionImage2} alt="recepients" className="img-fluid" style={{ height: '150px', width: '100%' }} />
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p>Recepients</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm" onClick={handleRecepientsButtonClick}>CLICK HERE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
