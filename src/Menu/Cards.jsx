import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cards(props) {
  return (
   <>
           <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={props.imgsrc}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                    <ul>
                      <li>{props.description}</li>
                      <li>{props.description2}</li>
                      <li>{props.description3}</li>
                      <li>{props.description4}</li>
                    </ul>
                    </p>
                    <div className='text-center'>
                    <NavLink to="" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                    </div>
                  </div>
                </div>
                </div>
            
   </>
  )
}
