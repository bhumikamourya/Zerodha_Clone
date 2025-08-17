import React from 'react';
function AwardsSection() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <img src='media/images/largestBroker.svg' />
                    </div>
                    <div className='col-6'>
                        <h1 className='fs-2 mb-4'>Largest stock broker in india</h1>
                        <p className='mb-2'>2+ million Zerodha clients contribute to over 15% of all retial order volumns in india daily by trading and investing in:</p>
                        <div className='row'>
                            <div className='col-6 p-5'>
                                <ul>
                                    <li><p>Future and Options</p></li>
                                    <li><p>Commodity derivatives</p></li>
                                    <li><p>Currency derivatives</p></li>
                                </ul>
                            </div>
                            <div className='col-6 p-5'>
                                <ul>
                                    <li><p>Stock % IPOs</p></li>
                                    <li><p>Direct mutual funds</p></li>
                                    <li><p>Bonds and Govt. Securities</p> </li>
                                </ul>
                            </div>
                        </div>
                         <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AwardsSection;