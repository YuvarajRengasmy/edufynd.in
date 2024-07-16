import React from 'react'

export const FixedEnquiry = () => {
  return (
    <>
    <div className="container">
  <div className="row">
    <div className="col">
      <button className="btn rounded-0 fixed-button" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        E <br /> n <br /> q <br /> u <br /> i <br /> r <br /> y
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3 fw-bold" id="exampleModalLabel">Enquiry Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" className="">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Enter Your Name.." />
                  <label htmlFor="floatingInput">Enter Your Name..</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingPassword" placeholder="Enter Your Email.." />
                  <label htmlFor="floatingPassword">Enter Your Email..</label>
                </div>
                <div className="input-group mb-3">
                  <button className="btn dropdown-toggle" style={{ backgroundColor: '#fe5722', color: '#fff' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">+91</a></li>
                    <li><a className="dropdown-item" href="#">+91</a></li>
                    <li><a className="dropdown-item" href="#">+91</a></li>
                  </ul>
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Enter Your Phone..' />
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                  <label htmlFor="floatingTextarea2">Type Message</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Send</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
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
export default FixedEnquiry