import React from 'react'
import whatWorkImg1 from '../img/pickup.jpg'
import whatWorkImg2 from '../img/sorting.jpg'
import whatWorkImg3 from '../img/giving.jpg'

export default function WhatWork() {
  return (
    <div>
      <section className="container-fluid" >
        <div className="specialoffer">
            <h2 className="text-center card-head">What do we do</h2>
            <h1 className="text-center card-head">Be the reason of someone smiles</h1>
            <h6 className="text-center">Well, we are just trying to make the world a better place.</h6>
            <div className="card-group">
                <div className="card">
                    <img src={whatWorkImg1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">#Pickup</h5>
                        <p className="card-text">
                            Collecting books from those who want to support the underpriviliged peoples who can not afford to buy books.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={whatWorkImg2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">#Sorting</h5>
                        <p className="card-text">
                            Recycling those that are worn out/ torn/ not in good shape.
                        </p>
                    </div>
                </div>
                <div className="card">
                          <img src={whatWorkImg3}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">#Giving Away</h5>
                        <p className="card-text">
                            Curriculum based books to the children and other literary material to the grown-ups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
