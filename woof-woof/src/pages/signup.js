import Card from "../components/ui/Card";
import classes from './Signup.module.css'
function SignUp(){
    return(
        <Card>
        <form action="signup.php" method="POST" className={classes.form}>
        <div className={classes.control}>    
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" size="30" maxlength="30" placeholder="Enter your name" required/>
        </div>
        <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" maxlength="30" size="30" placeholder="Enter password" required/>
        </div>
        <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter a valid email ID" size="30" required/>
        </div>
        <div  className={classes.control}>    
                <label htmlFor="phone">Phone</label>
                <input type="number" id="phone" name="phone" placeholder="Enter a valid Phone number" size="12" required/>
        </div>       
        <div className={classes.control}>
                <label htmlFor="user">User Type</label>
                <select id="user" name="user">
                <option value="Individual">Individual</option>
                <option value="Organisation">Organisation</option>
                </select>
        </div>
        <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Enter Address" size="25" required/>
        </div>
        <div className={classes.actions}>
                <button type="submit" id="submit" name="submit">SIGN UP</button>
        </div>
      
      </form>
      </Card>
    )
}

export default SignUp;