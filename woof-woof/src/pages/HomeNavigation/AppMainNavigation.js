import React from 'react'
import classes from './MainNavigation.module.css'
import HomePage from './AllMeetups'
import SignUp from './signup';
import LoginPage from './Login'
import {FaPaw} from 'react-icons/fa'
import {IoHomeOutline} from 'react-icons/io5'
import {IoIosLogIn} from 'react-icons/io'
import {ImUserPlus} from 'react-icons/im'
import {useState} from 'react'

function AppMainNavigation ({setRender}) {
  const [hcolor, sethcolor] = useState('white')
    const [lcolor, setlcolor] = useState('white')
    const [scolor, setscolor] = useState('white')
    const [hrender,sethrender]= useState(true)
    const [lrender, setlrender] = useState(false)
    const [srender, setsrender] = useState(false)

    function changeHcolor(){
        sethcolor('#cd7918');
        setlcolor('white');
        setscolor('white');
        sethrender(true);
        setlrender(false);
        setsrender(false);

    }

    function changeLcolor(){
        setlcolor('#cd7918');
        sethcolor('white');
        setscolor('white');
        sethrender(false);
        setlrender(true);
        setsrender(false);
    }
    function changeScolor(){
        setscolor('#cd7918');
        setlcolor('white');
        sethcolor('white');
        sethrender(false);
        setlrender(false);
        setsrender(true);
    }

  return (

    <div className={classes.AppContainer}>
      <div className={classes.TopBar}>            
            <div className={classes.TopLeftBar}>
                <span><FaPaw size={'4.2rem'}/></span>
                <h1>Woof Woof</h1>
            </div>
            <div className={classes.TopRightBar}>
                    <span><IoHomeOutline size={'2.2rem'} color={hcolor} onClick={changeHcolor} /></span>
                    <span><IoIosLogIn size={'2.2rem'} color={lcolor} onClick={changeLcolor} /></span>
                <span><ImUserPlus size={'2.2rem'} color={scolor} onClick={changeScolor} /></span>
            </div>

        </div>
            {hrender && <HomePage/>}
            {srender && <SignUp/>}
            {lrender && <LoginPage setRender={setRender}/>}
    </div>
  )
}

export default AppMainNavigation