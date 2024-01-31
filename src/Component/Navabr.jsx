import React from "react";
import "./navbar.css";
export default function Navbar(){

     return(
        <>
       <nav className="navbar navbar-expand-lg bg-body-black "  style={{color:"white",backgroundColor:"black",}} >
          <div className="container-fluid" >
    <a className="navbar-brand" href="#">
      <img
        src="hackjacklogo.png"
        alt="Bootstrap"
        width={150}
        height={36}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{color:"black",backgroundColor:"white",border:"0px"}}
    >
      <span className="navbar-toggler-icon"  />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" >
        <a className="nav-link active" aria-current="page" id="nlink" href="/" >
          Home
        </a>
        <a className="nav-link" id="nlink" href="/#services">
         Services
        </a>
        <a className="nav-link" id="nlink" href="/#projects">
         Projects
        </a>
        
        <a className="nav-link" id="nlink" href="/#contact">
         About
        </a>
        <a href="contact"
       className="btn btn-light" id="contact-btn-in" style={{margin:"10px ",height:"40px",fontFamily:"cursive",fontSize:"20px"}}>Contact</a>
                    
      </div>
    </div>
  </div>
</nav>


        
        </>
     );
}