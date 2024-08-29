import React, { useEffect, useState } from "react";
import { isValidEmail, isValidPhone } from "../Utils/validataion";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { saveGeneralEnquiry } from "../api/generalEnquiry";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa6";
import envelope from "../assets/bootstrap icons/envelope.svg";
import geo_alt from "../assets/bootstrap icons/geo-alt.svg";
import telephone from "../assets/bootstrap icons/telephone.svg";
import { Helmet } from "react-helmet";
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";
import { getallCode } from "../api/counteyCode";

const Contact = () => {
  const initialState = {
    name: "",
    mobileNumber: "",
    email: "",
    dial1:"",
    message: "",
    typeOfUser: "",
  };

  const initialStateErrors = {
    name: { required: false },
    dial1:{ required: false },
    mobileNumber: { required: false },
    typeOfUser: { required: false },
    email: { required: false, valid: false },
    message: { required: false },
  };

  const [forex, setForex] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErrors);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [dial, setDial] = useState([]);
  useEffect(() => {
   
    getallCodeList();
  }, []);
  const getallCodeList = () => {
    getallCode()
      .then((res) => {
        setDial(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleValidation = (data) => {
    let error = { ...initialStateErrors };

    if (!data.name) {
      error.name.required = true;
    }
    if (!data.typeOfUser) {
      error.typeOfUser.required = true;
    }
    if (!data.mobileNumber) {
      error.mobileNumber.required = true;
    } else if (!isValidPhone(data.mobileNumber)) {
      error.mobileNumber.valid = true;
    }
    if (!data.email) {
      error.email.required = true;
    } else if (!isValidEmail(data.email)) {
      error.email.valid = true;
    }
    if (!data.message) {
      error.message.required = true;
    }

    return error;
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setForex({ ...forex, [name]: value });
    if (submitted) {
      const newError = handleValidation({ ...forex, [name]: value });
      setErrors(newError);
    }
  };

  const handleErrors = (obj) => {
    return Object.values(obj).every((field) => !field.required && !field.valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newError = handleValidation(forex);
    setErrors(newError);
    setSubmitted(true);
    if (handleErrors(newError)) {
      saveGeneralEnquiry(forex)
        .then((res) => {
          toast.success(res?.data?.message);
          navigate("/");
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
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />

      <FixedEnquiry />
      <FixedWhatsapp />
      <div className="container-fluid p-0 overflow-hidden">
        <div className="row ">
          <div className="col-12">
            <div className="card text-bg-dark rounded-0 ">
              <img
                src="https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg"
                className="card-img img-fluid "
                style={{ maxHeight: "23rem", mixBlendMode: "multiply" }}
                alt="admission_image"
              />
              <div className="card-img-overlay align-self-end">
                <div className="text-uppercase text-white text-center fs-2 fw-bold">
                  Contact Us
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                  <div>
                    <Link
                      to="/"
                      className="text-decoration-none text-white fs-5"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="text-white">
                    <FaArrowRight />
                  </div>
                  <div className="text-white fs-5">Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="contact-header">
              <h4 className="fw-semibold" style={{ color: "#fe5722" }}>
                Start Your Study Abroad Journey
              </h4>
              <hr
                className=" w-25 "
                style={{
                  height: "3px",
                  borderWidth: "0",
                  color: "#fe5722",
                  backgroundColor: "#fe5722",
                }}
              />
              <p className="fw-bold">
                Have an inquiry or some feedback for us?
              </p>
            </div>
            <div className="card mb-3 p-2 border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4 align-self-center">
                  <img
                    src={geo_alt}
                    className="img-fluid mx-auto d-block bg-light p-2 rounded-2 "
                    alt="Our Address"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Our Address</h5>
                    <p
                      className="card-text fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      17/3A2, Gandhi St, Alwartirunagar, Chennai - 600087, Tamil
                      Nadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-3 border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4 align-self-center ">
                  <img
                    src={telephone}
                    className="img-fluid mx-auto d-block bg-light p-2 rounded-2 "
                    alt="Phone Number"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Phone Number</h5>
                    <p
                      className="card-text fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Phone: +91 98405 91820
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-2 border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4 align-self-center">
                  <img
                    src={envelope}
                    className="img-fluid mx-auto d-block bg-light p-2 rounded-2 "
                    alt="Mail ID"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Mail ID</h5>
                    <p
                      className="card-text fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Business: info@edufynd.com
                    </p>
                    <p
                      className="card-text fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Student: students@edufynd.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="container">
              <div className="card card-body border-0 contact_bg_1 p-5">
                <h5 className="card-text fw-bold">
                  Connect with Experts for Guidance!
                </h5>
                <h1 className="card-title">Get in Touch</h1>
                <hr
                  className=" w-25 "
                  style={{
                    height: "3px",
                    borderWidth: "0",
                    color: "#fe5722",
                    backgroundColor: "#fe5722",
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Your Name.."
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingInput">Enter Your Name..</label>
                    {errors.name.required && (
                      <span className="text-danger">Name is required</span>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Your Email.."
                      onChange={handleInputs}
                    />
                    <label htmlFor="floatingPassword">Enter Your Email..</label>
                    {errors.email.required && (
                      <span className="text-danger">Email is required</span>
                    )}
                    {errors.email.valid && (
                      <span className="text-danger">Invalid email</span>
                    )}
                  </div>
                  <div className="input-group mb-3">
                  <select className="form-select form-select-sm"
                       name="dial1" style={{ maxWidth: '75px',backgroundColor: "#fe5722", color: "#fff" , fontFamily: "Plus Jakarta Sans",fontSize: "12px", }}  
  onChange={handleInputs} value={forex?.dial1} >
   <option style={{ backgroundColor: "#fe5722", color: "#fff" }} value="+91">+91-India-in</option>
  {dial?.map((item) => (
    <option value={item?.dialCode} key={item?.dialCode}>
      {item?.dialCode} - {item?.name} -
      
    </option>
  ))}

   
  </select>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      placeholder="Enter Your Phone.."
                      onChange={handleInputs}
                    />
                    {errors.mobileNumber.required && (
                      <span className="text-danger">
                        Mobile number is required
                      </span>
                    )}
                    {errors.mobileNumber.valid && (
                      <span className="text-danger">Invalid mobile number</span>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={handleInputs}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Type Message</label>
                    {errors.message.required && (
                      <span className="text-danger">Message is required</span>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      name="typeOfUser"
                      onChange={handleInputs}
                    >
                      <option value="">Select Type of User</option>
                      <option value="Student">Student</option>
                      <option value="Partner">Partner</option>
                    </select>
                    <label htmlFor="typeOfUser">Type of User</label>
                    {errors.typeOfUser.required && (
                      <span className="text-danger">
                        Type of user is required
                      </span>
                    )}
                  </div>
                  <div className="col-sm-12 mb-3">
                    <button
                      type="submit"
                      className="btn text-uppercase d-block fw-bold shadow"
                      style={{ backgroundColor: "#fe5722", color: "white" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
