import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import {FaDog} from 'react-icons/fa'
import {IoHomeOutline} from 'react-icons/io5'
import {IoIosLogIn} from 'react-icons/io'
import {ImUserPlus} from 'react-icons/im'
import {useState} from 'react'

function MainNavigation()
{
    const [hcolor, sethcolor] = useState('blue')
    const [lcolor, setlcolor] = useState('blue')
    const [scolor, setscolor] = useState('blue')

    function changeHcolor(){
        sethcolor('red');
        setlcolor('blue');
        setscolor('blue');
    }

    function changeLcolor(){
        setlcolor('red');
        sethcolor('blue');
        setscolor('blue');
    }
    function changeScolor(){
        setscolor('red');
        setlcolor('blue');
        sethcolor('blue');
    }

    return(
        <div className={classes.TopBar}>
            
            <div className={classes.TopLeftBar}>
                <span><FaDog size={'3rem'}/></span>
                <h1><span>Woof </span><span>Woof</span></h1>
            </div>
            <div className={classes.TopRightBar}>
                <Link to='/'>
                    <span><IoHomeOutline size={'2rem'} color={hcolor} onClick={changeHcolor} /></span>
                </Link>
                <Link to='/login'>
                    <span><IoIosLogIn size={'2rem'} color={lcolor} onClick={changeLcolor} /></span>
                </Link>
                <Link to='/signup'>
                <span><ImUserPlus size={'2rem'} color={scolor} onClick={changeScolor} /></span>
                </Link>
     
            </div>

        </div>
    )
}

export default MainNavigation;