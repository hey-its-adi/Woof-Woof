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
    let res = await fetch("http://localhost:8000/login",{
          credentials: 'include',
            method : 'POST',
            headers :{
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
            },
            body : JSON.stringify(formData)
    })
    let response = await res.json()
    console.log(await response)
    let username = await response.result1[0].name;
    if(res.ok) {
      setRender({
        render: true,
        username: username,
      });
      console.log("logged");
    } else {
      console.log("try again")
    }
    const result = await res.json();
    console.log(result);
  
    event.preventDefault();
  }

    return (
      <div className={classes.Login}>
      <div className={classes.Wrapper}>
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
      </div>
    )
  }
  
  export default LoginPage;