import React, { useEffect, useState } from "react";
import { isValidEmail, isValidPhone } from "../../Utils/validataion";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import { saveForexEnquiry } from "../../api/forex";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import FixedEnquiry from "../../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../../Components/fixed compoents/FixedWhatsapp";
export const Forex = () => {
  const initialState = {
    studentName: "",
    country: "",
    universityName: "",
    primaryNumber: "",
    email: "",
    message: "",
  };
  const initialStateErrors = {
    studentName: { required: false },
    country: { required: false },
    universityName: { required: false },
    primaryNumber: { required: false },
    email: { required: false },
    message: { required: false },
  };
  const [open, setOpen] = useState(false);
  const [forex, setForex] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErrors);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleValidation = (data) => {
    let error = initialStateErrors;
    if (!data.studentName) {
      error.studentName.required = true;
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
      saveForexEnquiry(forex)
        .then((res) => {
          toast.success("Enquiry Submitted Successfully");
          closeModal();
          navigate("/Forex");
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
            <div class="card text-bg-dark rounded-0 ">
              <img
                src="https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg"
                class="card-img img-fluid "
                style={{ maxHeight: "23rem", mixBlendMode: "multiply" }}
                alt="admission_image"
              />
              <div class="card-img-overlay align-self-end">
                <div className="text-uppercase text-white text-center fs-2 fw-bold">
                  FOREX
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
                  <div className="text-white fs-5"> FOREX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <h5
            className="text-start text-uppercase fw-semibold "
            style={{ color: "#fe5722" }}
          >
            {" "}
            OUR SERVICES
          </h5>
          <h1 className="text-start fw-bold">Forex & More</h1>
          <div className="col-md-7">
            <p className="text-muted py-2" style={{ textAlign: "justify" }}>
              At EduFynd, we understand that managing finances is a crucial
              aspect of your study abroad journey. Our commitment to your
              financial well-being is reflected in our comprehensive suite of
              services designed to ensure a smooth and cost-effective global
              experience.At EduFynd, we go beyond education; we empower you with
              the financial tools and support needed for a successful and
              stress-free study abroad experience. Your global journey starts
              here, with seamless financial solutions designed with your needs
              in mind.
            </p>
            <div className="d-flex flex-row align-items-start justify-content-between">
              <div className="d-flex flex-column ">
                <p
                  class=" fw-semibold"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  {" "}
                  <span className="pe-2" style={{ color: "#fe5722" }}>
                    <FaCircleCheck />
                  </span>{" "}
                  Competitive Rates for Comprehensive Expenses{" "}
                </p>
                <p
                  class=" fw-semibold"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  {" "}
                  <span className="pe-2" style={{ color: "#fe5722" }}>
                    <FaCircleCheck />
                  </span>
                  International Student Bank Account Setup
                </p>
                <p
                  class=" fw-semibold"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  {" "}
                  <span className="pe-2" style={{ color: "#fe5722" }}>
                    <FaCircleCheck />
                  </span>
                  Prepaid Forex Cards{" "}
                </p>
              </div>
              <div className="d-flex flex-column ">
                <p
                  class=" fw-semibold"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  {" "}
                  <span className="pe-2" style={{ color: "#fe5722" }}>
                    <FaCircleCheck />
                  </span>{" "}
                  Remittance Support
                </p>
                <p
                  class=" fw-semibold"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  {" "}
                  <span className="pe-2" style={{ color: "#fe5722" }}>
                    <FaCircleCheck />
                  </span>
                  Forex Advisory
                </p>
              </div>
              <div className="d-flex flex-column "></div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="h-100 text-center">
              <img
                src="https://st2.depositphotos.com/39091214/48280/i/450/depositphotos_482803198-stock-photo-word-admission-written-wooden-cubes.jpg"
                alt=""
                className="img-fluid  h-100 mx-auto d-block "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-5 justify-content-center">
          <div className="col-md-4">
            <div className=" card h-100 position-relative  rounded-0 border-0 shadow  p-3">
              <div className="card-body ">
                <h5 className="card-title fw-bold" style={{ color: "#0f2239" }}>
                  Competitive Rates for Comprehensive Expenses
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  We offer competitive rates for tuition, living, and travel
                  expenses, providing you with a transparent and cost-effective
                  financial framework tailored to your needs.
                </p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
                  <a
                    href=""
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    style={{ backgroundColor: "#fe5722", color: "#fff" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" card h-100 position-relative  rounded-0 border-0 shadow  p-4">
              <div className="card-body ">
                <h5 className="card-title fw-bold" style={{ color: "#0f2239" }}>
                  International Student Bank Account Setup
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  Our expert assistance in setting up an international student
                  bank account ensures seamless financial transactions and
                  accessibility, allowing you to manage your funds efficiently
                  throughout your academic journey.
                </p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
                  <a
                    href=""
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    style={{ backgroundColor: "#fe5722", color: "#fff" }}
                  >
                    Enquire Now
                  </a>
                </div>

                <div
                  class="modal fade"
                  id="exampleModal5"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Enquriy Form
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <form
                        action=""
                        className="p-2 needs-validation"
                        novalidate
                        style={{ fontSize: "16px" }}
                        onSubmit={handleSubmit}
                      >
                        <div class="modal-body">
                          <div className="row g-3 mb-3">
                            <div className="col">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="studentName"
                                  onChange={handleInputs}
                                  placeholder="Name"
                                  id="floatingInputGrid"
                                />
                                <label for="floatingInputGrid">Name</label>
                                {errors.studentName.required ? (
                                  <div className="text-danger form-text">
                                    This field is required.
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={handleInputs}
                                  name="country"
                                  placeholder="Country"
                                  id="floatingInputGrid"
                                />
                                <label for="floatingInputGrid">Country</label>
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
                                <input
                                  type="text"
                                  className="form-control"
                                  name="universityName"
                                  onChange={handleInputs}
                                  placeholder="University"
                                  id="floatingInputGrid"
                                  required
                                />
                                <label for="floatingInputGrid">
                                  University
                                </label>
                                {errors.universityName.required ? (
                                  <div className="text-danger form-text">
                                    This field is required.
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            {/* <div className="col">
              <div className="form-floating">
              <input type="text" className='form-control' placeholder='Student ID' id="floatingInputGrid" />
              <label for='floatingInputGrid'>Student ID</label>
              </div>
             
            </div> */}
                          </div>
                          <div className="row g-3 mb-3">
                            <div className="col">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  name="email"
                                  onChange={handleInputs}
                                  className="form-control"
                                  placeholder="E-Mail"
                                  id="floatingInputGrid"
                                />
                                <label for="floatingInputGrid">E-Mail</label>
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
                                <input
                                  type="text"
                                  onChange={handleInputs}
                                  name="primaryNumber"
                                  className="form-control"
                                  placeholder="Contact"
                                  id="floatingInputGrid"
                                />
                                <label for="floatingInputGrid">Contact</label>
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
                            <textarea
                              class="form-control"
                              placeholder="Message"
                              name="message"
                              onChange={handleInputs}
                              id="floatingTextarea"
                              style={{ height: "110px" }}
                            ></textarea>
                            <label for="floatingTextarea">Message</label>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn  fw-semibold btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            class="btn fw-semibold "
                            data-bs-dismiss="modal"
                            style={{
                              backgroundColor: "#fe5722",
                              color: "#fff",
                            }}
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
          </div>
          <div className="col-md-4">
            <div className=" card h-100 position-relative  rounded-0 border-0 shadow  p-3">
              <div className="card-body ">
                <h5 className="card-title fw-bold" style={{ color: "#0f2239" }}>
                  Prepaid Forex Cards
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  Experience convenience and security with our prepaid forex
                  cards, offering a hassle-free alternative for managing your
                  expenses while studying abroad. Enjoy flexibility and peace of
                  mind with our reliable financial solutions.
                </p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
                  <a
                    href=""
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    style={{ backgroundColor: "#fe5722", color: "#fff" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" card h-100 position-relative  rounded-0 border-0 shadow  p-3">
              <div className="card-body ">
                <h5 className="card-title fw-bold" style={{ color: "#0f2239" }}>
                  Remittance Support
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  Navigating international transactions can be complex, but with
                  our remittance support, we simplify the process, ensuring that
                  your funds are transferred securely and efficiently across
                  borders.
                </p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
                  <a
                    href=""
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    style={{ backgroundColor: "#fe5722", color: "#fff" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" card h-100 position-relative  rounded-0 border-0 shadow  p-3">
              <div className="card-body ">
                <h5 className="card-title fw-bold" style={{ color: "#0f2239" }}>
                  Forex Advisory
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#0f2239", textAlign: "justify" }}
                >
                  Benefit from our forex advisory services, providing valuable
                  insights and guidance on managing currency exchange rates.
                  Stay informed and make informed financial decisions with the
                  expertise of our advisory team.
                </p>
                <div className="position-absolute position-absolute bottom-0 start-50 translate-middle-x py-2  ">
                  <a
                    href=""
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                    style={{ backgroundColor: "#fe5722", color: "#fff" }}
                  >
                    Enquire Now
                  </a>
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
export default Forex;
