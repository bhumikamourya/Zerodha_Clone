import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className='container mt-5 '>
            <div className='row mt-5'>
                <div className='col-6 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5'>
                    <h1 className='fs-3 mb-3'>{productName}</h1>
                    <p style={{ lineHeight: "1.8", fontSize: "1.1em" }}>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try demo<i class="fa fa-arrow-right"></i> </a>
                    <a href={learnMore} className='mx-5'>
                        Learn more<i class="fa fa-arrow-right"></i> </a></div>
                    <div><a href={googlePlay}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png'  style={{ width: "35%" }} /></a>
                    <a href={appStore}><img src='media\images\appstoreBadge.svg' style={{ width: "30%" }} className='m-5'/></a></div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;