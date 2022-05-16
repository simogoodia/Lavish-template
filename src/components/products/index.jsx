import React from 'react';
import "./style.css";
import Footer from "../footer";

function Products() {
    return (
        <React.Fragment>
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md col-one">
                            <img src="/lavish-template/images/svg-8.svg" alt="Credit Card" />
                        </div>
                        <div className="col-md col-two">
                            <h4 className='mb-3'>DATA ANALYTICS</h4>
                            <h2 className='mb-3'>Every transaction is stored  on our secure cloud database <br /> with zero fees</h2>
                            <p className='mb-4'>Never ever have to worry again about saved receipts. We <br /> store your data, so you can access it anytime</p>
                            <button>Sign Up Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Products;
