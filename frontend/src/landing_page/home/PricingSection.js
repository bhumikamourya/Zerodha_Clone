import React from 'react';
function PricingSection() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='fs-2 mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6 '>
                    <div className='row'>
                        <div className='col-4 p-5 text-center'>
                            <img src='media/images/pricing0.svg' />
                            <p className='text-muted'>Free account opening</p>
                        </div>
                        <div className='col-4 p-5 text-center'>
                            <img src='media/images/pricing0.svg' /><p className='text-muted'>Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='col-4 p-5 text-center'>
                            <img src='media/images/intradayTrades.svg' /><p className='text-muted'>Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
}

            export default PricingSection;