import React from 'react';
import "./style.css";
import SignUp from '../signUp';
import Secure from "../services/secure";
import Pricing from '../services/pricing';
import Products from "../products";

function Home() {
    return (
        <React.Fragment>
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md col-one">
                            <h4 className='mb-3'>EXCLUSIVE ACCESS</h4>
                            <h2 className='mb-3'>Unlimited Transactions <br /> with zero fees</h2>
                            <p className='mb-4'>Get access to our exclusive diamond card that allows you to send unlimited transactions without getting changed any fees</p>
                            <button>Get Started</button>
                        </div>
                        <div className="col-md col-two">
                            <img src="/lavish-template/images/svg-1.svg" alt="Credit Card" />
                        </div>
                    </div>
                </div>
            </div>
            <SignUp />
            <Secure />
            <Pricing />
            <Products />
        </React.Fragment>
    );
}

export default Home;