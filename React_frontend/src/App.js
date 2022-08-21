import Navbar from "./Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import axios from "axios";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App

import "./App.css";
import React, { useState, useRef } from "react";
import { useScript } from "./hooks/useScript";
import jwt_deocde from "jwt-decode";

const App = () => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);
    setuser(payload);
  };
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "514456016237-se5a8cq9v7pl3jnntdo96qr7crn0fjuq.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  

  return (
    <>
    {/* <button onClick={getquote}>Click me</button> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<div
          >
            {!user && <div ref={googlebuttonref} id="pehlebtn"></div>}
            {user && (
              <div>
                <div id="upr">
                  <div id="uppertwo">
                    <img  id="usrimg" src={user.picture} alt="profile" />
                    <button className="button-33" id="logoutbtn"
                    onClick={() => {
                      setuser(false);
                    }}
                  >
                    Logout
                  </button>
                    </div>
                    <h1 id="usrnme">{"Hello! " + user.name}</h1>
                    {/* <p>{user.email}</p> */}
                

                  
                </div>

                <Home />
              </div>
            )}
          </div>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>



    </>
  );
};

export default App;