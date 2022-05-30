import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation()
{
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Woof Woof</div>
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