import React, { useEffect, useState } from 'react';
import { isValidEmail, isValidPhone } from '../../Utils/validataion';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {saveLoanEnquiry} from '../../api/loan';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
export const Financial = () => {

  const initialState = {
    name: "",
    country: "",
    universityName: "",  
    primaryNumber: "",
    email: "",
    studentId: "",
    message: "",
  }
  const initialStateErrors = {
    name:{ required: false },
    country:{ required: false },
    universityName:{ required: false },  
    primaryNumber:{ required: false },
    email:{ required: false },
    studentId:{ required: false },
    message:{ required: false },
  }
  const [open, setOpen] = useState(false);
  const [forex, setForex] = useState(initialState)
  const [errors, setErrors] = useState(initialStateErrors)
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleValidation = (data) => {
    let error = initialStateErrors;
    if (!data.name) {
      error.name.required = true;
    }
    if (!data.country) {
      error.country.required = true;
    }
    if (!data.universityName) {
      error.universityName.required = true;
    }  
    if (!data.primaryNumber) {
      error.primaryNumber.required = true;
    }
    if (!data.email) {
      error.email.required = true;
    }
    if (!isValidEmail(data.email)) {
      error.email.valid = true;
    }
    if (!isValidPhone(data.primaryNumber)) {
      error.primaryNumber.valid = true;
    }
   
    return error
  }

  const handleInputs = (event) => {
    const { name, value } = event.target
    setForex({ ...forex, [event?.target?.name]: event?.target?.value })
    if (submitted) {
      const newError = handleValidation({ ...forex, [event.target.name]: event.target.value })
      setErrors(newError)
    }
  }
  const handleErrors = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const prop = obj[key];
        if (prop.required === true || prop.valid === true) {
          return false;
        }
      }
    }
    return true;
  }

  const closeModal = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newError = handleValidation(forex);
    setErrors(newError);
    setSubmitted(true);
    if (handleErrors(newError)) {
      saveLoanEnquiry(forex)
        .then((res) => {
          toast.success("Enquiry Submitted Successfully");
          closeModal();
          navigate("/Financial-Aid");

        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };



  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title> Overseas Education Service in Chennai to Study Abroad</title>
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
    <Navbar/>
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
          <div className="text-uppercase text-white text-center fs-2 fw-bold">FINANCIAL AID</div>
          <div className="d-flex flex-row align-items-center justify-content-center gap-3">
            <div>
              <a href="/" className="text-decoration-none text-white fs-5">
                Home
              </a>
            </div>
            <div className="text-white">
              <FaArrowRight />
            </div>
            <div>
              <a href="/Service" className="text-decoration-none text-white fs-5">
                Services
              </a>
            </div>
            <div className="text-white">
              <FaArrowRight />
            </div>
            <div className="text-white fs-5">FINANCIAL AID</div>
          </div>
        </div>
   
    </div>
  </div>
</div>
<div className="container my-5">
    <div className="row">
        
        <h5 className="text-start text-uppercase fw-semibold " style={{color:'#fe5722'}}> OUR SERVICES</h5>
        <h1 className="text-start fw-bold">Financial Aid</h1>
        <div className="col-md-7">
        <p className="text-muted py-2" style={{textAlign:'justify'}}>
            At Edufynd, we recognize that financing your education is a critical aspect of your study abroad journey. That's why we offer expert guidance to help you discover suitable loan options, navigate interest rates, and determine your eligibility.</p>
        <h4 className="text-start fw-bold">Comprehensive Loan Assistance:</h4>
        <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-column ">
              <p class=" fw-semibold" style={{ color: '#0f2239', textAlign: 'justify' }}> <span className='pe-2' style={{ color: '#fe5722' }}><FaCircleCheck /></span> Loan Options </p>
            <p class=" fw-semibold" style={{ color: '#0f2239', textAlign: 'justify' }}> <span className='pe-2' style={{ color: '#fe5722' }}><FaCircleCheck /></span>Interest Rates</p>
            <p class=" fw-semibold" style={{ color: '#0f2239', textAlign: 'justify' }}> <span className='pe-2' style={{ color: '#fe5722' }}><FaCircleCheck /></span> Eligibility Assessment </p>
    
              </div>
         
            </div>
            <h4 className="text-start fw-bold">Crafting Persuasive Scholarship Essays:</h4>
        <p className="text-muted py-2" style={{textAlign:'justify'}}>
        In addition to loan assistance, we excel at crafting compelling scholarship essays that elevate your application.At EduFynd, our commitment is to provide holistic support, ensuring you have the financial resources needed to pursue your educational goals. From navigating loans to crafting standout scholarship essays, we're here to guide you every step of the way.</p>
        </div>
        
        <div className="col-md-5">
            <div className="h-100 text-center">
            <img src="https://st2.depositphotos.com/39091214/48280/i/450/depositphotos_482803198-stock-photo-word-admission-written-wooden-cubes.jpg" alt="" className="img-fluid  h-100 mx-auto d-block " />
            </div>
            
        </div>
        
    </div>
</div>
<div className="container my-5">
    <div className="row g-5 justify-content-center">
    <div className="col-md-4">
        <div className=" card h-100 position-relative  rounded-0 border-0 shadow-lg  p-3" >
           
            <div className="card-body ">
                <h5 className="card-title fw-bold" style={{color:'#0f2239'}}>Loan Options</h5>
                <p className="card-text" style={{color:'#0f2239',textAlign:'justify'}}>Our team specializes in identifying a range of loan options tailored to meet your specific financial needs, ensuring you have access to the resources necessary for your education.</p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
            <a href="" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:'#fe5722',color:'#fff'}}>Enquire Now</a>
            </div>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className=" card h-100 position-relative  rounded-0 border-0 shadow-lg  p-3" >
         
            <div className="card-body ">
                <h5 className="card-title fw-bold" style={{color:'#0f2239'}}>Interest Rates</h5>
                <p className="card-text" style={{color:'#0f2239',textAlign:'justify'}}>We provide insights into interest rates, helping you make informed decisions that align with your long-term financial goals.</p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
            <a href="" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:'#fe5722',color:'#fff'}}>Enquire Now</a>
            </div>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className=" card h-100 position-relative  rounded-0 border-0 shadow-lg  p-3" >
          
            <div className="card-body ">
                <h5 className="card-title fw-bold" style={{color:'#0f2239'}}>Eligibility Assessment</h5>
                <p className="card-text" style={{color:'#0f2239',textAlign:'justify'}}>Our experts conduct thorough eligibility assessments, guiding you toward loan solutions that match your financial situation.</p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
            <a href="" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:'#fe5722',color:'#fff'}}>Enquire Now</a>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Enquriy Form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="" className="p-2 needs-validation" novalidate style={{fontSize:'16px'}} onSubmit={handleSubmit}>

