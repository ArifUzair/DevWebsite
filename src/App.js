import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./Menu/Home"
import Contact from "./Menu/Contact"
import About from "./Menu/About"
import Navbar from "./Menu/Navbar"
import Services from "./Menu/Services";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route  exact path="/" element={<Home/>}/>
    <Route exact  path="/contact" element={<Contact/>}/>
    <Route  exact path="/about" element={<About/>}/>
    <Route exact path="/service" element={<Services/>}/>
     </Routes>
    </>
  );
}

export default App;
