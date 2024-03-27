import React from "react";

function Malaysia() {
    return (
        <div style={{ padding: '25px' }}>
            {/* <h1 style={{color:'white'}}>Malaysia</h1> */}
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" style={{marginLeft:'auto',marginRight:'auto'}}>
                    <div class="card h-100" style={{ borderRadius: '10px' }}>
                        <img src="/images/twintower.jpg" class="card-img-top" alt="..." style={{ borderRadius: '10px',height:'300px' }} />
                        <div class="card-body" >
                            <h2 class="card-title" style={{textAlign:'center'}}>Malaysia</h2>
                            <p class="card-text">
                                Tower 3, 03-10-03, UOA Business Park <br />
                                No.1, Jalan Pengaturcar, U1/51A,<br />
                                Section U1, 40150 Shah Alam,<br />
                                Selangor Darul Ehsan, Malaysia.<br />
                                Tel: 603 50310635<br />
                                Email: info@vensyx.com<br />
                                website: www.vensyx.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Malaysia