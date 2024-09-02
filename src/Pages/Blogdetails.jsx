import React, { useEffect, useState,useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import blog_1 from "../assets/img/blog/blog-s-1-1.jpg";
import { getSuperAdminForSearch } from "../api/superAdmin";

import blog_inner_1 from "../assets/img/blog/blog_inner_1.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";
import {getSingleBlog  } from "../api/blog";
import { RichTextEditor } from "@mantine/rte";
import { Link, useLocation } from "react-router-dom";

export const Blogdetails = () => {

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [blog, setBlog] = useState([]);
  const [link, setLink] = useState("");
  const [data, setData] = useState(false);
  const search = useRef(null);
  const pageSize = 3;

  var searchValue = location.state;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  useEffect(() => {
    if (search.current) {
      search.current.focus();
    }
  }, []);

  useEffect(() => {
    if (searchValue) {
      search.current.value = searchValue.substring(1);
      handleSearch();
    }
  }, [searchValue]);
  const handleInputsearch = (event) => {
    if (event.key === "Enter") {
      search.current.blur();
      handleSearch();
    }
  };

  const handleSearch = (event) => {
    const data = search.current.value;
    event?.preventDefault();
    getSuperAdminForSearch(data)
      .then((res) => {
        const blogList = res?.data?.result?.blogList;
        setBlog(blogList);
        const result = blogList.length ? "blog" : "";
        setLink(result);
        setData(result === "" ? true : false);
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };
  useEffect(() => {
    getblogDetails();
    getAllUniversityDetails();
  }, [pagination.from, pagination.to]);
  const getAllUniversityDetails = () => {
    const data = {
      limit: 8,
      page: pagination.from,
    };
    getallBlog(data)
      .then((res) => {
        console.log(res?.data?.result);
        setBlog(res?.data?.result);
        setPagination({
          ...pagination,
          count: res?.data?.result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


 
  const getblogDetails = () => {
    getSingleBlog(id)
      .then((res) => {
        setBlog(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <div class="card text-bg-dark rounded-0 ">
              <img
                src="https://www.eduthrive.org/wp-content/uploads/2023/07/desktop-wallpaper-study-abroad-abroad.jpg"
                class="card-img img-fluid "
                style={{ maxHeight: "23rem", mixBlendMode: "multiply" }}
                alt="admission_image"
              />
              <div class="card-img-overlay align-self-end">
                <div className="text-uppercase text-white text-center fs-2 fw-bold">
                  BLOG DETAILS
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
                      href="/Blog"
                      className="text-decoration-none text-white fs-5"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="text-white">
                    <FaArrowRight />
                  </div>

                  <div className="text-white fs-5">Blog Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
        
          <div className="col-md-7 col-12 mb-4">
          <h4
                  className="card-title fs-3 fw-bold"
                  style={{ color: "#0f2239" }}
                >
                  {blog?.title}
                </h4>
            <div className="card rounded-2 border-0 shadow p-3 h-100">
            {Array.isArray(blog?.uploadFile) && blog.uploadFile.length > 0 && (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {blog.uploadFile.map((data, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={data?.uploadImage}
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              alt={`blog-image-${index}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next "
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon btn btn-dark " aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )}
              <div className="card-body">
              
              <p
                                  className="clearfix"
                                  style={{ textAlign: "justify" }}
                                >
                                  <RichTextEditor
                                    value={blog?.content}
                                    readOnly
                                  />{" "}
                                </p>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                  {Array.isArray(blog?.tags) &&
                                    blog.tags.map((data, index) => (
                    <div key={index} className="d-flex flex-row align-items-center gap-3">
                      <h6 className="fw-bold h5">Tags:</h6>
                      <a
                        href="#"
                        className="text-decoration-none text-dark bg-light p-2 rounded-2"
                      >
                        {data}
                      </a>
                     
                    </div>
                  ))}
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="d-flex flex-row align-items-center gap-2">
                      <h6 className="fw-bold h5">Share:</h6>
                      <div className="mb-3 mt-2">
                        <a href="#">
                          <span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6">
                            <FaFacebook />
                          </span>
                        </a>
                      </div>
                      <div className="mb-3 mt-2">
                        <a href="#">
                          <span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6">
                            <FaLinkedinIn />
                          </span>
                        </a>
                      </div>
                      <div className="mb-3 mt-2">
                        <a href="#">
                          <span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6">
                            <FaInstagram />
                          </span>
                        </a>
                      </div>
                      <div className="mb-3 mt-2">
                        <a href="#">
                          <span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6">
                            <FaYoutube />
                          </span>
                        </a>
                      </div>
                      <div className="mb-3 mt-2">
                        <a href="#">
                          <span className="one text-white rounded-circle ps-2 pb-2 pt-1 pe-2 fs-6">
                            <FaTwitter />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="card card-body rounded-2 border-0 shadow mb-4">
            <form onSubmit={handleSearch}>
              <div className="input-group p-4">
                <input
                  type="text"
                  ref={search}
                  onChange={handleInputsearch}
                  className="form-control form-control-lg"
                  style={{ fontSize: "15px" }}
                  placeholder="Search Product..."
                  aria-label="Search"
                />
                <button
                 
                   type="submit"
                  className="input-group-text btn btn-lg"
                  style={{ backgroundColor: "#fe5722", color: "#fff" }}
                >
                  <FaSearch />
                </button>
              </div>
              </form>
            </div>
            <div className="card card-body rounded-2 border-0 shadow mb-4">
              <h4 className="fw-bold" style={{ color: "#0f2239" }}>
                Recent Posts
              </h4>
              <hr className="border-4 border-warning rounded-2" />
              <div className="card rounded-2 border-0 mb-3">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={blog_inner_1}
                      className="img-fluid rounded-3 mx-auto d-block"
                      alt="Recent post 1"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h6 className="card-title">
                        How to build a career in education for your future.
                      </h6>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <span
                            className="align-self-center"
                            style={{ color: "#fe5722" }}
                          >
                            <FaCalendar />
                          </span>{" "}
                          21/6/2023
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-2 border-0 mb-3">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={blog_inner_1}
                      className="img-fluid rounded-3 mx-auto d-block "
                      alt="Recent post 2"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h6 className="card-title">
                        A Guide for Teachers and Education Staff.
                      </h6>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <span
                            className="align-self-center"
                            style={{ color: "#fe5722" }}
                          >
                            <FaCalendar />
                          </span>{" "}
                          22/6/2023
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-2 border-0">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={blog_inner_1}
                      className="img-fluid rounded-3 mx-auto d-block"
                      alt="Recent post 3"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h6 className="card-title">
                        Educate Empower Excel Discover the Power.
                      </h6>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <span
                            className="align-self-center"
                            style={{ color: "#fe5722" }}
                          >
                            <FaCalendar />
                          </span>{" "}
                          25/6/2023
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-body rounded-2 border-0 shadow">
              <h4 className="fw-bold" style={{ color: "#0f2239" }}>
                Popular Tags
              </h4>
              <hr className="border-4 border-warning rounded-2" />
              <div className="d-flex flex-wrap gap-2">
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Courses
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Online
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Remote
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Education
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Solution
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  Students
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-dark bg-light p-2 rounded-2"
                >
                  UX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Blogdetails;
