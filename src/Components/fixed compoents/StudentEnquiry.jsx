import React from 'react'

export const StudentEnquiry = () => {
  return (
    <div className=" card  my-3 bg-light" >
              <h5 className="card-title text-center fw-bold p-2" style={{color:'#fe5722'}}>ENQUIRY WITH US!</h5>
              <img src="https://harnesstechniques.com/img/enquiry.jpg" alt="" className="card-img-top rounded-0 h-100 p-2 rounded-0" />
              <form action="" className="p-2">
                
          
              <div class="form-floating mb-3">
                        <input class="form-control " id="floatingInput" type="email" placeholder="Your Name"/>
                        <label for="floatingInput">Your Name</label>
                      </div>
              <div class="form-floating mb-3">
                        <input class="form-control" id="floatingInput" type="email" placeholder="Email Address"/>
                        <label for="floatingInput">Email Address</label>
                      </div>
                      <div class="input-group mb-3">
  <button class="btn dropdown-toggle" style={{backgroundColor:'#fe5722',color:'#fff'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">+91 India</a></li>
    <li><a class="dropdown-item" href="#">+91 India</a></li>
    <li><a class="dropdown-item" href="#">+91 India</a></li>
   
    
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
</div>

<div class="form-floating mb-3">
                        <textarea class="form-control" id="floatingTextarea2" placeholder="Leave a comment here" style={{height:" 100px"}}></textarea>
                        <label for="floatingTextarea2">Message</label>
                      </div>
                 <div className=" text-center mb-3">
                  <a href="" className="btn text-uppercase text-white fw-bold" style={{backgroundColor:'#fe5722'}}>send message</a>
                  </div>  
                    
                    
                    
              </form>
            </div>
  )
}
export default StudentEnquiry