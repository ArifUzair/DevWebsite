import React from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import CardData from "./CardData";

import Creativee from "./Images/code-unscreen.gif";
export default function Services() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row bgBlack">
          <div className="col-md-6 my-auto">
            <h1 className="ENS_services">Our Services</h1>
            <p className="ens_qoutes">Creative Coding </p>
          </div>
          <div className="col-md-6 my-auto">
            <img src={Creativee} alt="" className="img-fluid " />
          </div>
        </div>
      </div>
      <div  className="dreamBuild">
       <p className="dreamTitle col-10 mx-auto mt-3" >Your Dream</p>
       <p className="dreamTitle col-10 mx-auto  dreamsubtitle">We Build</p>
       <div className="line"></div>
       <div className="dreamDescription col-10 mx-auto mt-4">
            <h3 className="dreamHead ">We Execute  your ideas from <span className="dreamStart">The Start To Finish.</span></h3>
            <p>We have established a reputation for consistently delivering mission critical,technically challenging projects under tight timelines,while also providing exceptional customer service and support to our client.</p>
       </div>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 mt-2">
             {
              CardData.map((val,index)=>{
                return <Cards 
                key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  description={val.description}
                  description2={val.description2}
                  description3={val.description3}
                  description4={val.description4}
                />
              })
             }
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
