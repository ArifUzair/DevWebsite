import React from "react";
import ShopifyP from "./Images/shopifyplus.png";

export default function ShopifyPlus() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="shopifyImg">
                <img
                  src={ShopifyP}
                  alt="ShopifyPlus"
                  className="img-fluid"
                />
              </div>
              <div className="shopifyHead my-3">
                <h3 className="fw-bold text-uppercase">You know retail <span className="brand-name">we know tech</span> </h3>
                <div className="aboutLine"></div>
                <p>Making commerce better <span className="ShopifyBlue">for everyone with our advance features.</span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
