import React from 'react'
function Head() {
  return (
    <div>
        <section className='head'>
            <div className="container flexSB">
                 <div className="logo">
                    <h1><em>Bin_<span >Edk</span></em></h1>
                 </div>
                 <div className="social">
                    <a href={`https://web.whatsapp.com/send?phone=${676845890}`} style={{color:"black",fontFamily:"initial" ,fontWeight:600,fontSize:"25px",cursor:"pointer"}}>+212 0676845890</a>
                    <a ><i className='fab fa-whatsapp icon'></i></a>
                 </div>
            </div>
        </section>
    </div>
  )
}

export default Head ;