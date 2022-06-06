import classes from './Signup.module.css'
import {useState} from 'react';

function SignUp(){
        const [Name, setName] = useState(null);
        const [Email, setEmail] = useState(null);
        const [Password, setPassword] = useState(null);
        const [Phone, setPhone] = useState(null);
        const [UserType, setUserType] = useState(null);
        const [Address, setAddress] = useState(null);

        async function submitHandler(event){
               
                event.preventDefault();
                const formData = {
                        Name,Email,Password,Phone,UserType,Address 
                }
                let res =  await fetch("http://localhost:8000/signup",{
                        method : 'POST',
                        headers :{
                                'Accept' : 'application/json',
                                'Content-Type': 'application/json'
                        },
                        body : JSON.stringify(formData)
                })
                
        
        }
        return(
        <div className={classes.SignUp}>
        <div className={classes.Wrapper}>

                <form onSubmit={submitHandler} method="POST" className={classes.form}>
                <div className={classes.control}>    
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" size="30" maxLength={30} placeholder="Enter your name" required onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter a valid email ID" size="30" required onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" maxLength={30} size="30" placeholder="Enter password" required onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div  className={classes.control}>    
                        <label htmlFor="phone">Phone</label>
                        <input type="number" id="phone" name="phone" placeholder="Enter a valid Phone number" size="12" required onChange={(e)=> setPhone(e.target.value)}/>
                </div>       
                <div className={classes.control}>
                        <label htmlFor="user" >User Type</label>
                        <select id="user" name="user" value={UserType} onChange={(e)=> setUserType(e.target.value)}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="Individual">Individual</option>
                        <option value="Organisation">Organisation</option>
                        </select>
                </div>
                <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="Enter Address" size="25" required onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <div className={classes.actions}>
                        <button type="submit" id="submit" name="submit" onSubmit={submitHandler}>SIGN UP</button>
                </div>
                </form>
      </div>
      </div>
    )
}

export default SignUp;