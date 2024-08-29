import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import applicationn from "../assets/images/services/applicationn.jpg";
import admission_6 from "../assets/images/services/new/admission(6).jpg";
import prepost from "../assets/images/services/prepost.jpg";
import admission_3 from "../assets/images/services/new/admission(3).jpg";
import pre from "../assets/images/services/prepost1.jpg";
import admission_2 from "../assets/images/services/new/admission(2).jpg";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaWhatsapp } from "react-icons/fa";
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Control animation duration
      once: true, // Whether animation should only happen once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Overseas Education Service in Chennai to Study Abroad</title>
        <meta name="author" content="https://afynd.com/" />
        <meta
          name="description"
          content="We take care from Application to Acceptance. Our Overseas Education services include admission procedure, documentation, VISA assistance, Education Loan assistance from a reputed bank, pre/post departure service."
        />
        <meta
          name="keywords"
          content="We take care from Application to Acceptance. Our Overseas Education services include admission procedure, documentation, VISA assistance, Education Loan assistance from a reputed bank, pre/post departure service."
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/edufynd-fav-logo.png"
        />
        <link rel="manifest" href="assets/img/favicons/manifest.html" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="assets/img/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Jost:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <FixedEnquiry />
      <FixedWhatsapp />

      <div className="container-fluid p-0 overflow-hidden d-none d-lg-block">
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
                  Services
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

                  <div className="text-white fs-5"> Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" data-aos="zoom-in">
        <div className="row">
          <div className="content-header text-center my-3">
            <h5 className="" style={{ fontWeight: "bold", color: "#fe5722" }}>
              ACHIEVE ADMISSION TO YOUR DREAM UNIVERSITY ABROAD WITH EDUFYND
            </h5>
            <h2 className="" style={{ fontWeight: "bold", color: "#0f2239" }}>
              Our Popular Services
            </h2>
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center justify-content-center position-relative flex-wrap services-card"
        data-aos="slide-right"
      >
        <div className="card d-flex position-relative flex-column services-card1">
          <div className="imgContainer1">
            <img src={applicationn} alt="Admission Support" />
          </div>
          <div className="contentnew">
            <h5 style={{ color: "#fe5722" }}>Admission Support</h5>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              At EduFynd, our commitment is to empower you with the tools and
              support needed to embark on your educational journey seamlessly.
              Your success is our priority, and we're here to ensure you make a
              confident and informed start.
            </p>
          </div>
          <div className=" position-absolute top-100 start-50 translate-middle">
            {" "}
            <Link
              to="/Admission-Support"
              className="btn btn-sm text-uppercase fw-semibold text-uppercase px-4 py-2 text-white "
              style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
            >
              view More
            </Link>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column services-card1">
          <div className="imgContainer1">
            <img src={admission_6} alt="SOP Crafting" />
          </div>
          <div className="contentnew">
            <h5 style={{ color: "#fe5722" }}>SOP Crafting</h5>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              At EduFynd, we recognize the significance of your Statement of
              Purpose (SOP) in conveying your unique story to educational
              institutions. Our expert team collaborates closely with you to
              create a personalized narrative that highlights your ambitions,
              experiences, and objectives in a compelling manner.
            </p>
          </div>
          <div className=" position-absolute top-100 start-50 translate-middle">
            {" "}
            <Link
              to="/SOP-Crafting"
              className="btn btn-sm text-uppercase fw-semibold text-uppercase px-4 py-2 text-white "
              style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
            >
              view More
            </Link>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column services-card1">
          <div className="imgContainer1">
            <img src={prepost} alt="Visa Support" />
          </div>
          <div className="contentnew">
            <h5 style={{ color: "#fe5722" }}>Visa Support</h5>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              At EduFynd, we understand that navigating visa procedures can be
              complex, and that's why we're here to simplify the process for
              you. Our comprehensive visa assistance services encompass a range
              of crucial elements, ensuring a smooth and confident journey
              towards securing your student visa.
            </p>
          </div>
          <div className=" position-absolute top-100 start-50 translate-middle">
            {" "}
            <Link
              to="/Visa-Support"
              className="btn btn-sm text-uppercase fw-semibold text-uppercase px-4 py-2 text-white "
              style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
            >
              view More
            </Link>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column services-card1">
          <div className="imgContainer1">
            <img src={admission_3} alt="Financial Aid" />
          </div>
          <div className="contentnew">
            <h5 style={{ color: "#fe5722" }}>Financial Aid</h5>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              At EduFynd, we recognize that financing your education is a
              critical aspect of your study abroad journey. That's why we offer
              expert guidance to help you discover suitable loan options,
              navigate interest rates, and determine your eligibility.
            </p>
          </div>
          <div className=" position-absolute top-100 start-50 translate-middle">
            {" "}
            <Link
              to="/Financial-Aid"
              className="btn btn-sm text-uppercase fw-semibold text-uppercase px-4 py-2 text-white "
              style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
            >
              view More
            </Link>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column services-card1">
          <div className="imgContainer1">
            <img src={pre} alt="Pre and Post Support" />
          </div>
          <div className="contentnew">
            <h5 style={{ color: "#fe5722" }}>Pre and Post Support</h5>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              At EduFynd, your well-being is our priority. We're with you every
              step of the way, ensuring your study abroad experience is not only
              enriching academically but also smooth, supported, and memorable.
            </p>
          </div>
          <div className=" position-absolute top-100 start-50 translate-middle">
            {" "}
            <Link
              to="/Pre-and-Post-Support"
              className="btn btn-sm text-uppercase fw-semibold text-uppercase px-4 py-2 text-white "
              style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
            >
              view More
            </Link>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column services-card1">
          <div className="imgContainer1">
            <img src={admission_2} alt="Forex & More" />
          </div>
          <div className="contentnew">
            <h5 style={{ color: "#fe5722" }}>Forex & More</h5>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              At EduFynd, we understand that managing finances is a crucial
              aspect of your study abroad journey. Our commitment to your
              financial well-being is reflected in our comprehensive suite of
              services designed to ensure a smooth and cost-effective global
              experience.
            </p>
          </div>
          <div className=" position-absolute top-100 start-50 translate-middle">
            {" "}
            <Link
              to="/Forex"
              className="btn btn-sm text-uppercase fw-semibold text-uppercase px-4 py-2 text-white "
              style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
            >
              view More
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center my-4">
        <Link
          to="/Contact"
          className="btn text-uppercase fw-bold text-white"
          style={{ backgroundColor: "#fe5722", fontSize: "12px" }}
        >
          Reach Us
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
