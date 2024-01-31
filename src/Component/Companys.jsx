import React from "react";

export default function Companys(){
    return(
        <>
             <div className="our-partner" >
            <div className="text-center h2 p-3" style={{fontFamily:"cursive",}}>
            OUR PARTNERS
            </div>
          
  <div className="company-imgs" >
    <div className="img1">
    <img src="c1.jpg" alt=""/>
    <img src="c2.jpg" alt=""/>
    </div>
    <div className="img2">
    <img src="c3.jpg" alt=""/>
    <img src="c4.jpg"  width={100} height={64}alt="" style={{margin:"auto"}}/>
    </div>
  </div>
          </div>
        </>
    )
}