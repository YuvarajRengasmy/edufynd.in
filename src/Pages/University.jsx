import React, { useEffect, useState } from "react";
import { getFilterUniversity } from "../api/university";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { FaListCheck } from "react-icons/fa6";
import { IoMdGrid } from "react-icons/io";
import Footer from "../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
import { Helmet } from "react-helmet";
import { Pagination } from "@mui/material";
import "animate.css";
import FixedEnquiry from "../Components/fixed compoents/FixedEnquiry";
import FixedWhatsapp from "../Components/fixed compoents/FixedWhatsapp";

export const University = () => {
  const [university, setUniversity] = useState([]);
  const pageSize = 8;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

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
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>EduFynd | University</title>
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
                  University
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

                  <div className="text-white fs-5">University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container  position-relative mt-4 "
        data-aos="zoom-in-up"
        style={{
          backgroundColor: "#fff",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "12px",
        }}
      >
        <div className="row">
          <div className="col-md-5">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control "
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                class="input-group-text  bg-transparent border-start-0"
                id="basic-addon2"
              >
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div className="col-md-7">
            <div className="row">
              <div className="col">
                <div class="dropdown ">
                  <a
                    class="btn btn-sm text-white px-4 py-2 fw-semibold text-uppercase dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontSize: "10px",
                      backgroundColor: "#fe5722",
                      color: "#fff",
                    }}
                  >
                    Country
                  </a>

                  <ul class="dropdown-menu border-0 shadow">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div class="dropdown ">
                  <a
                    class="btn btn-sm text-white px-4 py-2 fw-semibold text-uppercase dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    style={{
                      fontSize: "10px",
                      backgroundColor: "#fe5722",
                      color: "#fff",
                    }}
                  >
                    University
                  </a>

                  <ul class="dropdown-menu border-0 shadow">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div class="dropdown ">
                  <a
                    class="btn btn-sm text-white px-4 py-2 fw-semibold text-uppercase dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    style={{
                      fontSize: "10px",
                      backgroundColor: "#fe5722",
                      color: "#fff",
                    }}
                  >
                    Application Fee
                  </a>

                  <ul class="dropdown-menu border-0 shadow">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div class="dropdown ">
                  <a
                    class="btn btn-sm text-white px-4 py-2 fw-semibold text-uppercase dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    style={{
                      fontSize: "10px",
                      backgroundColor: "#fe5722",
                      color: "#fff",
                    }}
                  >
                    Fee Range
                  </a>

                  <ul class="dropdown-menu border-0 shadow">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-12 justify-content-end align-items-center"
            data-aos="zoom-in"
          >
            <div className="row">
              <div className="col">
                <div className="dropdown border-0  program-dropdown float-end">
                  <button
                    className="btn btn-sm text-uppercase  fw-semibold px-4 py-2 dropdown-toggle"
                    type="button"
                    aria-expanded="false"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "#231f20",
                      color: "#fff",
                    }}
                  >
                    Sort By
                  </button>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    <ul
                      class="nav "
                      id="myTab"
                      role="tablist"
                      style={{ fontSize: "11px", color: "#231f20" }}
                    >
                      <li class="nav-item">
                        <Link
                          to="#tab-home"
                          class="nav-link text-dark "
                          id="home-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="tab-home"
                          aria-selected="true"
                        >
                          <FaListCheck /> List View
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          to="#tab-profile"
                          class="nav-link text-dark active"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="tab-profile"
                          aria-selected="false"
                        >
                          {" "}
                          <IoMdGrid /> Grid View
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>

            <div class="tab-content mt-3" id="myTabContent">
              <div
                class="tab-pane fade "
                id="tab-home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  {university.map((data, index) => (
                    <div className="col-xl-12" data-aos="fade-up" key={index}>
                      <div
                        className="card mb-3 rounded-1 d-none d-lg-flex"
                        style={{ height: "6rem" }}
                      >
                        <div className="row g-0 align-items-center mt-2">
                          <div className="col-md-1  ">
                            <div className="text-center">
                              <img
                                src={
                                  data?.universityLogo
                                    ? data?.universityLogo
                                    : "https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"
                                }
                                className="img-fluid rounded-pill img-thumbnail mx-auto d-block"
                                alt="University Logo"
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </div>
                          </div>
                          <div className="col-md-11">
                            <div className="card-body">
                              <div className="d-flex  align-items-center justify-content-between">
                                <h6>
                                  <i className="fas fa-university nav-icon"></i>
                                  &nbsp;&nbsp;
                                  {data.universityName}
                                </h6>
                                <p className="mb-0">
                                  <i className="fas fa-money-bill-wave nav-icon"></i>
                                  &nbsp;&nbsp;
                                  {data?.averageFees}
                                </p>
                                <p className="mb-0">
                                  <i className="fas fa-book nav-icon"></i>
                                  &nbsp;&nbsp;
                                  {data?.courseType.join(", ")}
                                </p>
                                <p className="mb-0">
                                  <i className="fas fa-globe nav-icon"></i>
                                  &nbsp;&nbsp;
                                  {data?.country}
                                </p>
                                <p className="mb-0">
                                  <i className="fas fa-calendar-alt nav-icon"></i>
                                  &nbsp;&nbsp;
                                  {data?.inTake.join(", ")}
                                </p>
                                <Link
                                  to={{
                                    pathname: "/ViewUniversity",
                                    search: `?id=${data?._id}`,
                                  }}
                                  className="btn btn-sm text-white fw-semibold text-uppercase border-0 px-2 py-1"
                                  style={{
                                    backgroundColor: "#fe5722",
                                    fontSize: "10px",
                                  }}
                                >
                                  View{" "}
                                  <i
                                    className="fa fa-eye ms-1"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex justify-content-end my-2">
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
              <div
                class="tab-pane fade show active"
                id="tab-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row gy-5 mb-5">
                  {university.map((data, index) => (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                      key={index}
                      data-aos="fade-up"
                    >
                      <div
                        className="card rounded-1 h-100 position-relative"
                        style={{ fontSize: "12px" }}
                      >
                        <div
                          className="card-img-top position-relative rounded-1 rounded-bottom-0"
                          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                          <img
                            src={
                              data?.banner
                                ? data?.banner
                                : "https://hips.hearstapps.com/housebeautiful/assets/17/32/1502296150-royal-roads-university.jpg"
                            }
                            className="card-img img-fluid rounded-1 rounded-bottom-0 "
                            alt="University Banner"
                            style={{ mixBlendMode: "multiply", height: "9rem" }}
                          />
                          <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <img
                              src={
                                data?.universityLogo
                                  ? data?.universityLogo
                                  : "https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"
                              }
                              alt="University Logo"
                              className="img-fluid rounded-pill img-thumbnail"
                              style={{
                                width: "5rem",
                                height: "5rem",
                              }}
                            />
                          </div>
                        </div>
                        <div className="card-body">
                          <h6
                            className=" text-center fw-semibold"
                            style={{ fontSize: "15px" }}
                          >
                            <i class="fas fa-university nav-icon"></i>
                            &nbsp;&nbsp;{data?.universityName}
                          </h6>

                          <p className="mb-1">
                            <i class="fas fa-money-bill-wave nav-icon"></i>
                            &nbsp;&nbsp;<b>{data?.averageFees}</b>
                          </p>
                          <p className="mb-1">
                            <i class="fas fa-book nav-icon"></i>&nbsp;&nbsp;
                            <b>{data?.courseType.join(", ")}</b>
                          </p>

                          <p className="mb-1">
                            <i class="fas fa-globe nav-icon"></i>&nbsp;&nbsp;{" "}
                            <b>{data?.country}</b>
                          </p>
                          <p className="mb-1">
                            <i class="fas fa-calendar-alt nav-icon"></i>
                            &nbsp;&nbsp; <b>{data?.inTake.join(", ")}</b>
                          </p>

                          <div className="text-center position-absolute top-100 start-50 translate-middle ">
                            <Link
                              to={{
                                pathname: "/ViewUniversity",
                                search: `?id=${data?._id}`,
                              }}
                              className="btn btn-sm text-white fw-semibold text-uppercase border-0 px-4 py-2"
                              style={{
                                backgroundColor: "#fe5722",
                                color: "#fff",
                                fontSize: "12px",
                              }}
                            >
                              View{" "}
                              <i
                                className="fa fa-eye ms-1"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex justify-content-end my-2">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default University;
