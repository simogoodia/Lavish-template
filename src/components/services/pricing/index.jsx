import React from 'react';
import "./style.css";

function Pricing() {
    return (
        <div>
            <div className='pricing'>
                <h2 className='h2'>Pricing</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md price mt-4">
                            <i className="fa-solid fa-fire-flame-curved mb-4"></i>
                            <h4>Starter</h4>
                            <h1 className='mb-2'>$8.99</h1>
                            <h6 className='mb-5'>per month</h6>
                            <ul className='mb-5'>
                                <li>100 Transactions</li>
                                <li>2% Cash Back</li>
                                <li>$10.000 Limit</li>
                            </ul>
                            <button>Choose Plan</button>
                        </div>
                        <div className="col-md price mt-4 gold">
                            <i className="fa-solid fa-ring mb-4"></i>
                            <h4>Gold</h4>
                            <h1 className='mb-2'>$29.99</h1>
                            <h6 className='mb-5'>per month</h6>
                            <ul className='mb-5'>
                                <li>1000 Transactions</li>
                                <li>3.5% Cash Back</li>
                                <li>$100.000 Limit</li>
                            </ul>
                            <button>Choose Plan</button>
                        </div>
                        <div className="col-md price mt-4">
                            <i className="fa-solid fa-gem mb-4"></i>
                            <h4>Diamond</h4>
                            <h1 className='mb-2'>$99.99</h1>
                            <h6 className='mb-5'>per month</h6>
                            <ul className='mb-5'>
                                <li>Unlimited Transactions</li>
                                <li>5% Cash Back</li>
                                <li>Unlimited Spending</li>
                            </ul>
                            <button>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;