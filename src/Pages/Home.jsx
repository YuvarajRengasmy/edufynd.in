import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { FaRegFlag } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import "./Home.css";
import { FaCogs } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaPlane } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import home2 from "../assets/images/home/home2.jpg";
import home1 from "../assets/images/home/home1.jpg";
import yourgateway from "../assets/images/home/yourgateway.jpg";
import instant from "../assets/images/home/instant.jpg";
import blog_1 from "../assets/images/home/blog-1-1.jpg";
import blog_2 from "../assets/images/home/blog-1-2.jpg";
import blog_3 from "../assets/images/home/blog-1-3.jpg";
import hero_overlay_6 from "../assets/img/update1/hero/hero_overlay_8.png";
import { MdAdminPanelSettings } from "react-icons/md";
import about_1_shape1 from "../assets/img/normal/about_1_shape1.png";
import about_5_1shape from "../assets/img/normal/about_5_1shape.png";
import bg_overlay_1 from "../assets/img/update1/bg/bg_overlay_1.png";
import CountUp from "react-countup";
import cta_bg2_shape from "../assets/img/bg/cta-bg2-shape.png";
import cta_2_shape1 from "../assets/img/normal/cta_2_shape1.png";
import cta_2_shape2 from "../assets/img/normal/cta_2_shape2.png";
import { getallCode } from "../api/counteyCode";

import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";
import { Helmet } from "react-helmet";
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";
import { Link } from "react-router-dom";
import TypesofEnquiry from "../Components/fixed compoents/TypesofEnquiry";
import success from "../assets/images/home/success.jpg";

import { isValidEmail, isValidPhone } from "../Utils/validataion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { saveGeneralEnquiry } from "../api/generalEnquiry";
import cta_bg2 from '../assets/images/home/cta-bg2.png'

