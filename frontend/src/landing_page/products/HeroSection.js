import React from 'react';
function HeroSection() {
    return ( 
        <div className='container p-5 mb-5 border-bottom'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-2'>
                    Zerodha Products
                </h1>
                <p className='mt-2 fs-4 '>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-2' style={{ fontSize: "1.1em" }}>
                    Check out our <a href=''>investment offerings<i class="fa fa-arrow-right"></i></a>
                </p>
            </div>
        </div>
     );
}

export default HeroSection;