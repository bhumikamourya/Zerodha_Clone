import React from 'react';
function HeroSection() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mt-5 p-5'>
                <h1 className='fs-2 mb-3'>Charges</h1>
                <p className='fs-5 mb-5' style={{color:" rgba(174, 173, 173, 1)"}}>List of all charges and taxes</p>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricing0.svg' style={{width:"70%"}} className='mt-5'/>
                    <h1 className='fs-2 mb-3 mt-4'>Free equity delivery</h1>
                    <p className='fs-6 mb-5 '>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                     <img src='media\images\intradayTrades.svg' style={{width:"70%"}} className='mt-5'/>
                    <h1 className='fs-2 mb-3 mt-4'>Intraday and F&O trades</h1>
                    <p className='fs-6 mb-5'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricing0.svg' style={{width:"70%"}} className='mt-5'/>
                    <h1 className='fs-2 mb-3 mt-4'>Free direct MF</h1>
                    <p className='fs-6 mb-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default HeroSection;