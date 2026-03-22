import React from "react";

function LoginPage() {
    const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Verdana, sans-serif",
      }}
    >
      {/* Left Section (40%) */}
      <div
        style={{
          flex: "0 0 70%", // 40% width
          backgroundColor: "#e8f8e8", // soft green background
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "green",
            fontSize: "6rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: 0,
          }}
        >
          AyurVik
        </h1>
      </div>

      {/* Right Section (60%) */}
      <div
        style={{
          flex: "0 0 60%", // 60% width
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "3rem",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            width: "450px",
            maxWidth: "100%",
            border: "2px solid #2e8b57",
            boxSizing: "border-box",
          }}
        >
          <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""}onClick={()=> setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""}onClick={()=> setIsLogin(false)}>Sign Up</button>
                    </div>

                    {isLogin ? <>
                        <div className='form'>
                            <h2>Login now</h2>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <a href='#'>Forgot Password?</a>
                            <button>Login</button>
                            <p>Not registered? <a href='#' onClick={()=> setIsLogin(false)}>Sign up Now</a></p>
                        </div>
                   </> : <> 
                   <h2>Signup now</h2>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <button>Sign Up</button>


                   </>}
                        
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
