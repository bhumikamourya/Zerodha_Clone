import React from 'react';
function CreateTicketSection() {
    return (
        <div className='container mt-4'>
            <div className='row p-5'>
                <div className='col-8'>
                    <div className=' input-group'>
                        <span class="input-group-text p-4 mb-4" style={{ backgroundColor: "rgba(243, 247, 250, 1)" }}>
                            <i class="fa-solid fa-plus" style={{ color: "rgb(69, 69, 214)" }} ></i></span>
                        <select class="form-select mb-4 select-opt" >
                            <option selected>Account Opening</option>
                            <option>Resident individual</option>
                            <option>Minor</option>
                            <option>Non Resident Indian (NRI)</option>
                            <option>Company, Partnership, HUF and LLP</option>
                            <option>Glossary</option>
                        </select>
                    </div>
                    <div className=' input-group'>
                        <span class="input-group-text p-4 mb-4"
                            style={{ backgroundColor: "rgba(243, 247, 250, 1)" }}>
                            <i class="fa-solid fa-circle-user" style={{ color: "rgb(69, 69, 214)" }}></i>
                        </span>
                        <select class="form-select mb-4" >
                            <option selected>Your Zerodha Account</option>
                            <option>Your Profile</option>
                            <option>Account modification</option>
                            <option>Client Master Report (CMR) and Depository Participant (DP)</option>
                            <option>Nomination</option>
                            <option>Transfer and conversion of securities</option>
                        </select>
                    </div>
                    <div className=' input-group'>
                        <span class="input-group-text p-4 mb-4" style={{ backgroundColor: "rgba(243, 247, 250, 1)" }}>
                            <i class="fa-solid fa-plus" style={{ color: "rgb(69, 69, 214)" }}></i></span>
                        <select class="form-select mb-4" >
                            <option selected>Kite</option>
                            <option>IPO</option>
                            <option>Trading FAQs</option>
                            <option>Margin Trading Facility (MTF) and Margins</option>
                            <option>Charts and orders</option>
                            <option>Alerts and Nudges</option>
                            <option>General</option>
                        </select>
                    </div>
                    <div className=' input-group'>
                        <span class="input-group-text p-4 mb-4"
                            style={{ backgroundColor: "rgba(243, 247, 250, 1)" }}>
                            <i class="fa-solid fa-indian-rupee-sign" style={{ color: "rgb(69, 69, 214)" }}></i></span>
                        <select class="form-select mb-4" >
                            <option selected>Funds</option>
                            <option>Add money</option>
                            <option>Withdraw money</option>
                            <option>Add bank accounts</option>
                            <option>eMandates</option>
                        </select>
                    </div>
                    <div className=' input-group'>
                        <span class="input-group-text p-4 mb-4"
                            style={{ backgroundColor: "rgba(243, 247, 250, 1)" }}>
                            <i class="fa-solid fa-circle-notch" style={{ color: "rgb(69, 69, 214)" }}></i></span>
                        <select class="form-select mb-4" >
                            <option selected>Console</option>
                            <option>Portfolio</option>
                            <option>Corporate actions</option>
                            <option>Funds statement</option>
                            <option>Reports</option>
                            <option>Profile</option>
                            <option>Segments</option>
                        </select>
                    </div>
                    <div className=' input-group'>
                        <span class="input-group-text p-4 mb-4"
                            style={{ backgroundColor: "rgba(243, 247, 250, 1)" }}>
                            <i class="fa-solid fa-coins" style={{ color: "rgb(69, 69, 214)" }}></i></span>
                        <select class="form-select mb-4" >
                            <option selected>Coin</option>
                            <option>Mutual funds</option>
                            <option>National Pension Scheme (NPS)</option>
                            <option>Fixed Deposit (FD)</option>
                            <option>Features on Coin</option>
                            <option>Payments and Orders</option>
                            <option>General</option>
                        </select>
                    </div>
                </div>
                <div className='col-4'>
                    <div className=' p-3 mb-3' style={{ backgroundColor: "rgba(252, 237, 225, 1)", borderLeft: "10px solid orange" }}>
                        <ul className='fs-6 ' style={{ textDecoration: "underline", color: "rgb(69, 69, 214)" }}>
                            <a href=''><li className='mb-3'>Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>
                            <a href=''><li>Revision in expiry day of Index and Stock derivatives contracts</li></a>
                        </ul>
                    </div>
                    <div className='border mt-4'>
                        <table class="table" >
                            <thead >
                                <tr>
                                    <th className='p-3' style={{ backgroundColor: "rgba(249, 250, 250, 1)" }}>Quick links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-3'><a href=''>1. Track account opening</a></td>
                                </tr>
                                <tr>
                                    <td className='p-3'><a href=''>2. Track segment activation</a></td>
                                </tr>
                                <tr>
                                    <td className='p-3'><a href=''>3. Intraday margins</a></td>
                                </tr>
                                <tr>
                                    <td className='p-3'><a href=''>4. Kite user manual</a></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div>
    );
}
export default CreateTicketSection;