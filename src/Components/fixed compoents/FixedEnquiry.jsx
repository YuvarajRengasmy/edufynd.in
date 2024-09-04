import React, { useEffect, useState } from "react";
import { isValidEmail, isValidPhone } from "../../Utils/validataion";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { getallCode } from "../../api/counteyCode";

import { saveGeneralEnquiry } from "../../api/generalEnquiry";

export const FixedEnquiry = () => {
  const initialState = {
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
    dial1: "",
  };
  const initialStateErrors = {
    name: { required: false },
    mobileNumber: { required: false },
dail:{required:false},
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
          navigate("/");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };

  return (
    <>
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col">
            <button
              className="btn rounded-0 fixed-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              E <br /> n <br /> q <br /> u <br /> i <br /> r <br /> y
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-3 fw-bold"
                      id="exampleModalLabel"
                    >
                      Enquiry Form
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
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
                          className="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Send
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
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
export default FixedEnquiry;
