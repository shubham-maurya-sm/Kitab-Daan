import React from 'react';
import contactImage from '../img/contactus-img.png';

const ContactUs = () => (
  <div className="jumbotron jumbotron-sm">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-12">
          <div className='align-items-center justify-content-center bg-light py-2 ' style={{
            backgroundImage: `url(${contactImage})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            filter: 'contrast(100%)',
            height: '30vh',
          }} >
            </div>
          <h1 className="h1" style={{ textAlign: 'center' }}><small>Feel free to contact us</small>
          </h1>
          <h6>Thank you for visiting our website. We are always happy to hear from you and answer any questions you may have. Please fill out the form below and we will get back to you as soon as possible. You can also reach us by phone, email, or visiting the given office address. We look forward to hearing from you!</h6>
        </div>
      </div>
    </div>
  </div>
);

const Form = () => (
  <div className="container bg-transparent "  >
    <div className="row">
      <div className="col-md-8">
        <div className="well well-sm">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" className="form-control" required>
                    <option value="N/A" selected>Select</option>
                    <option value="complaints" >COMPLAINTS</option>

                    <option value="support" >SUPPORT</option>
                    <option value="feedback" >FEEDBACK</option>
                    <option value="others" >OTHERS</option>
                   
                   
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea name="message" id="message" className="form-control" rows="9" cols="25" required placeholder="Message"></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-4">
        <form>
          <legend><span className="glyphicon glyphicon-globe"></span> Our office</legend>
          <address>
            CCE Building, Institute of Professional Studies<br />
            Science-Faculty, University of Allahabad<br />
            Prayagraj 211002<br />
            <br />
            <strong><abbr title="Phone">Phone : </abbr>
            +91 81XXXXXX48</strong>
            
            
          </address>
          
          <address>
            <strong>Email : </strong><br />
            <a href="mailto:#">info@kitabdaan.in</a>
          </address>
        </form>
      </div>
    </div>
  </div>
);

const App = () => (
  <div>
    <ContactUs />
    <Form />
  </div>
);

export default App;
