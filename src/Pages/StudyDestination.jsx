import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import FixedEnquiry from '../Components/fixed compoents/FixedEnquiry'
import FixedWhatsapp from '../Components/fixed compoents/FixedWhatsapp'
import { Link } from 'react-router-dom';
export const StudyDestination = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Control animation duration
        once: true, // Whether animation should only happen once
        mirror: false // Whether elements should animate out while scrolling past them
    });
}, []);
  return (
    <div>
       <Helmet>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>EduFynd | University & Colleges Study Abroad Programs</title>
    <meta name="author" content="Afynd Private Limited" />
    <meta name="description" content="Want to study abroad? Get free expert advice and information on colleges, courses, exams, admission, student visa, and application process, visa filing and more" />
    <meta name="keywords" content="Want to study abroad? Get free expert advice and information on colleges, courses, exams, admission, student visa, and application process, visa filing and more" />
    <meta name="robots" content="INDEX,FOLLOW" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />

    <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/edufynd-fav-logo.png" />
    <link rel="manifest" href="/assets/img/favicons/manifest.html" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/assets/img/favicons/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Jost:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
  </Helmet>
      <Navbar/>    
     
      <FixedEnquiry/>
      <FixedWhatsapp/>
      <div className="container-fluid p-0 overflow-hidden">
        <div className="row ">
          <div className="col-12">
            <div class="card text-bg-dark rounded-0 ">
              <img
                src="https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg"
                class="card-img img-fluid "
                style={{ maxHeight: "23rem", mixBlendMode: "multiply" }}
                alt="admission_image"
              />
              <div class="card-img-overlay align-self-end">
                <div className="text-uppercase text-white text-center fs-2 fw-bold">
      Study Destinations
            </div>
                <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                  <div>
                    <Link
                      to=""
                      href="/"
                      className="text-decoration-none text-white fs-5"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="text-white">
                    <FaArrowRight />
                  </div>
               
                 
                  <div className="text-white fs-5"> Study Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container my-4" data-aos='zoom-in'>
          <div className="row justify-content-center">
            <div className="contet-header">
              <h5 className='text-center' style={{fontWeight:'bold',color:'#0f2239'}}> <span style={{fontWeight:'bolder'}}>S</span>tudy <span style={{fontWeight:'bolder'}}>A</span>broad <span style={{fontWeight:'bolder'}}>D</span>estination</h5>
              <h2 className='text-center'  style={{fontWeight:'bold',color:'#0f2239'}}>Choose the Best <span style={{color:'#fe5722',fontWeight:'normal'}}>Study Abroad Destination with EduFynd</span></h2>
            </div>
            <div className="row g-5 justify-content-center" data-aos='slide-right'>
            <div className="col-md-4">
           
            <div class="card  rounded-2  shadow-sm  position-relative" >
              <Link to="/Study-In-USA"  className=""> <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" class=" img-fluid img-thumbnail rounded-circle  mx-auto d-block " style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
 
  <div class="card-body">
    <h5 className="card-title text-center">Study In USA</h5>
    <div className=" ">
    <Link to="/Study-In-USA" className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle  px-4 py-2 " style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-UK"  className=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
  
              <div class="card-body">
    <h5 className="card-title text-center">Study In UK</h5>
    <div className=" ">
    <Link to="/Study-In-UK"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-Canada"  className=""><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
  
              <div class="card-body">
    <h5 className="card-title text-center">Study In Canada</h5>
    <div className=" ">
    <Link to="/Study-In-Canada"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            </div>
            <div className="row g-5 " data-aos='slide-right'> 
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-Australia"  className="">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/>
              </Link>
  
              <div class="card-body">
    <h5 className="card-title text-center">Study In Australia</h5>
    <div className=" ">
    <Link to="/Study-In-Australia"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-Ireland"  className=""><img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
  
              <div class="card-body">
    <h5 className="card-title text-center">Study In Ireland</h5>
    <div className=" ">
    <Link to="/Study-In-Ireland"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-New-Zealand"  className=""> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
 
              <div class="card-body">
    <h5 className="card-title text-center">Study In New Zealand</h5>
    <div className=" ">
    <Link to="/Study-In-New-Zealand"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            </div>
            <div className="row g-5" data-aos='slide-right'>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-Signapore"  className=""> <img src="https://img.freepik.com/free-photo/flag-singapore_1401-220.jpg" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
 
              <div class="card-body">
    <h5 className="card-title text-center">Study In Singapore</h5>
    <div className=" ">
    <Link to="/Study-In-Signapore"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
              <Link to="/Study-In-Europe"  className=""> <img src="https://t3.ftcdn.net/jpg/00/17/53/68/360_F_17536806_VTROYDmML98aIvVxL6RqzppcyaT4kB06.jpg" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
 
              <div class="card-body">
    <h5 className="card-title text-center">Study In Europe</h5>
    <div className=" ">
    <Link to="/Study-In-Europe"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card  rounded-2  shadow-sm  position-relative">
  <Link to="/Study-In-France"  className=""><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" class="  img-fluid img-thumbnail rounded-circle  mx-auto d-block "style={{width:'7rem',height:'7rem'}} alt="..."/></Link>
  <div class="card-body">
    <h5 className="card-title text-center">Study In France</h5>
    <div className=" ">
    <Link to="/Study-In-France"  className="btn btn-sm fw-semibold rounded-1 position-absolute top-100 start-50 translate-middle px-4 py-2" style={{backgroundColor:'#fe5722',color:'#fff',fontSize:'12px'}}>READ MORE <span className=' '> <FaArrowRightLong /></span></Link>
    </div>
   
    
  </div>
</div>
            </div>
            </div>
        
          </div>
        </div>
      <Footer/>
    </div>
  )
}
export default StudyDestination