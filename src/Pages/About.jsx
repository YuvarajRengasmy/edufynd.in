import React,{useEffect} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import journey2 from '../assets/images/about/journey2.jpg'
import about_ban2 from '../assets/images/about/about_ban2.jpg'
import team_1_1 from '../assets/images/about/team_1_1.jpg'
import team_1_2 from '../assets/images/about/team_1_2.jpg'
import team_1_3 from '../assets/images/about/team_1_3.jpg'
import team_1_4 from '../assets/images/about/team_1_4.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import FixedEnquiry from '../Components/fixed compoents/FixedEnquiry'
import FixedWhatsapp from '../Components/fixed compoents/FixedWhatsapp'
import { Link } from 'react-router-dom';
export const About = () => {
      
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
    <title>Your Trusted Partner For Overseas Education | Get Free Study Abroad Consultation</title>
    <meta name="author" content="https://afynd.com/" />
    <meta name="description" content="We offer the best study abroad consultant in Chennai and help students figure out the top world universities, courses, study abroad destinations, the best scholarships etc." />
    <meta name="keywords" content="" />
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
                About Us
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
               
                 
                  <div className="text-white fs-5">About</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    <div className="container my-5 py-5"  data-aos="fade">
      <div className="row g-5">
        <div className="col-lg-6 align-self-center"  data-aos="flip-up">
          <div className="text-center">
            <img src={journey2} alt="About image" className='img-fluid rounded-3' />
          </div>
        </div>
        <div className="col-lg-6 overflow-hidden"  data-aos="fade-up">
          <div>
            <p className="text-uppercase fs-4 fw-semibold" style={{color:'#fe5722'}}>EDTECH COMPANY</p>
            <h1 className='text-capitalize lh-sm' style={{color:'#231f20', fontWeight:'bolder'}}>
              Your Trusted Partner for International Education
            </h1>
            <div>
              <p className="lh-base" style={{textAlign:'justify'}}>
                In a rapidly globalizing world where education transcends boundaries, EduFynd Global Private Limited stands as a premier overseas education service provider in Chennai. Committed to sculpting the dreams of students aspiring for international education, EduFynd has solidified its position by fostering partnerships across the globe, spanning the UK, USA, Canada, Australia, New Zealand, Ireland, Singapore, and European countries.
              </p>
              <p className="lh-base" style={{textAlign:'justify'}}>
                With a robust presence and extensive experience, EduFynd is recognized as a leading ed-tech company in Chennai. Facilitating student recruitment for over 500+ institutional partners worldwide, we meticulously process applications, considering academic backgrounds, study interests, and future plans. We evaluate universities based on course quality, faculty strength, infrastructure, and facilities to ensure an optimal learning environment and enhance students' academic and career prospects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="container my-5" >
            <div className="row g-5">
                <div className="col-md-4" data-aos='slide-up'>
                    <div className="card rounded-0 border-0 shadow position-relative h-100 p-2" >
                          <div className="card-body">
                            <div className="card-title">
                                <h4 className="text-capitalize text-center fw-bold">who we are</h4>
                                <div className="card-text px-4" style={{textAlign:"justify"}}>
                                    <p className="lh-lg ">
                                    Edufynd has been a trusted partner for students seeking education opportunities across the globe. Over the years, we have facilitated admissions for various academic pursuits including undergraduate, postgraduate, IT, engineering, medicine, and more, in over 500+ esteemed universities and colleges spanning across 25+ countries.
                                    </p>
                                </div>
                                <button className=" btn position-absolute top-100 p-2 start-50 translate-middle rounded-circle px-3 pb-3 pt-2" style={{backgroundColor:'#fe5722',color:'white'}}><FaArrowRight /></button>
                            </div>
                          </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos='slide-up'>
                    <div className="card rounded-0 border-0 shadow position-relative h-100 p-2">
                          <div className="card-body">
                            <div className="card-title">
                                <h4 className="text-capitalize text-center fw-bold">what we offer</h4>
                                <div className="card-text px-4" style={{textAlign:"justify"}}>
                                    <p className="lh-lg ">
                                    We understand that the complexities of studying abroad can be daunting, which is why we serve as a dependable guide and companion throughout the entire process for students aspiring to Study Abroad.Our spectrum of services includes University & Course Shortlisting, Entrance Exam Support, Admission Assistance,Visa Counseling, and Accommodation assistance, Loan and Scholarship Assistance, Interview Support, Forex Support.
                                    </p>
                                </div>
                                <button className=" btn position-absolute top-100 p-2 start-50 translate-middle rounded-circle px-3 pb-3 pt-2" style={{backgroundColor:'#fe5722',color:'white'}}><FaArrowRight /></button>
                            </div>
                          </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos='slide-up'>
                    <div className="card rounded-0 border-0 shadow position-relative h-100 p-2" >
                          <div className="card-body">
                            <div className="card-title">
                                <h4 className="text-capitalize text-center fw-bold"> we Coordinate</h4>
                                <div className="card-text px-4" style={{textAlign:"justify"}}>
                                    <p className="lh-lg ">
                                    At EduFynd, we take care of every aspect of the education journey. From handling admission procedures and documentation to providing VISA assistance, education loan facilitation from reputable banks,travel assistance, safe accommodation assistance abroad and we ensure a seamless transition for students. Our services extend to conducting spot admission sessions, and hosting educational fairs both domestically and internationally.
                                    </p>
                                </div>
                                <button  className=" btn position-absolute top-100 p-2 start-50 translate-middle rounded-circle px-3 pb-3 pt-2" style={{backgroundColor:'#fe5722',color:'white'}}><FaArrowRight /></button>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3" data-aos='zoom-in'>
            <div className="row g-3">
                <div className="col-sm-12">
                    <Link to='/'  className='btn text-uppercase d-block fw-bold' style={{backgroundColor:'#fe5722',color:'white'}}> read more <FaArrowRight /> </Link>
                </div>
            </div>
        </div>
        <div className="container my-5" data-aos='zoom-in'>
            <div className="row justify-content-center g-3">
                <div className="col-sm-12">
                    <div className="text-center">
                        <h4 className='text-uppercase fw-semibold' style={{ color: '#fe5722' }}>
                            OVERSEAS EDUCATION CONSULTANTS FOR STUDYING ABROAD
                        </h4>
                        <h2 className="fw-semibold">
                            Enhance access to <span className='fw-normal' style={{ color: '#fe5722' }}>International Education</span> for everyone.
                        </h2>
                    </div>
                </div>
                <div className="row g-3"  data-aos='slide-right'>
                    <div className="col-md-6">
                        <div>
                            <h4 className="text-center fw-semibold text-capitalize">Our Vision</h4>
                        </div>
                        <div className="px-3 mt-3">
                            <p className="lh-base" style={{ textAlign: 'justify' }}>
                                Our vision is to revolutionize the Study Abroad Service Sector by continually innovating student services, connecting institutions, recruiters, and students globally. We aspire to be the market leader, offering one-stop study abroad solutions, providing students with proper career counseling and guidance to help them achieve their goals. We aim to add value for our partner institutions and all other stakeholders.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4 className="text-center fw-semibold text-capitalize">Our Mission</h4>
                        </div>
                        <div className="px-3 mt-3">
                            <p className="lh-base" style={{ textAlign: 'justify' }}>
                                Our mission is to establish a global EdTech ecosystem where universities can showcase their best offerings, allowing partners and students to select what best fits their needs. We're democratizing global education through our innovative online platform, powered by cutting-edge technology yet distinguished by a personal touch. By transcending international boundaries daily, we're enabling stakeholders to harness our market reach and expertise to surpass their business objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid about_ban1"  data-aos='zoom-in'>
            <div className="row g-4 align-items-center">
                <div className="col-md-10 p-4">
                    <div className="container p-5">
                        <h4 className="text-white fw-semibold">
                            <span style={{ color: '#fe5722' }}>EduFynd</span> is an emerging 
                            <span style={{ color: '#fe5722' }}> Edtech company</span>
                        </h4>
                        <p className="lh-base text-white">
                            Facilitating admissions to premier international universities and colleges. Our team of seasoned counselors and mentors is committed to crafting strong and distinctive student profiles.
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="align-items-center justify-content-center text-center">
                        <Link to="/Service" className="btn btn-sm btn-transparent btn-outline-light px-2 py-2 text-capitalize">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-4"  data-aos='zoom-in'>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="mx-auto d-block mt-5">
                        <img src={about_ban2} alt="image" className='img-fluid rounded-3' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h3 className="fw-light" style={{ color:'#fe5722' }}>Let's Shape The Future Of</h3>
                        <h3 className='fw-bold'>Education Together</h3>
                        <p className="lh-base" style={{ textAlign:'justify' }}>
                            At EduFynd, we transcend the role of mere advisors we are inspirers. Our belief is that the world is our classroom, and within it, possibilities are boundless. Join us on this journey where education becomes a transformative force, shaping not just careers but entire lives.
                        </p>
                        <p className="lh-base" style={{ textAlign:'justify' }}>
                            From meticulous test preparation and program selection guidance to invaluable admission assistance, loan and visa application support, and seamless departure-landing services, our commitment extends beyond enrollment—providing continuous assistance until degree completion.
                        </p>
                        <p className="lh-base" style={{ textAlign:'justify' }}>
                            As a leader in overseas education services, EduFynd Global Private Limited envisions a future where every student has the opportunity to explore the world through education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      


        <div className="container my-4">
            <div className="row g-3">
                <div className="col-12">
                    <h6 className="text-uppercase text-center h5 fw-bold" style={{ color:'#fe5722' }}>OUR COUNSELLORS</h6>
                    <h3 className="text-capitalize text-center" style={{ fontWeight:'bold' }}>Meet Our Expert Counsellors</h3>
                </div>
                <div className="row g-3">
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="text-center position-relative">
                                <img src={team_1_1} alt="image" className="mx-auto d-block img-fluid rounded-pill border border-success p-3 border-2 border-bottom-0" style={{ width:'250px', height:'250px' }} />
                                <div className="position-absolute top-50 start-50 translate-middle rounded-circle px-3 pt-2 pb-3" style={{ backgroundColor:'#fe5722', color:'white', cursor:'pointer' }}><FaPlus /></div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4 className="text-capitalize text-center fw-bold">Lily Michelle</h4>
                                </div>
                                <div className="card-text"><p className="text-center fw-normal" style={{ color:'#fe5722', fontSize:'13px' }}>Founder & CEO</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="text-center position-relative">
                                <img src={team_1_2} alt="image" className="mx-auto d-block img-fluid rounded-pill border border-success p-3 border-2 border-bottom-0" style={{ width:'250px', height:'250px' }} />
                                <div className="position-absolute top-50 start-50 translate-middle rounded-circle px-3 pt-2 pb-3" style={{ backgroundColor:'#fe5722', color:'white', cursor:'pointer' }}><FaPlus /></div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4 className="text-capitalize text-center fw-bold">Lily Michelle</h4>
                                </div>
                                <div className="card-text"><p className="text-center fw-normal" style={{ color:'#fe5722', fontSize:'13px' }}>Founder & CEO</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="text-center position-relative">
                                <img src={team_1_3} alt="image" className="mx-auto d-block img-fluid rounded-pill border border-success p-3 border-2 border-bottom-0" style={{ width:'250px', height:'250px' }} />
                                <div className="position-absolute top-50 start-50 translate-middle rounded-circle px-3 pt-2 pb-3" style={{ backgroundColor:'#fe5722', color:'white', cursor:'pointer' }}><FaPlus /></div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4 className="text-capitalize text-center fw-bold">Lily Michelle</h4>
                                </div>
                                <div className="card-text"><p className="text-center fw-normal" style={{ color:'#fe5722', fontSize:'13px' }}>Founder & CEO</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <div className="text-center position-relative">
                                <img src={team_1_4} alt="image" className="mx-auto d-block img-fluid rounded-pill border border-success p-3 border-2 border-bottom-0" style={{ width:'250px', height:'250px' }} />
                                <div className="position-absolute top-50 start-50 translate-middle rounded-circle px-3 pt-2 pb-3" style={{ backgroundColor:'#fe5722', color:'white', cursor:'pointer' }}><FaPlus /></div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4 className="text-capitalize text-center fw-bold">Lily Michelle</h4>
                                </div>
                                <div className="card-text"><p className="text-center fw-normal" style={{ color:'#fe5722', fontSize:'13px' }}>Founder & CEO</p></div>
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
export default About