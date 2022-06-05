import React from 'react'
import classes from './MainNavigation.module.css'
import HomePage from './AllMeetups'
import SignUp from './signup';
import LoginPage from './Login'
import {FaDog} from 'react-icons/fa'
import {IoHomeOutline} from 'react-icons/io5'
import {IoIosLogIn} from 'react-icons/io'
import {ImUserPlus} from 'react-icons/im'
import {useState} from 'react'

function AppMainNavigation ({setRender}) {
  const [hcolor, sethcolor] = useState('blue')
    const [lcolor, setlcolor] = useState('blue')
    const [scolor, setscolor] = useState('blue')
    const [hrender,sethrender]= useState(true)
    const [lrender, setlrender] = useState(false)
    const [srender, setsrender] = useState(false)

    function changeHcolor(){
        sethcolor('red');
        setlcolor('blue');
        setscolor('blue');
        sethrender(true);
        setlrender(false);
        setsrender(false);

    }

    function changeLcolor(){
        setlcolor('red');
        sethcolor('blue');
        setscolor('blue');
        sethrender(false);
        setlrender(true);
        setsrender(false);
    }
    function changeScolor(){
        setscolor('red');
        setlcolor('blue');
        sethcolor('blue');
        sethrender(false);
        setlrender(false);
        setsrender(true);
    }

  return (
    <div className={classes.AppContainer}>
      <div className={classes.TopBar}>            
            <div className={classes.TopLeftBar}>
                <span><FaDog size={'3rem'}/></span>
                <h1><span>Woof </span><span>Woof</span></h1>
            </div>
            <div className={classes.TopRightBar}>
                    <span><IoHomeOutline size={'2rem'} color={hcolor} onClick={changeHcolor} /></span>
                    <span><IoIosLogIn size={'2rem'} color={lcolor} onClick={changeLcolor} /></span>
                <span><ImUserPlus size={'2rem'} color={scolor} onClick={changeScolor} /></span>
            </div>

        </div>
            {hrender && <HomePage/>}
            {srender && <SignUp/>}
            {lrender && <LoginPage setRender={setRender}/>}
    </div>
  )
}

export default AppMainNavigation