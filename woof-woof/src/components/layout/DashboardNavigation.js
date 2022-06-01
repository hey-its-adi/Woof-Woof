import { useState } from "react";
import {FaDog} from 'react-icons/fa'
import {IoHomeOutline} from 'react-icons/io5'

import {CgProfile} from 'react-icons/cg'
import {GiHospitalCross} from 'react-icons/gi'
import classes from './DashboardNavigation.module.css'
import {Link} from 'react-router-dom'
import {HiOutlineUpload} from 'react-icons/hi'


function DashboardNavigation(){
    const [ucolor, setucolor] = useState('blue')
    const [hcolor, sethcolor] = useState('blue')
    const [pcolor, setpcolor] = useState('blue')
    const [acolor, setacolor] = useState('blue')

    function changeUcolor(){
        setucolor('red');
        setacolor('blue');
        sethcolor('blue');
        setpcolor('blue');
    }
    function changePcolor(){
        setpcolor('red');
        setucolor('blue');
        setacolor('blue');
        sethcolor('blue');
    }
    function changeHcolor(){
        setpcolor('blue');
        setucolor('blue');
        setacolor('blue');
        sethcolor('red');
    }
    function changeAcolor(){
        setacolor('red');
        setpcolor('blue');
        setucolor('blue');
        sethcolor('blue');
    }
      return (
    <div className={classes.TopBar}>
        <div className={classes.TopLeftBar}>
            <span><FaDog size={'3rem'}/></span>
            <h1>WOOF WOOF</h1>
        </div>    
        <div className={classes.TopRightBar}>
                <Link to='/Dashboard'>
                    <span><IoHomeOutline size={'2rem'} color={hcolor} onClick={changeHcolor} /></span>
                </Link>
                <Link to='/Upload'>
                    <span ><HiOutlineUpload size={'2rem'} color={ucolor} onClick={changeUcolor}/></span>
                </Link>
                <Link to='/Profile'>
                    <span><CgProfile size={'2rem'} color={pcolor} onClick={changePcolor}/></span>
                </Link>
                <Link to='/Achievments'>
                    <span><GiHospitalCross size={'2rem'} color={acolor} onClick={changeAcolor}/></span>
                </Link>

        </div>  

    </div>
  )
}

export default DashboardNavigation