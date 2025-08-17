import React from 'react';
function TeamSection() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col text-center'>
                    <img src='media/images/nithinKamath.jpg' className='p-3' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 mb-3'>Nithin Kamath</h3>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col text-muted' style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                    <h3 className='fs-3 mb-5'>People</h3>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
                </div>
            </div>
            <div className='row'>
                <div className='col p-3 text-center'>
                    <img src='https://zerodha.com/static/images/Nikhil.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Nikhil Kamath</h3>
                    <p className='text-muted'>Co-founder & CFO</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                    <img src='https://zerodha.com/static/images/Hanan.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Hanan Delvi</h3>
                    <p className='text-muted'>CCO</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                    <img src='https://zerodha.com/static/images/Austin.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Austin Prakesh</h3>
                    <p className='text-muted'>Director Strategy</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                </div>
                <div className='col p-3 text-center'>
                    <img src='https://zerodha.com/static/images/Kailash.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Dr. Kailash Nadh</h3>
                    <p className='text-muted'>CTO</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                    <img src='https://zerodha.com/static/images/Seema.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Seema Patil</h3>
                    <p className='text-muted'>Director</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                </div>
                <div className='col p-3 text-center'>
                    <img src='https://zerodha.com/static/images/Venu.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Venu Madhav</h3>
                    <p className='text-muted'>COO</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                    <img src='https://zerodha.com/static/images/karthik.jpg' style={{ borderRadius: "50%", width: "58%" }} />
                    <h3 className='fs-5 '>Karthik Rangappa</h3>
                    <p className='text-muted'>Chief of Education</p>
                    <p className='text-muted mb-5'>Bio <i class="fa-solid fa-angle-down"></i></p>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;