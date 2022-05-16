import React from "react";
import "./style.css";

function Secure() {
    return (
        <>
            <div className="secure">
                <div className="container">
                    <div className="row">
                        <div className="col-md col-one">
                            <h4 className='mb-3'>100% SECURE</h4>
                            <h2 className='mb-3'>Stay protected 24/7 <br /> anywhere anytime</h2>
                            <p className='mb-4'>We have covered no matter where you are located. <br /> Over 140 locations worldwide to ensure you have access anytime</p>
                            <button>Learn More</button>
                        </div>
                        <div className="col-md col-two">
                            <img src="/lavish-template/images/svg-5.svg" alt="Credit Card" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Secure;