// import "./Login.css";
// import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = "514456016237-se5a8cq9v7pl3jnntdo96qr7crn0fjuq.apps.googleusercontent.com";

// function Login() {

//   const [showloginButton, setShowloginButton] = useState(true);
//   const [showlogoutButton, setShowlogoutButton] = useState(false);
//   const onLoginSuccess = (res) => {
//     console.log('Login Success:', res.profileObj);
//     setShowloginButton(false);
//     setShowlogoutButton(true);
    
//   };

//   const onLoginFailure = (res) => {
//     console.log('Login Failed:', res);
//   };

//   const onSignoutSuccess = () => {
//     alert("You have been logged out successfully");
//     console.clear();
//     setShowloginButton(true);
//     setShowlogoutButton(false);
//   };

//   return (
//     <div>
//       {showloginButton ?
//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Sign In"
//           onSuccess={onLoginSuccess}
//           onFailure={onLoginFailure}
//           cookiePolicy={'single_host_origin'}
//           isSignedIn={true}
//         /> : null}

//       {showlogoutButton ?
//         <GoogleLogout
//           clientId={clientId}
//           buttonText="Sign Out"
//           onLogoutSuccess={onSignoutSuccess}
//         >
//         </GoogleLogout> : null
//       }
//     </div>
//   );
// }
// export default Login;

import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div id='container'>
    <h1 id="mainheading">We Work to make you feel Motivated and try 
    to maintain the Smile on Your Face ! If you also feel
     the same do show your support by contributing us . Thank You !</h1>

<div id='payment'>
  <img src="images/pexels-adrien-olichon-2387793.jpg" alt="Something Went Wrong" />
</div>
    </div>
  )
}
