import { useState } from "react";
import {FaPaw} from 'react-icons/fa'
import {IoHomeOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {GiHospitalCross} from 'react-icons/gi'
import classes from './DashboardNavigation.module.css'
import {Link} from 'react-router-dom'
import {HiOutlineUpload} from 'react-icons/hi'


function DashboardNavigation(){
    const [ucolor, setucolor] = useState('white')
    const [hcolor, sethcolor] = useState('white')
    const [pcolor, setpcolor] = useState('white')
    const [acolor, setacolor] = useState('white')

    function changeUcolor(){
        setucolor('#cd7918');
        setacolor('white');
        sethcolor('white');
        setpcolor('white');
    }
    function changePcolor(){
        setpcolor('#cd7918');
        setucolor('white');
        setacolor('white');
        sethcolor('white');
    }
    function changeHcolor(){
        setpcolor('white');
        setucolor('white');
        setacolor('white');
        sethcolor('#cd7918');
    }
    function changeAcolor(){
        setacolor('#cd7918');
        setpcolor('white');
        setucolor('white');
        sethcolor('white');
    }
    return (      
    <div className={classes.TopBar}>
        <div className={classes.TopLeftBar}>
            <span><FaPaw size={'4.2rem'}/></span>
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
                <Link to='/Achievements'>
                    <span><GiHospitalCross size={'2rem'} color={acolor} onClick={changeAcolor}/></span>
                </Link>

        </div>  

    </div>
  )
}

export default DashboardNavigation