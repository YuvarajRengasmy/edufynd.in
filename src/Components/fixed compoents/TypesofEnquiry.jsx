import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { saveGeneralEnquiry } from "../../api/generalEnquiry";
import { isValidEmail, isValidPhone } from "../../Utils/validataion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const TypesofEnquiry = () => {



  const initialState = {
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
    typeOfEnquiry:"",
  };
  const initialStateErrors = {
    name: { required: false },
    mobileNumber: { required: false },
    typeOfEnquiry:{ required: false },
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
          navigate("/");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };
  return (

    <div>

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
                        <label htmlFor="floatingPassword">
                          Enter Your Email..
                        </label>
                        {errors.email.required && (
                          <span className="text-danger">Email is required</span>
                        )}
                        {errors.email.valid && (
                          <span className="text-danger">Invalid email</span>
                        )}
                      </div>
                      <div className="input-group mb-3">
                        <button
                          className="btn dropdown-toggle"
                          style={{ backgroundColor: "#fe5722", color: "#fff" }}
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          +91
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              +91
                            </a>
                          </li>
                        </ul>
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
                          <span className="text-danger">
                            Invalid mobile number
                          </span>
                        )}
                      </div>

                      <div className="row mb-3">
          <div className="col">
            <select
              class="form-select  "
               name="typeOfEnquiry"
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
                      <div className="d-block">
                        <button
                          type="submit"
                          className="btn text-uppercase d-block fw-bold shadow"
                          style={{ backgroundColor: "#fe5722", color: "white" }}
                        >
                          Send
                        </button>
                      
                      </div>
                    </form>
      {/* <form action="" className="px-2">
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
      </form> */}
    </div>
  );
};
export default TypesofEnquiry;
