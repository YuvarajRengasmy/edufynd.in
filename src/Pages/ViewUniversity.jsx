import { RiCoinsFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { getSingleUniversity } from "../api/university";
import Flags from "react-world-flags";
import Navbar from "../Components/Navbar/Navbar";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

export const ViewUniversity = () => {

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [university, setUniversity] = useState([]);
  const pageSize = 5;

  useEffect(() => {
    getUniversityDetails();
  }, []);
  const getUniversityDetails = () => {
    getSingleUniversity(id)
      .then((res) => {
        setUniversity(res?.data?.result);
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
                <div className="col-lg-12">
                  <div className="border-0 rounded-0 bg-transparent p-3">
                    <div
                      className="card rounded-0 border-0  bg-light-sm"
                      style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
                    >
                      
                      <img
                        src={university?.banner ? university?.banner : "https://research.com/resized/uploads/50_most_beautiful_college_campuses_in_America_1_a39f3f68eb.jpg?format=large"}
                        className="card-img img-fluid object-fit-cover"
                        alt="img"
                        style={{ height: '10rem', mixBlendMode: 'multiply' }}
                      />
                      <div className="card-img-overlay">
                        <div className="card bg-transparent text-white border-0">
                          <div className="row g-0">
                            <div className="col-md-2">
                              <img
                                src={university?.universityLogo ? university?.universityLogo : "https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"}
                                style={{ width: '5rem', height: '5rem' }}
                                alt="no image"
                                className="img-fluid rounded-pill img-thumbnail mx-auto d-block"
                              />
                            </div>
                            <div className="col-md-10">
                              <div className="card-body">
                                <h5 className="card-title">{university?.universityName}</h5>
                                <p className="card-text">{university?.country}</p>
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
                <div className="row gy-3">

                  <div className="col-md-3" style={{height:'15rem',overflow:'auto'}}>
                    <div className="card border-0 text-bg-primary ">
                      <div className="card-body">
                        <h6 className="card-title text-uppercase text-center fw-bold ">Overview</h6>
                        <p className="card-text" style={{ textAlign: 'justify' }}>
                          {university?.about}
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-3" style={{height:'15rem',overflow:'auto'}}>
                    <div className="card border-0  text-bg-danger h-100">
                      <div className="card-body">
                        <h6 className="card-title text-uppercase text-center fw-bold">Campus</h6>
                        <div className="row">
                          <div className="border-0 pt-3 ">
                            
                            <div className="row g-3">
                              {Array.isArray(university?.state) &&
                                university.state.map((state, index) => (
                                  <div className="col-sm-6">
                                    <div
                                      className="card border-0 rounded-2  bg-white"
                                      
                                    >
                                      <img
                                        src={university?.universityLogo ? university?.universityLogo : "https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg"}
                                        className="img-fluid rounded-pill img-thumbnail mx-auto d-block"
                                        alt="..."
                                        style={{ width: '3rem', height: '3rem' }}
                                      />
                                      <div className="card-body">
                                        <p className="card-text text-center">
                                          {university?.lga?.[index]?.length > 0
                                            ? university.lga[index]
                                            : state}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3" style={{height:'15rem',overflow:'auto'}}>
                    <div className="card border-0 text-bg-success h-100">
                      <div className="card-body">
                        <h6 className="card-title text-uppercase text-center fw-bold">Categories</h6>
                        <div className="row">
                          <div className="border-0 pt-3 ">
                            {Array.isArray(university?.popularCategories) &&
                              university.popularCategories.map(
                                (popularCategories, index) => (
                                  <div key={index} className="row">
                                    <div className="  border-0 rounded mb-2">
                                      <span className=" fw-bolder d-flex align-items-center justify-content-center gap-2 text-uppercase">
                                        {popularCategories}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-3" style={{height:'15rem',overflow:'auto'}}>
                    <div className="card border-0  text-bg-warning text-white h-100">
                      <div className="card-body">
                        <h5 className="card-title text-uppercase fw-bold text-center">Course</h5>
                        <div className="row">
                          <div className="border-0 pt-3 ">
                            {Array.isArray(university?.courseType) &&
                              university.courseType.map(
                                (courseType, index) => (
                                  <div className="row">
                                    <div className="border-0 rounded mb-2">
                                      <span className=" fw-bolder d-flex align-items-center justify-content-center gap-2 text-uppercase">
                                        {courseType}
                                      </span>
                                    </div>
                                  </div>

                                ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">

                    <div className="card border-0  mt-3" style={{ backgroundColor:" rgba(255, 87, 34, 0.5)"}}>
                      <div className="card-body">
                        <div className="row gy-3 py-2">
                          <div className="col-sm-6 visually-hidden">
                            <div className="fw-light text-lead text-capitalize">CourseType</div>
                            <div className="fw-semibold text-capitalize"></div>
                          </div>
                          <div className="col-sm-6 visually-hidden">
                            <div className="fw-light text-lead text-capitalize">Delivery Currency</div>
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
                            <div className="fw-light text-lead text-capitalize">Application Fee</div>
                            <div className="fw-semibold text-capitalize">{university?.applicationFees}</div>
                          </div>
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">AverageFees</div>
                            <div className="fw-semibold text-capitalize">{university?.averageFees}</div>
                          </div>
                        </div>
                        <div className="row gy-3 py-2">
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">Duration</div>
                            <div className="fw-semibold text-capitalize"></div>
                          </div>
                          <div className="col-sm-6">
                            <div className="fw-light text-lead text-capitalize">Discounted Value</div>
                            <div className="fw-semibold text-capitalize">{university?.discountedValue}</div>
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
                            style={{ backgroundColor: '#231f20', color: '#fff', fontSize: '10px' }}
                          >
                            view
                          </Link>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default ViewUniversity