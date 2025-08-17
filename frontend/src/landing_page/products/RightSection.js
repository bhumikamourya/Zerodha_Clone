import React from 'react';
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-3 mb-3'>{productName}</h1>
                    <p style={{ lineHeight: "1.8", fontSize: "1.1em" }}>{productDescription}</p>
                    <a href={learnMore}>Learn more<i class="fa fa-arrow-right"></i> </a>
                </div>
                <div className='col-5 p-5' style={{marginTop:"-50px"}}>
                    <img src={imageURL} />
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default RightSection;