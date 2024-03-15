import React from "react";

export default function Footer(){
    return(
        <>
        <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="footer " style={{width:"100%"}}>
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Hackjack</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
              HackJack, is software development company, is a cutting-edge tech powerhouse dedicated to crafting innovative solutions. With a team of skilled professionals, you specialize in custom software development, emphasizing agile methodologies, user-centric design, and robust cybersecurity measures. HackJack ensures client collaboration, 
              delivering bespoke, scalable, and quality software that propels businesses into the future.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                 Web Development
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                 App Development
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Web Design
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                 Content Writter
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                Paid Promotion
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
              Desktop Application
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="https://www.linkedin.com/in/kiran-ugale-869060270/" className="text-white">
                Linkedin
                </a>
              </p>
              <p>
                <a href="https://github.com/kiranugale2o" className="text-white">
                Github
                </a>
              </p>
              <p>
                <a href="https://wa.me/8010077453" className="text-white">
                  Whatsapp
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/_kiran_patil_41/" className="text-white">
                  Instagram
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> Sai nagar,umarakhed,dist.yawatamal ,MH
              </p>
              <p>
                <i className="fas fa-envelope mr-3" />hackjackdeveloper@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> +918010077453
              </p>
              {/* <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89
              </p> */}
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="#home">
         Hackjack
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

        </>
    );
}