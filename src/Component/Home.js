import React from "react";
import './home.css';
import Services from "./Services";
import Staff from "./Staff";
import Banner from "./Banner";
import Projecthistory from "./Projecthistory";
import Technologyuse from "./Technologyuse";
import Companys from "./Companys";
import Footer from "./Footer";
import Navbar from "./Navabr";

import Contact from "./Contact";
export default function Home(){

    return(
        <>
        <Navbar/>

        <div id="home"> <Banner/></div>
         <div id="projects"> <Projecthistory/></div>
        
         <div id="services"> <Services/></div>
        
         <Technologyuse/>
         <Companys/>           
          <div className="about" id="aboutme">
            <div className="text-center h2 p-3" style={{fontFamily:"cursive"}}>
               Hackjack Staffing
            </div> <Staff/></div>
<div id="contact"> <Footer/></div>


           
              </>
    )
}