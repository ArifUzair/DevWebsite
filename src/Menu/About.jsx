import React from "react";
import Common from "./Common";
import Wethree from "./Images/softwareDeveloper.jpg";
import ShopifyPlus from "./ShopifyPlus";
export default function About() {
  return (
    <>
      <Common
        name="Welcome to"
        name2="About page"
        visit="./about"
        btname="Contact Now"
      />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 mt-2">
              <img src={Wethree} alt="" className="img-fluid" />
            </div>
            <div className="aboutContent">
              <h2>Amazing Facts about us</h2>
              <div className="aboutLine"></div>
              <ul>
                <li className="facts">
                  Distinguish Shopify Plus Partner Agency & Shopify Experts.
                </li>
                <li className="facts">
                  Providing Solution to 4 FMCG Companies Among Top 10.
                </li>
                <li className="facts">
                  Recognized by विशिष्ट उद्दमी पुरष्कार in IT field By U.P Govt.
                </li>
                <li className="facts">The TSP for ONDC.</li>
                <li className="facts">
                  Provides Complete Solutions for All Your Business Need.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ShopifyPlus/>

    </>
  );
}
