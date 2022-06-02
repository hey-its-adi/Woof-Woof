import Card from "../components/ui/Card";
import classes from './Login.module.css'
import React, {useState} from 'react';

function LoginPage() {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);

  function submitHandler(event){
    console.log('hello');
    console.log(email);
    console.log(password);
    event.preventDefault();
  }

    return (
      <div className={classes.wrapper}>
        <Card>
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
        </Card>
      </div>
    )
  }
  
  export default LoginPage;