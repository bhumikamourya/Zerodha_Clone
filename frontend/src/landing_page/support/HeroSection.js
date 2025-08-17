import React from 'react';
function HeroSection() {
    return (
        <main style={{ backgroundColor: "rgba(249, 247, 247, 1)" }}>
            <div className='container'>
                <div className='row p-5'>
                    <div className='support-head'>
                        <h1>Support Portal</h1>
                        <button type="button" class="btn btn-primary m-1">My tickets</button>
                    </div>
                    <div class="input-group  mt-4 ">
                        <span class="input-group-text p-4" style={{ backgroundColor: "white" }}><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Eg: How do I open my account, How do i activate F&O..."
                            aria-label="Search" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HeroSection;