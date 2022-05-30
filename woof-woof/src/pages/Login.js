import Card from "../components/ui/Card";
import classes from './Login.module.css'

function LoginPage() {
    return (
      <div className={classes.wrapper}>
        <Card>
        <form action="login.php" method="POST" className={classes.form}>
          <div >
              <div className={classes.control}>
                <label for="email" >Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email ID" required/>                 
              </div>
              <div className={classes.control}>
                <label for="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="Enter password" required/>
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