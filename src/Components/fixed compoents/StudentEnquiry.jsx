import React, { useEffect, useState } from "react";
import { isValidEmail, isValidPhone } from "../../Utils/validataion";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { saveStudnetEnquiry } from "../../api/studentEnquiry";
import { getallCode } from "../../api/counteyCode";

export const StudentEnquiry = () => {
  const initialState = {
    name: "",
    primaryNumber: "",
    email: "",
    dial1:"",
    message: "",
  };


  const initialStateErrors = {
    name: { required: false },
    primaryNumber: { required: false, valid: false },
    dial1:"",
    email: { required: false, valid: false },
    message: { required: false },
  };

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
    let error = { ...initialStateErrors };
    if (!data.name) {
      error.name.required = true;
    }
  
    if (!data.primaryNumber) {
      error.primaryNumber.required = true;
    } else if (!isValidPhone(data.primaryNumber)) {
      error.primaryNumber.valid = true;
    }
    if (!data.email) {
      error.email.required = true;
    } else if (!isValidEmail(data.email)) {
      error.email.valid = true;
    }
    return error;
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setForex({ ...forex, [name]: value });
    if (submitted) {
      const newError = handleValidation({ ...forex, [name]: value });
      setErrors(newError);
    }
  };

  const handleErrors = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const prop = obj[key];
        if (prop.required || prop.valid) {
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newError = handleValidation(forex);
    setErrors(newError);
    setSubmitted(true);
    if (handleErrors(newError)) {
      saveStudnetEnquiry(forex)
        .then((res) => {
          toast.success("Study Enquiry Submitted Successfully");
          navigate("/StudyDestination");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };

  return (
    <div className="card my-3 bg-light">
      <h5
        className="card-title text-center fw-bold p-2"
        style={{ color: "#fe5722" }}
      >
        ENQUIRY WITH US!
      </h5>
      <img
        src="https://harnesstechniques.com/img/enquiry.jpg"
        alt=""
        className="card-img-top rounded-0 h-100 p-2 rounded-0"
      />
      <form className="p-2" onSubmit={handleSubmit}>
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
          <label htmlFor="floatingPassword">Enter Your Email..</label>
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
            name="primaryNumber"
            placeholder="Enter Your Phone.."
            onChange={handleInputs}
          />
          {errors.primaryNumber.required && (
            <span className="text-danger">Mobile number is required</span>
          )}
          {errors.primaryNumber.valid && (
            <span className="text-danger">Invalid mobile number</span>
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
          <button type="submit" className="btn btn-success">
            Send
          </button>
          <button type="button" className="btn btn-danger">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentEnquiry;
