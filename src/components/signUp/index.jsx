import React from 'react';
import "./style.css";
import Footer from "../footer";

function SignUp() {
    return (
        <React.Fragment>
            <div className="sign-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md col-one">
                            <img src="/lavish-template/images/svg-7.svg" alt="Paper" />
                        </div>
                        <div className="col-md col-two">
                            <h4 className='mb-3'>EASY SETUP</h4>
                            <h2 className='mb-3'>Super fast and simple <br /> onboarding process</h2>
                            <p className='mb-4'>Get everything set-up and ready in under 10 minutes, All you need to do is add your information and you're ready to go</p>
                            <button>Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default SignUp;