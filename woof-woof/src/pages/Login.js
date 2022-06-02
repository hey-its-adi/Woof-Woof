import classes from './Login.module.css'
import React, {useState} from 'react';

function LoginPage({setRender}) {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);

  async function submitHandler(event){
   
    /*if(password==="1234"){
      setRender(true);
    }*/
    event.preventDefault();
    const formData = {
            email,password
    }
    let res =  await fetch("http://localhost:8000/login",{
            method : 'POST',
            headers :{
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
            },
            body : JSON.stringify(formData)
    })
    
   
  
    event.preventDefault();
  }

    return (
      <div className={classes.wrapper}>
        <form method="POST" className={classes.form} onSubmit={submitHandler}>
          <div >
              <div className={classes.control}>
                <label htmlFor="email" >Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email ID" required onChange={(e)=> setEmail(e.target.value)}/>                 
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className={classes.actions}>
                  <button type="submit" name="submit" id="submit">LOGIN</button>          
              </div>
          </div>
        </form>
      </div>
    )
  }
  
  export default LoginPage;