import { RiCoinsFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { getSingleProgram } from "../api/program";
import Flags from "react-world-flags";
import Navbar from "../Components/Navbar/Navbar";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

export const ViewUniversity = () => {
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
                <div className="col-lg-12">
                  <div className="border-0 rounded-0 bg-transparent p-3">
                    <div
                      className="card rounded-0 border-0 shadow-sm bg-light-sm"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        mixBlendMode: "multiply",
                      }}
                    >
                      <img
                        src="https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg"
                        className="card-img img-fluid"
                        alt="img"
                        style={{ height: "9rem", mixBlendMode: "multiply" }}
                      />
                      <div className="card-img-overlay">
                        <div className="card bg-transparent text-white border-0">
                          <div className="row g-0">
                            <div className="col-md-2">
                              <img
                                src="https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"
                                style={{ width: "5rem", height: "5rem" }}
                                alt="no image"
                                className="img-fluid rounded-pill img-thumbnail mx-auto d-block"
                              />
                            </div>
                            <div className="col-md-10">
                              <div className="card-body">
                                <h5 className="card-title">University Name</h5>
                                <p className="card-text">Country</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0 card-body bg-white rounded-bottom px-4">
                <div className="row ">
                  <div className="col-md-3">
                    <div className="card border-0 bg-light shadow-sm bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-uppercase">Overview</h5>
                        <p
                          className="card-text"
                          style={{ textAlign: "justify" }}
                        >
                          {/* Content for Overview */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-uppercase">Campus</h5>
                        <div className="row">
                          <div className="border-0 pt-3 px-4">
                            <div className="row g-3">
                              <div className="col-sm-12">
                                <div
                                  className="card border-0 rounded-2 shadow-sm bg-white"
                                  style={{ width: "4rem", height: "4rem" }}
                                >
                                  <img
                                    src="https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"
                                    className="img-fluid rounded-pill img-thumbnail mx-auto d-block"
                                    alt="..."
                                    style={{ width: "3rem", height: "3rem" }}
                                  />
                                  <div className="card-body">
                                    <p className="card-text text-center">
                                      {/* Campus content */}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-end">
                          <Link
                            to="https://crm.edufynd.in/"
                            target="_blank"
                            className="text-decoration-none text-uppercase fw-semibold px-3 py-2 rounded-pill"
                            style={{
                              backgroundColor: "#231f20",
                              color: "#fff",
                              fontSize: "10px",
                            }}
                          >
                            view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-uppercase">
                          Categories
                        </h5>
                        <div className="row">
                          <div className="border-0 pt-3 px-4">
                            <div className="row">
                              <div className="  border-0 rounded mb-2">
                                <span className="text-dark fw-bolder d-flex align-items-center justify-content-center gap-2 text-uppercase">
                                  {/* Categories content */}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-uppercase">Course</h5>
                        <div className="row">
                          <div className="border-0 pt-3 px-4">
                            <div className="row">
                              <div className="border-0 rounded mb-2">
                                <span className="text-dark fw-bolder d-flex align-items-center justify-content-center gap-2 text-uppercase">
                                  {/* Course content */}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card border-0 shadow-sm bg-light mt-3">
                      <div className="card-body">
                        <div className="row gy-3 py-2">
                          <div className="col-sm-6 visually-hidden">
                            <div className="fw-light text-lead text-capitalize">
                              CourseType
                            </div>
                            <div className="fw-semibold text-capitalize"></div>
                          </div>
                          <div className="col-sm-6 visually-hidden">
                            <div className="fw-light text-lead text-capitalize">
                              Delivery Currency
                            </div>
                            <div className="fw-semibold text-capitalize">
                              <img
                                src="https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"
                                alt="Currency"
                                width={40}
                                height={20}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row gy-3 py-2">
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">
                              Application Fee
                            </div>
                            <div className="fw-semibold text-capitalize"></div>
                          </div>
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">
                              Estimated Annual Course Fee
                            </div>
                            <div className="fw-semibold text-capitalize"></div>
                          </div>
                        </div>
                        <div className="row gy-3 py-2">
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">
                              Duration
                            </div>
                            <div className="fw-semibold text-capitalize"></div>
                          </div>
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">
                              Discounted Value
                            </div>
                            <div className="fw-semibold text-capitalize"></div>
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
export default ViewUniversity;