<div class="modal-body">
    <div className="row g-3 mb-3">
      <div className="col">
        <div className="form-floating">
        <input type="text" className='form-control' name='name' onChange={handleInputs} placeholder='Name' id="floatingInputGrid" />
        <label for='floatingInputGrid'>Name</label>
        {errors.name.required ? (
                  <div className="text-danger form-text">
                    This field is required.
                  </div>
                ) : null}
        </div>
       
      </div>
      <div className="col">
        <div className="form-floating">
        <input type="text" className='form-control' onChange={handleInputs} name='country' placeholder='Country' id="floatingInputGrid" />
        <label for='floatingInputGrid'>Country</label>
        {errors.country.required ? (
                  <div className="text-danger form-text">
                    This field is required.
                  </div>
                ) : null}
       
        </div>
       
      </div>
    </div>
    <div className="row g-3 mb-3">
      <div className="col">
        <div className="form-floating">
        <input type="text" className='form-control' name='universityName' onChange={handleInputs} placeholder='University' id="floatingInputGrid" required />
        <label for='floatingInputGrid'>University</label>
        {errors.universityName.required ? (
                  <div className="text-danger form-text">
                    This field is required.
                  </div>
                ) : null}
        </div>
       
      </div>
       <div className="col">
        <div className="form-floating">
        <input type="text" className='form-control' name='studentId' onChange={handleInputs}  placeholder='Student ID' id="floatingInputGrid" />
        <label for='floatingInputGrid'>Student ID</label>
        </div>
       
      </div>
    </div> 
    <div className="row g-3 mb-3">
      <div className="col">
        <div className="form-floating">
        <input type="text" name='email' onChange={handleInputs} className='form-control' placeholder='E-Mail' id="floatingInputGrid" />
        <label for='floatingInputGrid'>E-Mail</label>
        {errors.email.required ? (
                  <div className="text-danger form-text">
                    This field is required.
                  </div>
                ) : errors.email.valid ? (
                  <div className="text-danger form-text">
                    Enter valid Email Id.
                  </div>
                ) : null}
      
        </div>
       
      </div>
      <div className="col">
        <div className="form-floating">
        <input type="text" onChange={handleInputs} name='primaryNumber'  className='form-control' placeholder='Contact' id="floatingInputGrid" />
        <label for='floatingInputGrid'>Contact</label>
        {errors.primaryNumber.required ? (
                  <div className="text-danger form-text">
                    This field is required.
                  </div>
                ) : errors.primaryNumber.valid ? (
                  <div className="text-danger form-text">
                    Enter valid Contact Number.
                  </div>
                ) : null}
     
        </div>
       
      </div>
    </div>
    <div class="form-floating">
<textarea class="form-control" placeholder="Message" name='message' onChange={handleInputs} id="floatingTextarea" style={{height:'110px'}}></textarea>
<label for="floatingTextarea">Message</label>
</div>
 
</div>
<div class="modal-footer">
  <button type="button" class="btn  fw-semibold btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" class="btn fw-semibold "data-bs-dismiss="modal" style={{backgroundColor:'#fe5722',color:'#fff'}}>Submit</button>
</div>
</form>
      </div>
      
    </div>
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
export default Financial