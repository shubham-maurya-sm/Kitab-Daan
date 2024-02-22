import React from 'react'
import img from "../img/about-us.png"
import aboutImg1 from '../img/about-img1.jpg';  // Corrected import
import aboutImg2 from '../img/about-img2.jpg';  // Corrected import
import aboutImg3 from '../img/about-img3.jpg';

export default function AboutUs() {
  return (
    <div style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
//   background-repeat: no-repeat;
        filter: 'contrast(100%)'
      }}>
      <section className="container mt-5 mb-0 stackSection">
            {/* <h1 className="tc text-center" style={{color: 'blue', fontSize: '50px'}}>About Us</h1><hr /> */}
            <div className="grid" >
                <div className="row ">
                    <div className="col-sm-6 stacktext">
                        <p>One of the most meaningful ways a donation can help is by providing a person with the opportunity to study. They can use this knowledge to advance their lives, thus you awill have a hand in making someone’s life better, if not completely different. Additionally, it provides a way out for people who live in underprivileged homes and the ability to bring to much-needed happiness and satisfaction. In either case, you’ll be giving someone something far more important than money or things that enhance their appearance while giving books to someone who strengthens from the inside.
                        </p>
                        <p>It is hard for us to help everyone right away, but donating books to poor children is something we can do that will go a long way toward educating underprivileged children. After all, knowledge that is shared is the knowledge that is squared, and books are the medium for doing this successfully.
                        </p>
                        <p>While millions of children in India cannot afford the books they want to read, some privileged individuals have the same books on their shelves – books they have previously read.</p>
                    </div>
                    <div className="col-sm-6">
                        <div className="stack">
                            <div className="col grow">
                                  <img src={aboutImg1} className="" style={{width: '100%'}} alt="s" />
                            </div>
                            <div className="col shadow">
                                  <img src={aboutImg2} className="" style={{width: '100%'}} alt="s" />
                            </div>
                            <div className="col dim">
                                  <img src={aboutImg3} className="" style={{width: '100%'}} alt="a" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
