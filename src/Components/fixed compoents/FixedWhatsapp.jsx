import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
export const FixedWhatsapp = () => {
  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col">
      <a href="https://api.whatsapp.com/send/?phone=919840591820&text&type=phone_number&app_absent=0">
        <div className="whatsapp-bottom" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
          <div className="logo rounded-pill badge rounded-pill ps-2 pb-2 pt-2 pe-2 text-white " style={{ backgroundColor: 'rgb(37, 211, 102)', color: '#fff',fontSize:'23px',width:'3rem',height:'3rem' }}>
            <span className='align-self-center ' ><FaWhatsapp/></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
    </>
  )
}
export default FixedWhatsapp