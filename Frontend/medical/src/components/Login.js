import React from 'react'
import { useState, } from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate()
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:8000/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json=await response.json()

        console.log(json)
        if (json.success) {
            localStorage.setItem('token',json.token)
            navigate('/dashboard')
        }
        else{
            console.log("Error")
        }
    }

    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
       <>
       <div className="container" style={{ "marginTop": "4rem" }}>
            <h2>Login to continue</h2>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onchange} name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onchange} id="password" name="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary"  >Submit</button>
            </form>
        </div>
            {/* <div class="row">
                <div class="col-md-6 mx-auto p-0">
                    <div class="card">
                        <div class="login-box">
                            <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                                <div class="login-space">
                                    <div class="login">
                                        <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Enter your username" /> </div>
                                        <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password" /> </div>
                                        <div class="group"> <input id="check" type="checkbox" class="check" checked /> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                        <div class="group"> <input type="submit" class="button" value="Sign In" /> </div>
                                        <div class="hr"></div>
                                        <div class="foot"> <a href="#">Forgot Password?</a> </div>
                                    </div>
                                    <div class="sign-up-form">
                            <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Create your Username"> </div>
                            <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"> </div>
                            <div class="group"> <label for="pass" class="label">Repeat Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Repeat your password"> </div>
                            <div class="group"> <label for="pass" class="label">Email Address</label> <input id="pass" type="text" class="input" placeholder="Enter your email address"> </div>
                            <div class="group"> <input type="submit" class="button" value="Sign Up"> </div>
                            <div class="hr"></div>
                            <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                        </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
            )
}

            export default Login
