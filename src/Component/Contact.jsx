import React from "react";
import './contact.css';
import Navbar from "./Navabr";
import Footer from "./Footer";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHPbWwpLv5ZlLY4BxZx0DBJnAaju9B_e8",
  authDomain: "hackjackdata.firebaseapp.com",
  databaseURL: "https://hackjackdata-default-rtdb.firebaseio.com",
  projectId: "hackjackdata",
  storageBucket: "hackjackdata.appspot.com",
  messagingSenderId: "729134196488",
  appId: "1:729134196488:web:d38b74dea7eedc16e9eebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default function Contact(){


  const getData=(event)=>{
    event.preventDefault();

    const services = event.target.selects.value;
    const username= event.target.name.value;
    const userNumber = event.target.number.value;
    const message = event.target.message.value;
    writeUserData(username,userNumber,services,message)
  }

  function writeUserData( username,userNumber,services,message) {
    const db = getDatabase();
    set(ref(db, 'Hackjack_Client/' + username), {
      username: username,
      userNumber:userNumber,
      userServices:services,
      userMessage:message,
    }).then(alert("ok"))
  }
    return(
        <>
<Navbar/>
<>
 
  <div className="container border  shadow-lg p-3 mb-5 bg-white rounded " id="form" >
    <form onSubmit={getData}>
    <div className="text-center h2 p-3" style={{margin:"10px 15%",fontFamily:"cursive"}}>Contact Form</div>
  
        <label htmlFor="name" >Enter Name</label>
        <input type="text" id="fname"   required name="name" style={{borderColor:"black"}} />

        <label htmlFor="number" >Mobile no.</label>
        <input type="text" id="number"   required name="number" style={{borderColor:"black"}} />
       
        <select   required class="form-select" aria-label="Default select example" name="selects" style={{borderColor:"black"}} >
  <option  selected>Select Service</option>
  <option value="Wel Development">Web Development</option>
  <option value="web desing">Web desing</option>
  <option value="app development">App Development</option>
  <option value="desktop ">Desktop Application Development</option>
  <option value="content ">Content Writter</option>
  <option value="business"> Business Promotion</option>


</select>
<label htmlFor="message">Message</label>
<textarea class="form-control" aria-label="With textarea" name="message" style={{borderColor:"black"}} ></textarea>
<button type="submit" name="submit" className="btn btn-primary" style={{margin:"auto",width:"99%"}}>Submit</button>
    </form>
    <br/>
    <br/>
  </div>
</>
<Footer/>


      </>
    )}
