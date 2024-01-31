import React from "react";

export default function Banner(){
    return(
        <>
        <div className="home"  >
        {/* this section two content first is text info and second is banner */}
         <div className="content">
                <div className="content1">
                    <p id="mycon" className="headtitle" style={{fontFamily:"cursive"}}>
                   {/* We Build APP & Website <br/>
                   For your Business . */}
                   Web Developement
                   <br/>
                   Services Provider
                    <br/>
                    <p className="text-center" id="inside-info" >
                        hackjack is Software developement platform.     
                       
                     It's build amazing website & App for your Business.
                        
                        grow your Business building Website & App .
                       <br/>
                       
                        
                        {/* <br/> */}
                        
                    </p>
                    <a className="btn btn-light" id="contact-btn" href="/contact"  >Contact me {">"}</a>
                    
                    </p>
                   
                </div>
                <div className="content2">
                    <img src="dev.jpg" style={{width:"50%"}}></img>
                </div>
            </div>
            
        </div>
        </>
    );
}