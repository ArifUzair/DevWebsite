import React from "react";
import { NavLink } from "react-router-dom";
import web from "./Images/rocket-maker.png";
export default function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="mt-1">
                    {props.name} <strong className="brand-name"> {props.name2}</strong>
                  </h1>
                  <h2 className="my-1">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img ">
                  <img
                    src={web}
                    alt="img_animated"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
