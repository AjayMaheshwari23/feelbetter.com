import "./Home.css";
import axios from "axios";
import React , { useState} from 'react'

// import React , {useState , useEffect} from 'react';


// import "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js";


<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>


export default function Home() {

  const [quotes, setQuotes] = useState("");

  
  const getquote = () => {
    // axios.get('https://api.adviceslip.com/advice')
    axios.get('http://type.fit/api/quotes')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data[1].text);
      console.log("I am clicked");
      let randomNum = Math.floor(Math.random()*data.length());
      setQuotes(data[randomNum]);
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
  params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

/*
const kk = 
  window.onload = function () {
  document.getElementById("cmd").addEventListener("click", () => {
    const quotte = this.document.getElementById("quoteparent");
    html2pdf().from(quotte).save();
  });
};
 */
// var RESPO ="dd";
// var quotediv = document.getElementById('quote');
// const getquote = () =>{
//   axios.get('http://api.quotable.io/random')
//   .then(res=>{
//     console.log(res.data);
//     RESPO = res.data;
//     quotediv.innerText=res.data.content;
    
//   }).catch(err=>{
//     console.log(err )
//   })
// }
 
  const copykardo = () => 
  {
    console.log("copy karo");
    var r = document.createRange();
    r.selectNode(document.getElementById("quote"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  return     <>

      <div className="container">
      <button onClick={getquote}>Click me</button>
        <div id="quoteparent"><p id="quote">❝<br/>{quotes.text}<br/>❞</p></div>
        <div id="buttons">
            <br/><br/><a href="#"><button id="likebtn" className="button-33" role="button" /*data-hover="♡"*/>Like 💚</button></a>
            <button onClick={copykardo} className="button-33" role="button">Copy text</button>
        </div>
            <div id="downloadbutton"><br/><button id="cmd" className="button-86" role="button">Download</button></div>
            {/* <div id="downloadbutton"><br/><button id="cmd" onClick={kk} className="button-86" role="button">Download</button></div> */}
    </div>
    <footer>
        <div className="container">
            <div id="footer"><p>This site is managed and developed by K_Proj<br/>© Copyright 2022</p></div>
        </div>
    </footer>
    </>
  
}
