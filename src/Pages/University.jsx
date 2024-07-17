import React, { useEffect, useState } from 'react';
import { getFilterUniversity } from "../api/university";
import { Link , useNavigate} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { FaListCheck } from "react-icons/fa6";
import { IoMdGrid } from "react-icons/io";
import Footer from '../Components/Footer/Footer';
import { FaArrowRight } from "react-icons/fa6";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import { Dialog, DialogContent, DialogTitle, IconButton, Pagination, radioClasses, } from "@mui/material";
import 'animate.css';
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";
import { FaFilter } from "react-icons/fa";
export const University = () => {
  const [university, setUniversity] = useState([]);
  const pageSize = 8;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const navigate = useNavigate();

 


  useEffect(() => {
    getAllUniversityDetails();
  }, [pagination.from, pagination.to]);

  const getAllUniversityDetails = () => {
    const data = {
      limit: 8,
      page: pagination.from,
    };
    getFilterUniversity(data)
    .then((res) => {
      console.log(res?.data?.result?.universityList);
      setUniversity(res?.data?.result?.universityList);
      setPagination({
        ...pagination,
        count: res?.data?.result?.programCount,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };
  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };


 
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
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>EduFynd</title>
        <meta name="author" content="https://afynd.com/" />
        <meta
          name="description"
          content="We take care from Application to Acceptance. Our Overseas Education services include admission procedure, documentation, VISA assistance, Education Loan assistance from a reputed bank, pre/post departure service."
        />
        <meta
          name="keywords"
          content="Application to Acceptance, Overseas Education, admission procedure, VISA assistance, Education Loan assistance, pre/post departure service"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="assets/images/edufynd-fav-logo"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/edufynd-fav-logo"
        />
        <link rel="manifest" href="assets/img/favicons/manifest.php" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="assets/img/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />
    
<FixedEnquiry/>
<FixedWhatsapp/>

<div className="container-fluid position-relative my-5" style={{
        
        backgroundImage: `url('https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg')`,
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'center', // Center the background image
        height: '300px', // Set a height to see the background image
        backgroundColor:'rgba(0,0,0,0.5)',
        backgroundBlendMode:'multiply'
      }}>
  <div className="row">
    <div className="col-lg-12">
     
 
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="text-uppercase text-white text-center fs-2 fw-bold">University</div>
          <div className="d-flex flex-row align-items-center justify-content-center gap-3">
            <div>
              <a href="/" className="text-decoration-none text-white fs-5">
                Home
              </a>
            </div>
           
         
            <div className="text-white">
              <FaArrowRight />
            </div>
            <div className="text-white fs-5">University</div>
          </div>
        </div>
   
    </div>
  </div>
</div>



      <div className="container  position-relative " data-aos="zoom-in-up" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}>
        <div className="row">

        <div className="col ">
        <button class="btn btn-sm text-white px-4 py-2 fw-semibold text-uppercase " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" style={{fontSize:'13px',backgroundColor:'#fe5722',color:'#fff'}}> <span className="me-2"><FaFilter /></span> Filter</button>

<div class="offcanvas offcanvas-start border-0 shadow" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filter Program</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
 
       
         
         
            
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="exampleFormControlInput">Search by University Title</label>
                <input className="form-control" id="exampleFormControlInput" type="email" placeholder="Search by Program Title" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}/>
              </div>
              <div className="d-flex flex-row gap-3">
                <div className="form-check">
                  <input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">Public</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault"  style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}/>
                  <label className="form-check-label" htmlFor="flexRadioDefault2">Private</label>
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value="" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }} />
                <label className="form-check-label" htmlFor="flexCheckDefault">Scholarship</label>
              </div>
              <div className="py-1">
                <div className='fw-bold py-1'>Level of Interest</div>
                <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}>
                  <option defaultValue>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="py-1">
                <div className='fw-bold py-1'>Area of Specialisation</div>
                <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}>
                  <option defaultValue>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            
          
       
      

     

      <div className="row mt-3">
        <div className="d-flex flex-row align-items-center justify-content-end gap-3">
          <div>
            <button type="button" className="btn btn-danger text-white px-4 py-2 text-uppercase fw-semibold " style={{fontSize:'12px'}}>Apply</button>
          </div>
          <div>
            <button type="reset" className="btn btn-dark  text-white px-4 py-2 text-uppercase fw-semibold" style={{fontSize:'12px'}}>Reset</button>
          </div>
        </div>
      </div>
  </div>
