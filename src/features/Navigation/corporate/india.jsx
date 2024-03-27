import React from "react";

function India() {
    return (
        <div style={{ padding: '25px' }}>
            {/* <h1 style={{ color: 'white' }}>India</h1> */}
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" style={{marginLeft:'250px'}}>
                        <div class="card h-100">
                            <img src="/images/buddastatue.jpg" class="card-img-top" alt="..." style={{ borderRadius: '10px',height:'300px' }}/>
                            <div class="card-body">
                                <h2 class="card-title">Hyderabad</h2>
                                <p class="card-text">
                                    Office 301, MSR Arcade, Patrika nagar, <br />
                                    Madhapur, Hyderabad-500081.<br />
                                    Tel: +91 9000316721<br />
                                    Email: info@vensyx.com<br />
                                    website: www.vensyx.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" >
                            <img src="/images/vizag.jpg" class="card-img-top" alt="..." style={{ borderRadius: '10px',height:'300px' }}/>
                            <div class="card-body">
                                <h2 class="card-title">Vishakapatnam</h2>
                                <p class="card-text">
                                    7-110/1, Prasanthi Nagar,<br />
                                    Pendurthy, Vishakapatnam-531173.<br />
                                    Tel: +91 9000316726<br />
                                    Email: info@vensyx.com<br />
                                    website: www.vensyx.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default India