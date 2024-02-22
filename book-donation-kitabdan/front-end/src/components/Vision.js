import React from 'react';
import img from "../img/vision-background.png"
import visionImage from '../img/vision-img.png';

export default function Vision() {
    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center",
            filter: 'contrast(100%)',
            backgroundColor: 'rgba(255, 255, 255, 0)',
          
        }}>
            <section className="container mt-5 mb-0 stackSection">
                <div className='align-items-center justify-content-center  py-1 ' style={{
                    backgroundImage: `url(${visionImage})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    filter: 'contrast(100%)',
                    height: '12vh',
                }} >
                </div>
                {/* <h1 className="tc text-center" style={{color: 'blue', fontSize: '50px'}}>Vision</h1><hr /> */}
                <div className="grid py-2">
                    <div className="row ">
                        <div className="col-sm-6">
                            <div className="stack">
                                <div className="col grow">
                                    <img src="https://img.freepik.com/premium-vector/donation-charity-concept-african-volunteers-women-with-boxes-full-humanitarian-help-philanthropy_189033-2026.jpg?w=996" className="" style={{ width: '100%'}} alt="s" />
                                </div>
                                <div className="col shadow">
                                    <img src="https://img.freepik.com/free-vector/world-book-day-background-realistic-style_23-2147780865.jpg?w=740&t=st=1696440220~exp=1696440820~hmac=e3183ebb5e432e5ef788335e996fe700a95d1eb55117176e9bc5dab776eb73f9" className="" style={{ width: '100%' }} alt="s" />
                                </div>
                                <div className="col dim">
                                    <img src="https://img.freepik.com/premium-vector/cardboard-box-with-different-books-donations-pile-standing-books-bandaged-with-ribbon_503113-440.jpg?w=740" className="" style={{ width: '100%' }} alt="a" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 stacktext">
                            <ol >
                                
                                <li>To be accessible to every individual who needs books.</li>
                                <li>To provide books to underpriviliged person who cannot afford it.</li>
                                <li>To collect books from as many people as possible and give them a chance to be a part of this initiative.</li>
                                <li>To make people aware how important and valuable is their contribution towards the society.</li>
                                <li>Since it is a donation program which aims to encourage people to lend a helping hand to the needy.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
