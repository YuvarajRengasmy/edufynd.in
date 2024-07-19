import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
export const TypesofEnquiry = () => {
  return (
    <div>
      {" "}
      <form action="" className="px-2">
        <div class="row mb-3">
          <div class="col">
            <input
              class="form-control form-control-sm py-2"
              type="text"
              placeholder="Enter Your Name"
              aria-label="Firstname"
            />
          </div>
          <div class="col">
            <input
              class="form-control form-control-sm  py-2"
              type="text"
              placeholder="Business Name"
              aria-label="business name"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <input
              class="form-control form-control-sm  py-2"
              type="email"
              placeholder="Email Address"
              aria-label="email"
            />
          </div>
          <div class="col">
            <div class="input-group ">
              <button
                class="btn  btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#fe5722", color: "#fff" }}
              >
                +91
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="" class="dropdown-item" href="#">
                    +92
                  </Link>
                </li>
                <li>
                  <Link to="" class="dropdown-item" href="#">
                    +93
                  </Link>
                </li>
                <li>
                  <Link to="" class="dropdown-item" href="#">
                    +94
                  </Link>
                </li>
              </ul>
              <input
                type="text"
                class="form-control form-control-sm py-2"
                placeholder="Phone Number"
                aria-label="Text input with dropdown button"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <select
              class="form-select  "
              aria-label="Large select example"
              style={{ fontSize: "14px" }}
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
        <div class="form-floating mb-4">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "150px" }}
          ></textarea>
          <label for="floatingTextarea">Message</label>
        </div>
        <div className="col-sm-12 mb-3">
          <Link
            to=""
            className="btn  text-uppercase d-block fw-bold shadow"
            style={{ backgroundColor: "#fe5722", color: "white" }}
          >
            send message{" "}
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default TypesofEnquiry;
