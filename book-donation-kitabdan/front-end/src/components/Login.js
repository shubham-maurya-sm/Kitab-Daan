import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import loginImage from '../img/login-image.png';
import loginMain from '../img/login-main.jpg';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
console.log("Clicked Login Button")

  const handleSubmit =async (event) => {
    event.preventDefault();
    const data = { email, password };
   const res =await fetch('http://https://kitabdaan.vercel.app//Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()).catch((error) => {
     console.error('Error:', error);
       
      });
      console.log(res)
      if(res.status){
        alert("Logged In Successfully")
        navigate("/Options")
      }
      else{
        alert("Invalid email and password");
      }
  };

  return (
    <section className="vh-90">
      <div className="container py-2 h-100">
      
        <div className="row d-flex  h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src={loginMain}
              className="img-fluid" alt="Login" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div className='align-items-center justify-content-center bg-light py-2 ' style={{
              backgroundImage: `url(${loginImage})`, backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              filter: 'contrast(100%)',
              height: '30vh', }} >
            {/* <h3 className="text-center py-5 ">Log in</h3> */}
              {/* <img className='bg-bg-transparent ' src="" alt="Log in" srcset="" /> */}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4 py-3">
                <input type="email" id="form1Example13" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="form-label" htmlFor="form1Example13">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form1Example23" className="form-control form-control-lg" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" htmlFor="form1Example23">Password</label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div> */}
                <Link to="/">Forgot password?</Link>
              </div>

              <button type="submit"  className="btn btn-primary btn-lg btn-block">Log in</button>

             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
