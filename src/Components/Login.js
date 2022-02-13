import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
    const [credentials, setcredentials] = useState({email:"",password:""});
  let navigate=useNavigate();
    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});//That means note jaisa hai use aise hi rehne dete hain aur replace karte hain empty string ko input ke through
        }
    const handleSubmit=async(e)=>{
        e.preventDefault();
         //Api call
  const response = await fetch(`http://localhost:5000/api/auth/login`, {
    method: 'POST', 
   
    headers: {
      'Content-Type': 'application/json',
   
    },
   
    body: JSON.stringify({email:credentials.email,password:credentials.password}) 
  });
  const json=await response.json();
  console.log(json);
  if(json.success){
      //Save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
    navigate('/');
  }
  else{
      alert("Invalid credentials");
  }
    }
  return (
    <div className='container'>
       <form  onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email address</label>
    <input type="email" value={credentials.email} class="form-control" onChange={onchange} id="email" name='email' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" onChange={onchange} name="password" value={credentials.password} id="password"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login