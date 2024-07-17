import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Footer_Logo from '../../assets/EduFynd.png'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <div className="container-fluid  " style={{ background: "#0f2239",fontSize:'14px' }}>
        <div className="container py-3">
          <div className="row ">
            <div className="col-md-3">
              <div className="mt-5 text-white">
                <img
                  src={Footer_Logo}
                  alt="no img"
                  className="bg-transparent"
                  style={{ width: "200px" }}
                />
              </div>
              <div className="my-3">
                <div className="text-white">
                  EduFynd is an Edtech company that helps students achieve their
                  study abroad dreams. Join us in crafting a world where
                  education transcends borders.
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="two text-uppercase fs-5 fw-semibold mt-5 ">
                {" "}
                india office
              </div>
              <div>
                <hr className=" w-25 " style={{height:'3px',borderWidth:'0',color:'#fff',backgroundColor:'#fff'}} />
              </div>
              <div className="text-white text-left mt-4 px-2">
                <span className="two">
                  <FaLocationDot />
                </span>{" "}
                17/3A2, Gandhi St,<br/> Alwartirunagar, Chennai - 600087, Tamil Nadu,
                India.
              </div>
              <div className="text-white mt-4">
                <span className="two">
                  <IoCall />
                </span>{" "}
                +91 9840591820
              </div>
            </div>
            <div className="col-md-3">
              <div className="two text-uppercase fs-5 fw-semibold mt-5 ">
                global office(usa)
              </div>
              <div>
              <hr className=" w-25 " style={{height:'3px',borderWidth:'0',color:'#fff',backgroundColor:'#fff'}} />
              </div>
              <div className="text-white text-left mt-4 px-2">
                <span className="two">
                  <FaLocationDot />
                </span>{" "}
                712 H Street NE, Suite 1110, Washington, DC - 20002,<br/> United
                States of America.
              </div>
              <div className="text-white mt-4">
                <span className="two">
                  <IoCall />
                </span>{" "}
                +1(302)213-6277
              </div>
            </div>
            <div className="col-md-3">
              <div className="two text-uppercase fs-5 fw-semibold mt-5 ">
                Global office(uk)
              </div>
              <div>
              <hr className=" w-25 " style={{height:'3px',borderWidth:'0',color:'#fff',backgroundColor:'#fff'}} />
              </div>
              <div className="text-white text-left mt-4 px-2">
                <span className="two">
                  <FaLocationDot />
                </span>{" "}
                17 King Edwards Road,<br/>
Ruislip, London,HA4-7AE,<br/>
United Kingdom.
              </div>
              <div className="text-white mt-4">
                <span className="two">
                  <IoCall />
                </span>
                +44  74243 89587
              </div>
            </div>
          </div>
          </div>
  
          </div>
          <div className="container-fluid" style={{background:'#0f2239'}} >
          <div className="row">
        <hr className="text-white p-0" />
             <div className="col-md-4 ">
              <div className="container">
              <div className="d-flex align-items-center justify-content-evenly">
            <div className="mb-3 mt-2"><Link to="#"><span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6"><FaFacebook /></span></Link></div> 
             <div className="mb-3 mt-2"><Link to="#"><span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6"><FaLinkedinIn /></span></Link></div>
             <div className="mb-3 mt-2"><Link to="#"><span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6"><FaInstagram /></span></Link></div>
             <div className="mb-3 mt-2"><Link to="#"><span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6"><FaYoutube /></span></Link></div>
             <div className="mb-3 mt-2"><Link to="#"><span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6"><FaTwitter /></span></Link></div>
            </div>
              </div>
            
           
             </div>
             <div className="col-md-8">
              <div className="text-white text-capitalize fw-semibold text-center mt-2"><span><FaRegCopyright /></span> 2024 all rights reserved <span className="two">edufynd</span></div>
             </div>
          </div>
    
      </div>
    </div>
  );
};
export default Footer;
