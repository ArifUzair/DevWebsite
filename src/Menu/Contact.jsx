import React, { useState } from "react";

export default function Contact() {
  const [data, setData]= useState({
    FullName : "",
    mobileNo: "",
    email: "",
    Message: "",
  });

  const InputEvent=(event)=>{
    const {name, value }=event.target;

     setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
     })
  }


  const formSubmit =(e)=>{
    e.preventDefault()
    alert("Thanks")  
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="FullName"
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="mobileNo"
                  value={data.mobileNo}
                  onChange={InputEvent}
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email adress"

                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <input
                  type="textarea"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="Message"
                  value={data.Message}
                  onChange={InputEvent}
                  placeholder="Fill your query here"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
