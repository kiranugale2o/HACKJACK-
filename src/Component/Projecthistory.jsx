import React from "react";


export default function Projecthistory(){
    return(
        <>
         {/* PROJECT NUMBER AND CLIENT */}
         <div className="boxs shadow-lg p-1 mb-5 bg-body-tertiary rounded">
            <div className="box1">
                <div className="icon1"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" style={{margin:"10px"}} fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg></div>
                <div className="text1">
                    <p style={{width:"100%"}}>Happy Client</p>
                   <div style={{margin:"-10px 0px"}} className=" h1 ">+10</div>
                </div>
            </div>
            <div className="box2">
            <div className="icon2"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" style={{margin:"3px"}} fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
</svg></div>
                <div className="text2">
                    <p style={{width:"100%"}}>Project Demo</p>
                   <div style={{margin:"-10px 0px"}} className=" h1 ">+30</div>
                </div>
            </div>
            <div className="box3">
            <div className="icon3"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" style={{margin:"4px"}} fill="currentColor" class="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
  <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg></div>
                <div className="text3">
                    <p style={{width:"100%"}}>Years of Experience</p>
                   <div style={{margin:"-10px 0px"}} className=" h1 ">1+</div>
                </div>
            </div>
        </div>
    
        </>
    );
}