import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation()
{
    return(
        <header className={classes.header}>
            
            <div className={classes.logo}>
            <img src='https://blog.mystart.com/wp-content/uploads/shutterstock_224423782-1-e1527774744419.jpg' width={50} height={50}/>
            <h1 >Woof Woof</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                        
                    </li>
                    <li>
                        <Link to='/signup'>SignUp</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainNavigation;