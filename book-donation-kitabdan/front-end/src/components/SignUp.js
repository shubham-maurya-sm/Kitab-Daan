import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import signupImage from '../img/signup-img.png';
import signupBgImage from '../img/signUpBg.jpg';


function CreateAccount() {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        userType: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };
    const navigate=useNavigate();
    const  handleSubmit =async (e) => {
        e.preventDefault();
      const temp =await fetch('http://localhost:5000/SignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
            console.log(temp)
            if(temp.status){
                alert("Account Created Successfully !!!");
                navigate("/Login");
            }
            else{
                alert("failed")
            }
    };

    return (
        <div style={{ backgroundImage: `url(${signupBgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: "center", filter: 'contrast(100%)' }}>
            <style>
          {`
            .divider-text {
                position: relative;
                text-align: center;
                margin-top: 15px;
                margin-bottom: 15px;
            }
            .divider-text span {
                padding: 7px;
                font-size: 12px;
                position: relative;   
                z-index: 2;
            }
            .divider-text:after {
                content: "";
                position: absolute;
                width: 100%;
                border-bottom: 1px solid #ddd;
                top: 55%;
                left: 0;
                z-index: 1;
            }
            
            .btn-facebook {
                background-color: #405D9D;
                color: #fff;
            }
            .btn-twitter {
                background-color: #42AEEC;
                color: #fff;
            }
          `}
        </style>
            <article className="card-body mx-auto" style={{ maxWidth: '41vw' }}>
                {/* <h1 className="text-center">Sign Up</h1> */}
                
                    <div className='align-items-center justify-content-center  py-2 ' style={{
                    backgroundImage: `url(${signupImage})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        filter: 'contrast(100%)',
                        height: '30vh',
                    }} >
                        {/* <h3 className="text-center py-5 ">Log in</h3> */}
                        {/* <img className='bg-bg-transparent ' src="" alt="Log in" srcset="" /> */}
                    </div>
                   
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="fullName" className="form-control" placeholder="Full name" type="text" onChange={handleChange} value={formState.fullName} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="email" className="form-control" placeholder="Email address" type="email" onChange={handleChange} value={formState.email} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select" style={{ maxWidth: '120px' }}>
                            <option selected="">+91</option>

                        </select>
                        <input name="phone" className="form-control" placeholder="Phone number" type="text" onChange={handleChange} value={formState.phone} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                        </div>
                        <select name="userType" className="form-control" onChange={handleChange} value={formState.userType}>
                            <option selected=""> Select User type</option>
                            <option>DONOR/RECEIVER</option>
                            <option>NGO</option>
                            <option>INSTITUTIONS/COLLEGES</option>

                        </select>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input name="password" className="form-control" placeholder="Create password" type="password" onChange={handleChange} value={formState.password} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input name="confirmPassword" className="form-control" placeholder="Repeat password" type="password" onChange={handleChange} value={formState.confirmPassword} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <Link to="/Login">Log In</Link> </p>
                </form>
            </article>
        </div>
    );
};

export default CreateAccount;
