import React from 'react'
import logo from '../img/books/logo3.jpg'
import happyUserImage from '../img/happyUsr-img.png';

export default function CustReview() {
    return (
        <div style={{
            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIGFjp0r98QLYbtHEUkTR2R-zqSB6EEdylg&usqp=CAU)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#93c4e3',
            backgroundPosition: "center",
            filter: 'contrast(100%)',

        }}>
            <article className="container mt-3 mb-5">
                <div className=" text-center">
                    <div className='align-items-center justify-content-center  py-2 ' style={{
                        backgroundImage: `url(${happyUserImage})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        filter: 'contrast(100%)',
                        height: '17vh',
                    }} >
                    </div>
                    {/* <h1> HAPPY USERS</h1> */}
                    <p>What users say about us, and why you should choose us...</p>
                    <div className="offset-lg-1" >
                        <p className="feedbacks br">
                            KitabDaan is a great tool for sharing books. It’s easy to use and lets you donate books without any hassle. You can also track your donated books. It’s a good way to connect people who want to give books and those who need them.
                        </p>

                        <div className="flex-row justify-content-center p-3">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            <div className="p-4"  >
                                <img src={logo} alt="..." style={{ borderRadius: '100%', width: '150px', height: '150px' }} />
                            </div >

                        </div >
                    </div>
                </div>


            </article>
        </div >
    )
}