export const Home = () => {
  const initialState = {
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
  };
  const initialStateErrors = {
    name: { required: false },
    mobileNumber: { required: false },

    email: { required: false },
    message: { required: false },
  };
  const [open, setOpen] = useState(false);
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
    let error = initialStateErrors;
    if (!data.name) {
      error.name.required = true;
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

    return error;
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setForex({ ...forex, [event?.target?.name]: event?.target?.value });
    if (submitted) {
      const newError = handleValidation({
        ...forex,
        [event.target.name]: event.target.value,
      });
      setErrors(newError);
    }
  };
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
  };

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
          navigate("/Program");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Control animation duration
      once: true, // Whether animation should only happen once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Move to next slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const stats = [
    { id: 1, value: 500, label: "prestigious universities" },
    { id: 2, value: 85000, label: "course options" },
    { id: 3, value: 10, label: "Years of expertise" },
    { id: 4, value: 20, label: "countries" },
  ];

  // Arrays containing country data for sliders
  const countries = [
    {
      name: "USA",
      img: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    },
    {
      name: "UK",
      img: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
    },
    {
      name: "Europe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png",
    },
    {
      name: "Canada",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },
    {
      name: "Australia",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    },
    {
      name: "France",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    },
    {
      name: "Ireland",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
    },
    {
      name: "New Zealand",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    },
    {
      name: "Singapore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc1KuZ_genH0g0w3S1JjcI2NvZFRh0QVFlg&s",
    },
  ];
  // Function to move to the next slide

  // Automatic sliding every 6 seconds

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>EduFynd | University & Colleges | Study Abroad Programs</title>
        <meta name="author" content="themeholy" />
        <meta
          name="description"
          content="Want to study abroad ? Get free expert advice and information on colleges, courses, exams, admission, student visa, and application process, visa filing and more"
        />
        <meta name="keywords" content="" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/Newfolder/images/logo/edufynd_fav_logo"
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
        <link rel="manifest" href="assets/img/favicons/manifest.html" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="assets/img/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <Navbar />
      <FixedEnquiry />
      <FixedWhatsapp />

      <div
        className=""
        style={{
          backgroundColor: "#fff",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "14px",
        }}
      >
        <div
          className="container-fluid p-0 overflow-hidden position-relative"
          style={{ marginTop: "135px" }}
        >
          <div className="row">
            <div className="col">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active hero1 ">
                    <img
                      src={hero_overlay_6}
                      className="d-block w-100 h-100"
                      alt="Slide 1"
                    />
                    <div className="hero-content1 position-absolute top-50 start-0 translate-middle-y text-white">
                      <div
                        className="fs-4 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <span
                          className="text-capitalize"
                          style={{ fontWeight: "bold" }}
                        >
                          Overseas Education
                        </span>
                      </div>
                      <div
                        className="display-5 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.7s" }}
                      >
                        <span
                          className="text text-capitalize "
                          style={{ fontWeight: "900" }}
                        >
                          All-in-One Solution for Your <br />
                          <span
                            className="highlight p-1"
                            style={{ backgroundColor: "#fe5722" }}
                          >
                            International Education
                          </span>
                        </span>
                      </div>
                      <div
                        className="fs-6 animate__animated animate__fadeInUp py-2"
                        style={{ animationDelay: "1s" }}
                      >
                        <span
                          className="text text-capitalize"
                          style={{ fontWeight: "bold" }}
                        >
                          Meet our expert counsellors for all your study abroad
                          needs.
                        </span>
                      </div>
                      <div
                        className="py-2 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "1.3s" }}
                      >
                        <Link
                          to="/Contact"
                          className="btn btn-sm px-4 py-2 text-uppercase fw-semibold text-white "
                          style={{
                            backgroundColor: "#fe5722",
                            fontSize: "12px",
                          }}
                        >
                          Connect with Experts{" "}
                          <span className="ms-1">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item hero2  ">
                    <img
                      src={hero_overlay_6}
                      className="d-block w-100 h-100"
                      alt="Slide 2"
                    />
                    <div className="hero-content2 position-absolute top-50 start-0 translate-middle-y text-white">
                      <div className="fs-4">
                        <span className="text text-capitalize">
                          Get Free Consultation
                        </span>
                      </div>
                      <div className="display-5">
                        <span className="text text-capitalize">
                          Start your Higher Studies <br /> Abroad with{" "}
                          <span
                            className="highlight p-1"
                            style={{ backgroundColor: "#fe5722" }}
                          >
                            EduFynd
                          </span>
                        </span>
                      </div>
                      <div className="fs-6">
                        <span className="text text-capitalize">
                          EduFynd helps you every step of the way, from
                          selecting the right course to your first day at the
                          university.
                        </span>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/Contact"
                          className="btn btn-sm px-4 py-2 text-uppercase fw-semibold text-white "
                          style={{
                            backgroundColor: "#fe5722",
                            fontSize: "12px",
                          }}
                        >
                          Connect with Experts{" "}
                          <span className="ms-1">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item hero3 ">
                    <img
                      src={hero_overlay_6}
                      className="d-block w-100 h-100"
                      alt="Slide 3"
                    />
                    <div className="hero-content3 position-absolute top-50 start-0 translate-middle-y text-white">
                      <div className="fs-4">
                        <span className="text text-capitalize">
                          Start your Study Abroad Journey
                        </span>
                      </div>
                      <div className="display-5">
                        <span className="text text-capitalize">
                          Simplify Your <br />{" "}
                          <span
                            className="highlight p-1"
                            style={{ backgroundColor: "#fe5722" }}
                          >
                            Study Abroad Journey
                          </span>
                        </span>
                      </div>
                      <div className="fs-6">
                        <span className="text text-capitalize">
                          Achieve Your Career Goals by Earning a Degree From Top
                          Global University
                        </span>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/Contact"
                          className="btn btn-sm px-4 py-2 text-uppercase fw-semibold text-white "
                          style={{
                            backgroundColor: "#fe5722",
                            fontSize: "12px",
                          }}
                        >
                          Connect with Experts{" "}
                          <span className="ms-1">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y mt-5 px-5 pt-5 d-none d-lg-block">
                <div
                  className="my-3 fs-3 fw-bold pt-1"
                  style={{ color: "#fe5722" }}
                >
                  Enquiry Form
                </div>
                <form action="" className="" onSubmit={handleSubmit}>
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
                  </div>
                  {errors.mobileNumber.required && (
                    <span className="text-danger">
                      Mobile number is required
                    </span>
                  )}
                  <br />
                  {errors.mobileNumber.valid && (
                    <span className="text-danger">Invalid mobile number</span>
                  )}
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={handleInputs}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Type Message</label>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn text-uppercase fw-semibold px-4 py-2"
                      style={{ backgroundColor: "#fe5722", color: "#fff" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container my-5 overflow-hidden"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row g-3">
            <div
              className="col-md-4 align-items-center justify-content-center"
              data-aos="slide-right"
            >
              <div
                className="text-uppercase fw-bold fs-5"
                style={{ color: "#fe5722" }}
              >
                <span>
                  <FaRegFlag />
                </span>{" "}
                Study Destinations
              </div>
              <div
                className="text-capitalize fw-bold mt-3 fs-4"
                style={{ color: "#231f20" }}
              >
                Explore top study abroad destinations
              </div>
              <div className="col my-3">
                <Link
                  to="/StudyDestination"
                  className="btn btn-sm text-white text-uppercase fw-semibold px-4 py-2 shadow-sm"
                  style={{
                    color: "white",
                    backgroundColor: "#fe5722",
                    fontSize: "12px",
                  }}
                >
                  View All Countries{" "}
                  <span className="ms-1">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-8 align-items-center justify-content-center"
              data-aos="slide-left"
            >
              <div className="slider-container">
                <div
                  className="card-slider py-4 "
                  style={{
                    transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                  }}
                >
                  {countries.map((country, index) => (
                    <div
                      className=" card border-0 shadow card-country"
                      key={index}
                    >
                      <div className="text-center mt-3">
                        <img
                          src={country.img}
                          alt={country.name}
                          className="img-fluid rounded-pill img-thumbnail"
                          style={{ width: "6rem", height: "6rem" }}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-capitalize fw-semibold text-center">
                          Study in {country.name}
                        </h5>
                        <div className="mt-3 text-center">
                          <Link
                            to="/StudyDestination"
                            className="btn btn-sm text-white text-uppercase fw-semibold px-4 py-2"
                            style={{
                              backgroundColor: "#fe5722",
                              fontSize: "12px",
                            }}
                          >
                            Explore More{" "}
                            <span className="ms-1">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 overflow-hidden" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-6">
              <div className="row d-flex">
                <div className="col-sm-8 justify-content-start">
                  <img
                    src={home2}
                    alt="about Image1"
                    className="img-fluid rounded-2"
                  />
                </div>
                <div className="col-sm-4 align-self-center">
                  <img
                    src="https://www.statecraftsims.com/wp-content/uploads/2024/04/13-1024x1024.png"
                    alt="about Image2"
                    className="img-fluid rounded-2"
                    style={{ width: "150px" }}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col position-relative">
                  <img
                    src={about_1_shape1}
                    alt="about Image3"
                    className="rounded-2  img-fluid vert-move"
                  />
                  <img
                    src={about_5_1shape}
                    alt=""
                    className="img-fluid  position-absolute bottom-0 start-0 vert-move"
                  />
                </div>

                <div className="col position-relative">
                  <img
                    src={home1}
                    alt="about Image4"
                    className="rounded-2 img-fluid   position-absolute bottom-0 end-0"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="text-uppercase fw-semibold fs-5"
                style={{ color: "#fe5722" }}
              >
                <span>
                  <FaRegFlag />
                </span>{" "}
                About Us
              </div>
              <div
                className="fs-1 lh-sm mt-3"
                style={{ color: "#0f2239", fontWeight: "bolder" }}
              >
                Your Trusted Partner for International Education
              </div>
              <div
                className="lh-base fw-normal py-2"
                style={{
                  color: "#231f20",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                EduFynd is an emerging Edtech company, facilitating admissions
                to premier international universities and colleges. Our team of
                seasoned counselors and mentors is committed to crafting strong
                and distinctive student profiles. In strategic collaboration
                with esteemed educational institutions, universities, and
                educational consultancies worldwide, we offer an
                all-encompassing suite of services.
              </div>
              <div
                className="lh-base fw-normal py-2"
                style={{
                  color: "#231f20",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                From meticulous test preparation and program selection guidance
                to invaluable admission assistance, loan and visa application
                support, and seamless departure-landing services, our commitment
                extends beyond enrollment—providing continuous assistance until
                degree completion.
              </div>
              <div className="mt-3">
                <Link
                  to="/About"
                  className="btn btn-sm text-white text-uppercase fw-semibold px-4 py-2 shadow-sm"
                  style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
                >
                  View More{" "}
                  <span className="ms-1">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid position-relative my-4 p-0 overflow-hidden"
          data-aos="slide-right"
        >
          <div className="row">
            <div className="col">
              <div className="card rounded-0 border-0">
                <img
                  src={success}
                  className="card-img img-fluid  rounded-0 border-0 "
                  alt="Success"
                  style={{ width: '100%', maxWidth: '100%', minWidth: '100%', height: '70vh', minHeight: '60vh', maxHeight: '80vh' }}
                />
                <div className="card-img-overlay p-0">
                  <img
                    src={bg_overlay_1}
                    className="card-img-top  rounded-0 border-0 p-0 h-100 object-fit-cover"
                    alt="Overlay"
                    style={{ mixBlendMode: "multiply", width: '100%', maxWidth: '100%', minWidth: '100%', height: '70vh', minHeight: '60vh', maxHeight: '80vh' }}
                  />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center h-100 text-center text-white">
                    <div className="display-6 fw-normal">
                      Your Success{" "}
                      <span className="fw-bold" style={{ color: "#fe5722" }}>
                        Our Sole Mission!
                      </span>
                    </div>
                    <div className="mt-3">
                      Empowering students worldwide with comprehensive overseas
                      education solutions.
                    </div>
                    <div>
                      Achieving your academic dreams together, every step of the
                      way.
                    </div>
                    <div className="d-flex justify-content-center my-5 gap-3">
                      <Link
                        to="/Service"
                        className="btn btn-sm text-uppercase text-white fw-semibold btn-outline-light p-3"
                        style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
                      >
                        Our Services{" "}
                        <span className="ms-1">
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link>
                      <Link
                        to="/Contact"
                        className="btn btn-sm btn-transparent btn-outline-light text-uppercase fw-semibold p-3"
                        style={{ fontSize: "12px" }}
                      >
                        Contact Us{" "}
                        <span className="ms-1">
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid my-5 py-4   position-relative">
          <div className="container">
            <div className="row g-3">
              <div className="col-lg-6" data-aos="slide-right">
                <div className="text-center">
                  <img
                    src={yourgateway}
                    alt="no-img"
                    className="img-fluid rounded-2"
                  />
                  <img
                    src={about_1_shape1}
                    alt="Image 3"
                    className="rounded-2 w-25  img-fluid position-absolute top-50 start-0 translate-y vert-move"
                  />
                </div>
                <div className="text-end mt-4">
                  <Link
                    to="/About"
                    className="btn btn-sm text-white fw-semibold text-uppercase px-4 py-2 border-0 shadow-sm"
                    style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
                  >
                    get started{" "}
                    <span className="ms-1">
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6" data-aos="zoom-out">
                <div className="position-relative">
                  <div
                    className="text-uppercase fs-5 fw-bold"
                    style={{ color: "#fe5722" }}
                  >
                    <span>
                      <FaRegFlag />
                    </span>{" "}
                    WHY EDUFYND ?
                  </div>
                  <div
                    className="fs-2 py-3 fw-bold lh-sm"
                    style={{ color: "black" }}
                  >
                    Your Gateway to Global Educational Opportunities
                  </div>
                  <div
                    className="fw-normal py-2 black1 fs-6"
                    style={{ textAlign: "justify" }}
                  >
                    At Edufynd, transparency and integrity are paramount. We
                    provide honest, up-to-date information to empower you to
                    make informed decisions about your education. With our
                    comprehensive support services, including assistance with
                    application forms, documentation, educational loans,
                    accommodation, and cultural integration, we are committed to
                    helping you achieve your academic goals and write your own
                    success story with Edufynd.
                  </div>
                  <div
                    className="fw-normal text-justify py-2 fs-6"
                    style={{ textAlign: "justify" }}
                  >
                    With years of experience, Edufynd's team of education
                    consultants offers expert guidance for studying abroad. From
                    course selection to visa acquisition, we provide
                    personalized services tailored to your unique needs,
                    ensuring a smooth transition into your new academic
                    environment. Our strong partnerships with prestigious
                    universities worldwide grant you access to exclusive
                    opportunities and resources, giving you a competitive edge
                    in the global job market.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container rounded-5 bg2" data-aos="flip-down">
          <div className="row">
            {stats.map((stat) => (
              <div key={stat.id} className="col-sm-6 col-lg-3">
                <div className="text-center py-5 px-2 border-bottom border-lg-bottom-0 border-end border-sm-end-0">
                  <div className="text-white fw-bold fs-1">
                    <CountUp end={stat.value} duration={4} />+
                  </div>
                  <div className="text-white fw-bold fs-5 text-capitalize">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="container-fluid position-relative overflow-x-hidden mt-4"
          style={{
            backgroundImage: `url(${cta_bg2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundBlendMode: 'multiply',
            width: '100%',
            height: '90vh',
            minHeight: '60vh',
          }}
          data-aos="zoom-in-up"
        >
          <img
            src={cta_bg2_shape}
            alt=""
            className="img-fluid position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block"
            style={{
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <img
            src={cta_2_shape1}
            alt=""
            className="img-fluid position-absolute bottom-0 start-0 d-none d-lg-block"
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
          <img
            src={cta_2_shape2}
            alt=""
            className="img-fluid position-absolute top-0 end-0 d-none d-lg-block"
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="mt-2">
                  <div className="text-white text-capitalize fs-1 fw-bold mb-3">
                    Our <span className="two">recruiting</span> partner
                  </div>
                  <div
                    className="text-white px-2 px-md-4 mt-3 fs-5 lh-base"
                    style={{ textAlign: 'justify' }}
                  >
                    With a global presence across 2 continents, strategic partnerships
                    with 500+ universities worldwide, and a team of seasoned experts
                    well-versed in the intricacies of the industry. Collaborate with
                    us to discover how our services can revolutionize your business.
                  </div>
                  <div className="text-center my-5">
                    <Link
                      to="/RecruitingPartner"
                      className="btn btn-transparent btn-outline-light rounded-1 text-uppercase px-3 py-2 fw-bold"
                    >
                      Partner with us{" "}
                      <span className="fs-5">
                        <FaArrowRightLong />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" data-aos="zoom-in-down">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center two text-uppercase fw-semibold fs-4 mt-4">
                Our Services
              </div>
            </div>
            <div className="col-sm-12">
              <div className="text-center text-capitalize fs-3 fw-bold mt-2">
                Achieve Admission To Your{" "}
                <span style={{ color: " #fe5722" }}>Dream University</span>{" "}
                Abroad With <span style={{ color: " #fe5722" }}>EduFynd</span>
              </div>
            </div>
            <div className="container container-dream p-5">
              <div class="row g-4">
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card pb-4 card-dream h-100 rounded-0 border-0">
                    <span class="fa  mt-3">
                      <MdAdminPanelSettings />
                    </span>
                    <p
                      class="h4 pt-4"
                      style={{ color: "#0f2239", fontWeight: "bolder" }}
                    >
                      Admission Support
                    </p>
                    <p
                      class=""
                      style={{ color: "#0f2239", textAlign: "justify" }}
                    >
                      At EduFynd, our comprehensive admission support goes
                      beyond the conventional, ensuring you're equipped for
                      success at every step of your academic journey.
                    </p>
                    <Link to="/Admission-Support">
                      <span class="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card pb-4 card-dream h-100 rounded-0 border-0">
                    <span class="fa  mt-3">
                      {" "}
                      <FaCogs />
                    </span>
                    <p class="h4 pt-4">SOP Crafting</p>
                    <p
                      class=""
                      style={{ color: "#0f2239", textAlign: "justify" }}
                    >
                      At EduFynd, we recognize the significance of your
                      Statement of Purpose (SOP) in conveying your unique story
                      to educational institutions.
                    </p>
                    <Link to="/SOP-Crafting">
                      <span class="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card pb-4 card-dream h-100 rounded-0 border-0">
                    <span class="fa  mt-3">
                      <FaGlobeEurope />
                    </span>
                    <p class="h4 pt-4">VISA Support</p>
                    <p
                      class=""
                      style={{ color: "#0f2239", textAlign: "justify" }}
                    >
                      At EduFynd, we understand that navigating visa procedures
                      can be complex, and that's why we're here to simplify the
                      process for you.
                    </p>
                    <Link to="/Visa-Support">
                      <span class="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card pb-4 card-dream h-100 rounded-0 border-0">
                    <span class="fa  mt-3">
                      <BiSolidBadgeDollar />
                    </span>
                    <p class="h4 pt-4">Financial Aid</p>
                    <p
                      class=""
                      style={{ color: "#0f2239", textAlign: "justify" }}
                    >
                      At EduFynd, we recognize that financing your education is
                      a critical aspect of your study abroad journey.
                    </p>
                    <Link to="/Financial-Aid">
                      <span class="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card pb-4 card-dream h-100 rounded-0 border-0">
                    <span class="fa  mt-3">
                      <FaPlane />
                    </span>
                    <p class="h4 pt-4">Pre And Post Support</p>
                    <p
                      class=""
                      style={{ color: "#0f2239", textAlign: "justify" }}
                    >
                      At EduFynd, your well-being is our priority. We're with
                      you every step of the way.
                    </p>
                    <Link to="/Pre-and-Post-Support">
                      <span class="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card pb-4 card-dream h-100 rounded-0 border-0">
                    <span class="fa  mt-3">
                      <FaBitcoin />
                    </span>
                    <p class="h4 pt-4">Forex & More</p>
                    <p
                      class=""
                      style={{ color: "#0f2239", textAlign: "justify" }}
                    >
                      At EduFynd, we understand that managing finances is a
                      crucial aspect of your study abroad journey.
                    </p>
                    <Link to="/Forex">
                      <span class="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid mt-5 admission overflow-hidden"
          data-aos="zoom-in-right"
        >
          <div className="row ">
            <div className="col-lg-6 p-0 d-none d-lg-block">
              <div>
                <img
                  src={instant}

                  alt="image"
                  className="object-fit-fill"
                />
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <div className="two fw-bold text-uppercase mt-1 fs-4">
                <span>
                  <FaRegFlag />
                </span>{" "}
                Bookings appointment
              </div>
              <div className="text-white fw-semibold mt-3 fs-2">
                Get Instant Solutions From Our Counsellors
              </div>
              <div className="fs-6 pe-5 my-3 t" style={{ color: "#CECDE8" }}>
                Your journey to international education starts with EduFynd.
                Connect with our expert counselors today for personalized
                guidance and swift answers to all your queries.
              </div>
              <TypesofEnquiry />
            </div>
          </div>
        </div>
        <div className="container-fluid blog1" data-aos="slide-right">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="two fw-semibold text-uppercase fs-4 mt-5">
                  <span>
                    <FaRegFlag />
                  </span>{" "}
                  Our News and Blogs
                </div>
              </div>

              <div className="col-sm-7">
                <div className="text-dark fs-2 fw-bold mt-3">
                  Explore Latest Study Abroad Blogs
                </div>
              </div>
              <div className="col-sm-5">
                <div className="float-md-end mt-4">
                  <Link
                    to="/Blog"
                    className="btn one btn8 fw-bold fs-6 text-uppercase"
                  >
                    View All Posts{" "}
                    <span className="ms-1">
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-4 mb-4" data-aos="fade">
                  <div
                    className="card border-0 h-100"
                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  >
                    <img
                      src={blog_1}
                      className="card-image rounded-2"
                      alt="Responsive"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                      <div className="d-flex flex-row align-items-center justify-content-between">
                        <div
                          className="card-title text-capitalize fw-semibold "
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            <FaRegUser />
                          </span>{" "}
                          by David Smith
                        </div>
                        <div
                          className="card-title text-capitalize fw-semibold "
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            <FaRegClock />
                          </span>{" "}
                          03, Jun 2023
                        </div>
                      </div>
                      <div className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </div>
                      <div>
                        <Link
                          to="/Blog-Details"
                          className="btn text-capitalize text-white text-decoration-underline"
                        >
                          Read more details{" "}
                          <span className="ms-1">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div
                    className="card border-0 h-100"
                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    data-aos="fade"
                  >
                    <img
                      src={blog_2}
                      className="card-image rounded-2"
                      alt="Responsive"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                      <div className="d-flex flex-row align-items-center justify-content-between">
                        <div
                          className="card-title text-capitalize fw-semibold "
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            <FaRegUser />
                          </span>{" "}
                          by David Smith
                        </div>
                        <div
                          className="card-title text-capitalize fw-semibold "
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            <FaRegClock />
                          </span>{" "}
                          03, Jun 2023
                        </div>
                      </div>
                      <div className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </div>
                      <div>
                        <Link
                          to="/Blog-Details"
                          className="btn text-capitalize text-white text-decoration-underline"
                        >
                          Read more details{" "}
                          <span className="ms-1">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div
                    className="card border-0 h-100"
                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    data-aos="fade"
                  >
                    <img
                      src={blog_3}
                      className="card-image rounded-2"
                      alt="Responsive"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                      <div className="d-flex flex-row align-items-center justify-content-between">
                        <div
                          className="card-title text-capitalize fw-semibold "
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            <FaRegUser />
                          </span>{" "}
                          by David Smith
                        </div>
                        <div
                          className="card-title text-capitalize fw-semibold "
                          style={{ fontSize: "14px" }}
                        >
                          <span>
                            <FaRegClock />
                          </span>{" "}
                          03, Jun 2023
                        </div>
                      </div>
                      <div className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </div>
                      <div>
                        <Link
                          to="/Blog-Details"
                          className="btn text-capitalize text-white text-decoration-underline"
                        >
                          Read more details{" "}
                          <span className="ms-1">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
