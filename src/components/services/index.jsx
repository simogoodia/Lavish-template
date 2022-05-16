import React from 'react';
import Secure from './secure';
import Pricing from './pricing';
import Footer from "../footer";

function Services() {
    return (
        <React.Fragment>
        <Pricing />
        <Secure />
        {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Services;