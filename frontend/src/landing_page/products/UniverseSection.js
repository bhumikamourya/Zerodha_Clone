import React from 'react';
function UniverseSection() {
    return (<div className='container p-5'>
        <div className='row text-center'>
            <p className='mt-4 fs-4 mb-5'>Want to know more about our technology stack? Check out the <a href=''>Zerodha.tech</a> blog.</p>
            <h1 className='mt-5 fs-2 mb-3'>
                The Zerodha Universe
            </h1>
            <p className='mt-2' style={{ fontSize: "1.1em" }}>
                Extend your trading and investment experience even further with our partner platforms
            </p>
            <div className='col-4 mt-5 p-5'>
                <a href='' className='mb-5 p-5' >
                    <img src='media\images\zerodhaFundhouse.png' style={{ width: "50%" }}  className='mb-4'/>
                    <p className='text-muted  mb-5' style={{fontSize:"0.8em"}}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </a>
                <a href='' className='mb-5 p-5'>
                    <img src='media\images\streakLogo.png' style={{ width: "50%" }}  className='mb-4'/>
                    <p className='text-muted  mb-5' style={{fontSize:"0.8em"}}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </a>
            </div>
            <div className='col-4 mt-5 p-5'>
                <a href='' className='mt-5 p-5'>
                    <img src='media\images\sensibullLogo.svg' style={{ width: "70%" }}  className='mb-4'/>
                    <p className='text-muted mb-5 ' style={{fontSize:"0.8em"}}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </a>
                <a href='' className='mb-5 p-5'>
                    <img src='media\images\smallcaseLogo.png' style={{ width: "70%" }}  className='mb-4'/>
                    <p className='text-muted  mb-5' style={{fontSize:"0.8em"}}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </a>
            </div>
            <div className='col-4 mt-5 p-5'>
                <a href='' className='mt-5 p-5'>
                    <img src='https://zerodha.com/static/images/partners/tijori.svg' style={{ width: "50%" }}  className='mb-4'/>
                    <p className='text-muted mb-5' style={{fontSize:"0.8em"}}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </a>
                <a href='' className='mb-5 p-5'>
                    <img src='media\images\dittoLogo.png' style={{ width: "50%" }}  className='mb-4'/>
                    <p className='text-muted mb-5' style={{fontSize:"0.8em"}}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </a>
            </div>
            <button className='p-2 btn btn-primary fs-5' style={{width:"15%" , margin: "0 auto"}}>Sign up for free</button>
        </div>

    </div>
    );
}

export default UniverseSection;