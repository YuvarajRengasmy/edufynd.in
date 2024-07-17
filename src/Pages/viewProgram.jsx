import { RiCoinsFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { getSingleProgram } from "../api/program";
import Flags from "react-world-flags";
import Navbar from "../Components/Navbar/Navbar";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
const ViewProgram = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [program, setProgram] = useState([]);
  const pageSize = 5;

  useEffect(() => {
    getUniversityDetails();
  }, []);
  const getUniversityDetails = () => {
    getSingleProgram(id)
      .then((res) => {
        setProgram(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Plus Jakarta Sans", fontSize: "14px" }}>
        <div className="container-fluid mt-5 pt-5">

          <div
            className="content-wrapper"
            style={{ fontFamily: "Plus Jakarta Sans", fontSize: "13px" }}
          >
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-xl-12">
                  <div className="  border-0 rounded-0 bg-transparent p-3 ">
                    <div className="card border-0 rounded-0  ">
                      <div className="card-header rounded-0 border-0   img-1 ">
                        <div className="row g-3 mt-2">
                          <div className="col-lg-4 ">
                          <img  src={program?.universityLogo?program?.universityLogo:"https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"}  class="img-fluid rounded-pill  img-thumbnail mx-auto d-block " alt="..." style={{width:'7rem',height:'7rem'}} />

                          </div>
                          <div className="col-lg-8">
                            <div className="d-flex flex-row justify-content-between align-items-start">
                              <div className="d-flex flex-column">
                                <p className="text-black mb-1 fw-bold">
                                  <span
                                    className="me-2 text-uppercase"
                                    style={{ color: "#fe5722" }}
                                  >
                                    <RiMiniProgramFill />
                                  </span>{" "}
                                  {program?.programTitle}
                                </p>
                                <p className="text-black mb-1 fw-bold">
                                  <span
                                    className="me-2 text-uppercase"
                                    style={{ color: "#fe5722" }}
                                  >
                                    <FaUniversity />
                                  </span>{" "}
                                  {program?.universityName}
                                </p>
                                <p className="text-black mb-1">
                                  <span
                                    className="me-2"
                                    style={{ color: "#fe5722" }}
                                  >
                                    <FaGlobeAmericas />
                                  </span>{" "}
                                  {program?.country}
                                </p>
                              </div>

                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="card-body bg-white rounded-bottom px-4">
                        <div className="row mt-2 g-4">
                          <div className="col-md-7">
                            <ul
                              class="nav nav-underline fs-9"
                              id="myTab"
                              role="tablist"
                            >
                              <li class="nav-item" role="presentation">
                                <a
                                  class="nav-link active text-uppercase "
                                  id="home-tab"
                                  data-bs-toggle="tab"
                                  href="#tab-home"
                                  role="tab"
                                  aria-controls="tab-home"
                                  aria-selected="true"
                                >
                                  Overview
                                </a>
                              </li>
                              <li class="nav-item" role="presentation">
                                <a
                                  class="nav-link text-uppercase "
                                  id="profile-tab"
                                  data-bs-toggle="tab"
                                  href="#tab-profile"
                                  role="tab"
                                  aria-controls="tab-profile"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  Campus
                                </a>
                              </li>
                              <li class="nav-item" role="presentation">
                                <a
                                  class="nav-link text-uppercase "
                                  id="profile-tab"
                                  data-bs-toggle="tab"
                                  href="#tab-populatCourse"
                                  role="tab"
                                  aria-controls="tab-profile"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  Categories
                                </a>
                              </li>
                              <li class="nav-item" role="presentation">
                                <a
                                  class="nav-link text-uppercase "
                                  id="profile-tab"
                                  data-bs-toggle="tab"
                                  href="#tab-Course"
                                  role="tab"
                                  aria-controls="tab-profile"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  Course
                                </a>
                              </li>
                            </ul>
                            <div
                              class="tab-content mt-3"
                              id="myTabContent"
                              style={{
                                height: "350px",
                                overflowY: "auto",
                                scrollbarWidth: "none",
                              }}
                            >
                              <div
                                class="tab-pane fade active show"
                                id="tab-home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                              >
                                <p
                                  className="clearfix"
                                  style={{ textAlign: "justify" }}
                                >
                                  {program?.academicRequirement}
                                </p>
                                <div className="text-end">
                                 <Link to="https://crm.edufynd.in/" target="_blank"  className="text-decoration-none text-uppercase fw-semibold px-4 py-2 rounded-pill text-end" style={{backgroundColor:'#231f20',color:'#fff'}}>Apply Now</Link></div>
                               
                              </div>
                              <div
                                class="tab-pane fade"
                                id="tab-profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <div className="row">
                                  <div className=" border-0 pt-3 px-4">
                                    <div className="row g-3">
                                      {Array.isArray(program?.campuses) &&
                                        program.campuses.map((campus, index) => (
                                          <div key={index} className="col-sm-3">
                                            <div
                                              className="card border-0 rounded-3 shadow"
                                              style={{
                                                width: "8rem",
                                                height: "9rem",
                                              }}
                                            >
                                            <img  src={program?.universityLogo?program?.universityLogo:"https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"}  class="img-fluid rounded-pill  img-thumbnail mx-auto d-block " alt="..." style={{width:'4rem',height:'4rem'}} />

                                              <div className="card-body">
                                                <p className="card-text text-center">
                                                  {campus.campus}
                                                </p>

                                              </div>

                               
                             

                                            </div>
                                                                                          

                                          </div>
                                        ))}
                                    </div>
                                   
                                  </div>
                                   
                                </div>
                                <div className="text-end mt-5">
                                 <Link to="https://crm.edufynd.in/"   className="text-decoration-none text-uppercase fw-semibold px-4 py-2 rounded-pill text-end" style={{backgroundColor:'#231f20',color:'#fff'}}>Apply Now</Link>
                                 </div>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="tab-populatCourse"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <div className="row">
                                  <div className=" border-0 pt-3 px-4">
                                    <div className="row">
                                      {Array.isArray(program?.campuses) &&
                                        program.campuses.map((campus, index) => (
                                          <div
                                            key={index}
                                            className="card card-body shadow border-0 rounded  mb-2 "
                                          >
                                            <span className="text-dark fw-bolder d-flex align-items-center justify-content-center gap-2 text-uppercase">
                                              {campus?.inTake}
                                            </span>
                                          </div>
                                         
                               
                              
                                        )
                                        )}
                                    </div>
                                     
                                  </div>
                                    <div className="text-end mt-5">
                                 <Link to="https://crm.edufynd.in/" className="text-decoration-none text-uppercase fw-semibold px-4 py-2 rounded-pill text-end" style={{backgroundColor:'#231f20',color:'#fff'}}>Apply Now</Link>
                                 </div>
                                </div>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="tab-Course"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <div className="row">
                                  <div className=" border-0 pt-3 px-4">
                                    <div className="row">
                                      {Array.isArray(program?.courseType) &&
                                        program.courseType.map(
                                          (courseType, index) => (
                                            <div
                                              key={index}
                                              className="card card-body shadow border-0 rounded  mb-2"
                                            >
                                              <span className="text-dark fw-bolder d-flex align-items-center justify-content-center gap-2 text-uppercase">
                                                {courseType}
                                              </span>
                                            </div>
                                          )
                                        )}
                                    </div>
                                    
                                  </div>
                                    <div className="text-end mt-5">
                                 <Link to="https://crm.edufynd.in/" className="text-decoration-none text-uppercase fw-semibold px-4 py-2 rounded-pill text-end" style={{backgroundColor:'#231f20',color:'#fff'}}>Apply Now</Link>
                                 </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-5">
                            <div
                              className="alert alert-primary text-center fw-semibold  text-uppercase "
                              role="alert"
                            >
                              Program Details.
                            </div>

                            <div className="card  border-0  shadow mt-3">
                              <div className="card-body">
                                <div className="row gy-3 py-2">
                                  <div className="col-sm-6 visually-hidden">
                                    <div className=" fw-light text-lead text-capitalize">
                                      CourseType
                                    </div>
                                    <div className="fw-semibold text-capitalize">
                                      {program?.courseType}
                                    </div>
                                  </div>
                                  <div className="col-sm-6 visually-hidden">
                                    <div className=" fw-light text-lead text-capitalize">
                                      Delivery Currency
                                    </div>
                                    <div className=" fw-semibold text-capitalize">
                                      <Flags
                                        code={program?.flag}
                                        width={40}
                                        height={20}
                                      />{" "}
                                      {program?.currency}
                                    </div>
                                  </div>
                                </div>
                                <div className="row gy-3 py-2">
                                  <div className="col-sm-6">
                                    <div className=" fw-light text-lead text-capitalize">
                                      Application Fee
                                    </div>
                                    <div className=" fw-semibold text-capitalize">
                                    {program?.finalValue?program?.finalValue:program?.applicationFee?program?.applicationFee:"Not Available"}
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className=" fw-light text-lead text-capitalize">
                                      Estimated Annual Course Fee
                                    </div>
                                    <div className=" fw-semibold text-capitalize">
                                      {program?.campuses?.length > 0 ? program?.campuses[1]?.courseFees : "Not Available"}
                                    </div>
                                  </div>
                                </div>
                                <div className="row gy-3 py-2">
                                  <div className="col-sm-6  ">
                                    <div className=" fw-light text-lead text-capitalize">
                                      Duration
                                    </div>
                                    <div className=" fw-semibold text-capitalize">
                                      {program?.campuses?.length > 0 ? program?.campuses[1]?.duration : "Not Available"}
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className=" fw-light text-lead text-capitalize">
                                      Discounted Value
                                    </div>
                                    <div className=" fw-semibold text-capitalize">
                                    {program?.discountedValue}
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProgram;