</div>
  
</div>




          <div className="col-xl-12 justify-content-end align-items-center" data-aos="zoom-in">
            <div className="row">
              <div className="col">
                <div className="dropdown border-0  program-dropdown float-end">
                  <button className="btn btn-sm text-uppercase  fw-semibold px-4 py-2 dropdown-toggle" type="button"  aria-expanded="false" style={{fontSize:'13px',backgroundColor:'#231f20',color:'#fff'}} >
                    Sort By
                  </button>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    <ul class="nav " id="myTab" role="tablist"  style={{fontSize:'11px',color:'#231f20'}}>
                      <li class="nav-item"><a class="nav-link text-dark " id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true" ><FaListCheck /> List View</a></li>
                      <li class="nav-item"><a class="nav-link text-dark active" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false"> <IoMdGrid /> Grid View</a></li>

                    </ul>
                  </ul>
                </div>
              </div>
            </div>


            <div class="tab-content mt-3" id="myTabContent">
              <div class="tab-pane fade " id="tab-home" role="tabpanel" aria-labelledby="home-tab">

                <div className="row " >
                {university.map((data,index) => (
                    <div className="col-xl-12 " data-aos="fade-up"key={index}>
                      <div class="card mb-3 border-0 rounded-0 shadow-sm p-3  d-sm-none d-lg-block" style={{ height: '6rem' }}>
                        <div class="row g-0">
                          <div class="col-md-1">
                            <div className="text-center ">
                            <img  src={data?.universityLogo?data?.universityLogo:"https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"}  class="img-fluid rounded-pill  img-thumbnail mx-auto d-block " alt="..." style={{width:'4rem',height:'4rem'}} />
                            </div>

                          </div>
                          <div class="col-md-11">
                            <div class="card-body">
                              <div className="d-flex flex-row align-items-center justify-content-between ">
                                <h6 className="">{data.universityName}</h6>
                                <p className=" pt-2 ">Course Fee :{data?.averageFees}</p>
                                <p className="  pt-2 ">Course : {data?.courseType.join(", ") }</p>
                                <p className="  pt-2  ">Country :{data?.country}</p>
                                <p className="  pt-2 ">Intake : {data?.inTake.join(", ")}</p>

                                <Link  to={{ pathname: "/View-University", search: `?id=${data?._id}`, }} className="btn btn-sm text-white fw-semibold text-uppercase border-0 px-4 py-2" style={{ backgroundColor: '#fe5722', color: '#fff', fontSize: '12px' }}>View <i class="fa fa-eye ms-1" aria-hidden="true"></i></Link>

                              </div>

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                   <div className="float-end my-2">
                  <Pagination
                    count={Math.ceil(pagination.count / pageSize)}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                  />
                </div>
                </div>
              </div>
              <div class="tab-pane fade show active" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className="row g-4">
  {university.map((data,index) => (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index} data-aos="fade-up">
        <div className="card rounded-0 border-0 shadow-sm" style={{ fontSize: '12px',width:'15rem' }}>
          <div className="position-relative" style={{ backgroundColor: 'rgba(0,0,0,0.7)', mixBlendMode: 'multiply' }}>
            <img src={data?.banner?data?.banner:"https://hips.hearstapps.com/housebeautiful/assets/17/32/1502296150-royal-roads-university.jpg"} className="card-img-top img-fluid" alt="img" />
            <img src={data?.universityLogo?data?.universityLogo:"https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"} style={{ width: '5rem', height: '5rem', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} alt="no image" className="img-fluid rounded-pill img-thumbnail position-absolute" />
          </div>
          <div className="card-body">
            <h6 className="text-center">{data?.universityName}</h6>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column">
                <p className="">Course Fee: <b>{data?.averageFees}</b></p>
                <p className="">Course: <b>{data?.courseType.join(", ") }</b></p>
              </div>
              <div className="d-flex flex-column">
                <p className="">Country: <b>{data?.country}</b></p>
                <p className="">Intake: <b>{data?.inTake.join(", ") }</b></p>
              </div>
            </div>
            <div className="text-center">
            <Link to="/ViewUniversity" className="btn btn-sm text-white fw-semibold text-uppercase border-0 px-4 py-2" style={{ backgroundColor: '#fe5722', color: '#fff', fontSize: '12px' }}>View <i class="fa fa-eye ms-1" aria-hidden="true"></i></Link>

            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


            </div>

          </div>



        </div>
      </div>
      <Footer />
    </div>
  )
}
export default University