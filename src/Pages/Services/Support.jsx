import React, { useEffect, useState } from 'react';
import { isValidEmail, isValidPhone } from '../../Utils/validataion';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {saveGeneralEnquiry} from '../../api/generalEnquiry';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import  FixedEnquiry from '../../Components/fixed compoents/FixedEnquiry'
import FixedWhatsapp from '../../Components/fixed compoents/FixedWhatsapp'
export const Support = () => {
  const initialState = {
    name: "",
    country: "",
    universityName: "",  
    mobileNumber: "",
    email: "",
    studentId: "",
    message: "",
  }
  const initialStateErrors = {
    name:{ required: false },
    country:{ required: false },
    universityName:{ required: false },  
    mobileNumber:{ required: false },
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
    if (!data.mobileNumber) {
      error.mobileNumber.required = true;
    }
    if (!data.email) {
      error.email.required = true;
    }
    if (!isValidEmail(data.email)) {
      error.email.valid = true;
    }
    if (!isValidPhone(data.mobileNumber)) {
      error.mobileNumber.valid = true;
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
      saveGeneralEnquiry(forex)
        .then((res) => {
          toast.success("Enquiry Submitted Successfully");
          closeModal();
          navigate("/Pre-and-Post-Support");

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
                Pre and Post Support
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
                  <div>
                    <Link
                      to=""
                      href="/Service"
                      className="text-decoration-none text-white fs-5"
                    >
                      Services
                    </Link>
                  </div>
                  <div className="text-white">
                    <FaArrowRight />
                  </div>
                  <div className="text-white fs-5">   Pre and Post Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="container my-5">
    <div className="row">
        
        <h5 className="text-start text-uppercase fw-semibold " style={{color:'#fe5722'}}> OUR SERVICES</h5>
        <h1 className="text-start fw-bold">Pre and Post Support</h1>
        <div className="col-md-7">
        <p className="text-muted py-2" style={{textAlign:'justify'}}>At EduFynd,your well-being is our priority. We're with you every step of the way, ensuring your study abroad experience is not only enriching academically but also smooth, supported, and memorable.From the Moment You Plan to the Day You Land, We've Got You Covered.</p>
        <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-column ">
              <p class=" fw-semibold" style={{ color: '#0f2239', textAlign: 'justify' }}> <span className='pe-2' style={{ color: '#fe5722' }}><FaCircleCheck /></span> Pre-Departure Guidance </p>
            <p class=" fw-semibold" style={{ color: '#0f2239', textAlign: 'justify' }}> <span className='pe-2' style={{ color: '#fe5722' }}><FaCircleCheck /></span>Pre-Departure Guidance</p>
            <p class=" fw-semibold" style={{ color: '#0f2239', textAlign: 'justify' }}> <span className='pe-2' style={{ color: '#fe5722' }}><FaCircleCheck /></span> Pre-Departure Guidance</p>
    
              </div>
             
           
            </div>
        </div>
        <div className="col-md-5">
            <div className="h-100 text-center">
            <img src="https://st2.depositphotos.com/39091214/48280/i/450/depositphotos_482803198-stock-photo-word-admission-written-wooden-cubes.jpg" alt="" className="img-fluid  h-100 mx-auto d-block " />
            </div>
            
        </div>
        
    </div>
</div>
<div className="container my-5">
    <div className="row g-5  justify-content-center">
    <div className="col-md-4">
        <div className=" card h-100 position-relative  rounded-0 border-0 shadow-lg  p-3" >
           
            <div className="card-body ">
                <h5 className="card-title fw-bold" style={{color:'#0f2239'}}>Pre-Departure Guidance</h5>
                <p className="card-text" style={{color:'#0f2239',textAlign:'justify'}}>Before you embark on your study abroad journey, our comprehensive pre-departure guidance equips you for success. We provide essential information, resources, and support to ensure you are well-prepared, confident, and ready to embrace your new academic adventure.</p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
            <a href="" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{backgroundColor:'#fe5722',color:'#fff'}}>Enquire Now</a>
            </div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <input type="text" onChange={handleInputs} name='mobileNumber'  className='form-control' placeholder='Contact' id="floatingInputGrid" />
        <label for='floatingInputGrid'>Contact</label>
        {errors.mobileNumber.required ? (
                  <div className="text-danger form-text">
                    This field is required.
                  </div>
                ) : errors.mobileNumber.valid ? (
                  <div className="text-danger form-text">
                    Enter valid Contact Number.
                  </div>
                ) : null}
     
        </div>
       
      </div>
    </div>
    <div className="row g-3 mb-3  ">
          <div className="col">
            <select
              class="form-select   "
              aria-label="Large select example"
              
            >
              <option selected>Type of Enquiry</option>
              <option value="Student Enquiry">Student Enquiry</option>
              <option value="Accommodation Enquiry">
                Accommodation Enquiry
              </option>
              <option value="Forex Enquiry">Forex Enquiry</option>
              <option value="Flight Ticket Enquiry">
                Flight Ticket Enquiry
              </option>
              <option value="Loan Enquiry">Loan Enquiry</option>
              <option value="Business Enquiry">Business Enquiry</option>
              <option value="Genaral Enquiry">Genaral Enquiry</option>
            </select>
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
    <div className="col-md-4">
        <div className=" card h-100 position-relative  rounded-0 border-0 shadow-lg  p-3" >
           
            <div className="card-body ">
                <h5 className="card-title fw-bold" style={{color:'#0f2239'}}>Post-Landing Support</h5>
                <p className="card-text" style={{color:'#0f2239',textAlign:'justify'}}>Upon your arrival, our commitment doesn't end. Our post-landing support is designed to facilitate a seamless transition into your new environment. From navigating cultural adjustments to understanding academic expectations, we're here to ensure your comfort and confidence as you begin this exciting chapter.</p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
            <a href="" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{backgroundColor:'#fe5722',color:'#fff'}}>Enquire Now</a>
            </div>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className=" card h-100 position-relative  rounded-0 border-0 shadow-lg  p-3" >
           
            <div className="card-body ">
                <h5 className="card-title fw-bold" style={{color:'#0f2239'}}>Stress-Free Housing Solutions</h5>
                <p className="card-text" style={{color:'#0f2239',textAlign:'justify'}}>We understand the importance of a comfortable living space. Our team goes the extra mile to help you find suitable housing that aligns with your preferences and budget, making sure your journey is stress-free right from the start.</p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
            <a href="" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{backgroundColor:'#fe5722',color:'#fff'}}>Enquire Now</a>
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
export default Support