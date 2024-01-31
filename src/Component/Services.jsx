import React from "react";
import './home.css';

export default function Services(){
    return(<>
    <div className="services">
            <p className="text-center h2">Our Services</p>
            <div className="serv1">
            <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded border" id="card">
  <img src="dev.jpg" className="card-img-top" id="cardimg" alt="" />
  <div className="card-body">
    <h5 className="card-title" style={{margin:"-20px 60px",fontSize:"26px",fontFamily:"cursive",color:"royalblue"}}>Web Desing</h5>
    <p className="card-text" style={{margin:"25px auto",fontWeight:"300",fontFamily:"sans-serif",color:"gray",fontSize:"17px"}}>
    Web design is the creation of websites and pages to reflect a company’s brand and information and ensure a user-friendly experience.
    </p>
 </div>
  </div>
  <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded border"id="card">
  <img src="dev.jpg" className="card-img-top" id="cardimg" alt="" />
  <div className="card-body">
    <h5 className="card-title" style={{margin:"-20px 10px",fontSize:"26px",fontFamily:"cursive",color:"royalblue"}}>Web Developement</h5>
    <p className="card-text" style={{margin:"25px auto",fontWeight:"300",fontFamily:"sans-serif",color:"gray",fontSize:"17px"}}>
   Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. 
     </p>
  </div>
  </div>
  
  <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded border" id="card">
  <img src="dev.jpg" className="card-img-top" id="cardimg" alt="" />
  <div className="card-body">
    <h5 className="card-title" style={{margin:"-20px 20px",fontSize:"26px",fontFamily:"cursive",color:"royalblue"}}>App Developement</h5>
    <p className="card-text" style={{margin:"25px auto",fontWeight:"300",fontFamily:"sans-serif",color:"gray",fontSize:"17px"}}>
    App development is the process of creating software applications for mobile devices such as smartphones and tablets.
     </p>
 </div>
 </div>

  </div>
  <div className="serv2">
  <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded border" id="card">
  <img src="dev.jpg" className="card-img-top" id="cardimg" alt="" />
  <div className="card-body">
    <h5 className="card-title" style={{margin:"-20px 20px",fontSize:"26px",fontFamily:"cursive",color:"royalblue"}}>Content Writing</h5>
    <p className="card-text" style={{margin:"25px auto",fontWeight:"300",fontFamily:"sans-serif",color:"gray",fontSize:"17px"}}>
    Content writing is the art of crafting words that captivate, inform, and inspire. It's the seamless blend of creativity and strategy, where every sentence weaves a story and every paragraph imparts knowledge.
       </p>
 </div>
  </div>
  <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded border"id="card">
  <img src="dev.jpg" className="card-img-top" id="cardimg" alt="" />
  <div className="card-body">
    <h5 className="card-title" style={{margin:"-20px 30px",fontSize:"26px",fontFamily:"cursive",color:"royalblue"}}>Paid Promotion</h5>
    <p className="card-text" style={{margin:"25px auto",fontWeight:"300",fontFamily:"sans-serif",color:"gray",fontSize:"17px"}}>
    Paid promotion is a great opportunity to assess whether your content is working and whether your marketing message resonates with your audience.
    </p>
  </div>
  </div>
  
  <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded border"id="card" >
  <img src="dev.jpg" className="card-img-top" id="cardimg" alt="" />
  <div className="card-body">
    <h5 className="card-title" style={{margin:"-20px 10px",fontSize:"26px",fontFamily:"cursive",color:"royalblue"}}>Desktop Application </h5>
    <p className="card-text" style={{margin:"25px auto",fontWeight:"300",fontFamily:"sans-serif",color:"gray",fontSize:"17px"}}>
    Desktop applications are software programs run locally on computer devices. They aren’t accessible from a browser, like web-based apps, and require deployment on a personal computer or laptop.
    </p>
 </div>
 </div>

  </div>
  </div>
  
  <div className="industry-ser" style={{backgroundImage:"url('industryser.jpg')",width:"100%",color:"white"}}>
    
  <div className="text-center p-5 h1  " id="in-text" >Industries We Served </div>
  <div className="loading-animation">
    <div className="under" ></div>
  </div>
     <div className="list " >
        <div className="list1">
         <ul>
            <li>Automotive</li>
            <li>Healthcare</li>
            <li>Education and e-learning</li>
            <li>Entertainment</li>
            <li>Hospitality</li>
         </ul>
        </div>
        <div className="list2">
        <ul>
            <li>Business</li>
            <li>Startups</li>
            <li>Travel</li>
            <li>Ecommerce</li>
         </ul>
        </div>
     
      </div>
      </div>
     
        

    </>);
}

// Style is define in home.css file 