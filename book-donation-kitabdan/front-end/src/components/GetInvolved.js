import React from 'react'

export default function GetInvolved() {
  return (
    <div>
      <section className="container-fluid" >
        <div className="specialoffer">
            <h2 className="text-center card-head">SUPPORT OUR WORK</h2>
            {/* <h1 className="text-center card-head">Be the reason of someone smiles</h1> */}
            <h6 className="text-center">Your support is vital to our work at "Kitab Dan Organization". There are many ways you can contribute towards our activities, and every little bit that you commit goes a long way in helping us fulfill our mission. Learn more about how you can get involved by exploring the opportunities below.</h6>
            <div className="card-group">
                <div className="card" >
                    <img src="https://www.harvesters.org/wp-content/uploads/2021/09/Spread-The-Word.jpg" className="card-img-top" alt="..." height="400"/>
                    <div className="card-body">
                        <h5 className="card-title">SPREAD THE WORDS</h5>
                        <p className="card-text">
                            Join Our Efforts
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://blog.hubspot.com/hs-fs/hubfs/nonprofit-fundraising-2.jpg?width=893&height=600&name=nonprofit-fundraising-2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">NON-PROFIT FUNDRAISE</h5>
                        <p className="card-text">
                        You Can Make a Difference
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://ssir.org/images/jcogs_img/cache/Stop_raising_awareness_advocacy_main_-_28de80_-_32ecaefaa8c1b0dae7ccdf72291fdf8b643ab8ea.jpg" className="card-img-top" alt="..." height="400"/>
                    <div className="card-body">
                        <h5 className="card-title">RAISE AWARENESS</h5>
                        <p className="card-text">
                        Become an Active Member
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
