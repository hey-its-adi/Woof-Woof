import React from 'react'
import {FiMoreVertical} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {SiDatadog} from 'react-icons/si'
import {GoLocation} from 'react-icons/go'
import {MdOutlineContactPhone} from 'react-icons/md'
import {TbVaccine} from 'react-icons/tb'
import {useEffect,useState} from 'react'
import classes from './Achievements.module.css'

function Achievements () {
    const [adopted, setAdopted] = useState([]);
    const [foster, setFoster] = useState([]);
    const [isAdopted, setIsAdopted] = useState(true);
  
    useEffect(() => {
        console.log("yes")
        const getPost = async () => {
            const res = await fetch("http://localhost:8000/Achievements",{
                credentials: 'include',
                method: 'GET',
            })
            const reponse = await res.json()
            setAdopted(await reponse.result)
            setFoster(await reponse.result1)
            console.log(await reponse)
        }   
        getPost();
    }, [])    

    const handleFilter = (e) => {
        const getPost = async () => {
            const res = await fetch("http://localhost:8000/Achievements",{
                credentials: 'include',
                method: 'GET',
            })
            const reponse = await res.json()
            setAdopted(await reponse.result)
            setFoster(await reponse.result1)
            console.log(await reponse)
        }   
        getPost();
        if(e.target.innerHTML === "Adopted") {
            setIsAdopted(true);
            console.log(adopted)
        } else {
            setIsAdopted(false);
            console.log(foster)
        }
    }
  
    return (
        <div className="feed">   
        <div className="refresh">
            <button className={classes.abtn} onClick={handleFilter}>Adopted</button>
            <button className={classes.fbtn}  onClick={handleFilter}>Fostered</button>
        </div>    
        {isAdopted && adopted && adopted.length ? adopted.map((post) => {
            return (<div className="feedWrapper">
                <div className='feedTop'>
                    <div className="feedTopLeft">      
                        <span className="feedUserName">{post.user}</span>
                    </div>
                    <div className="feedTopRight">
                        <FiMoreVertical/>
                    </div>
                </div>
                <div className="feedCenter">
                    <img src={post.fname} alt='' className='feedImg'/><br/>
                    <div className='feedCenterBottom'>
                        <span className="feedBreedName"><SiDatadog/><h5>{isAdopted ? post.adname : post.fosname }</h5></span>
                        <span className="feedContact"><MdOutlineContactPhone/><h5>{isAdopted ? post.adphone : post.fosphone}</h5></span>

                    </div> 
                </div>
                <div className="feedBottom">
                    <span className="feedLike"><FcLike/></span>
                    <span className="feedLikeCounter">20 People Liked it</span>
                </div>
            </div>);
        }) : <div></div>} 
        {!isAdopted && foster && foster.length ? foster.map((post) => {
            return (<div className="feedWrapper">
                <div className='feedTop'>
                    <div className="feedTopLeft">      
                        <span className="feedUserName">{post.user}</span>
                    </div>
                    <div className="feedTopRight">
                        <FiMoreVertical/>
                    </div>
                </div>
                <div className="feedCenter">
                    <img src={post.fname} alt='' className='feedImg'/><br/>
                    <div className='feedCenterBottom'>
                        <span className="feedBreedName"><SiDatadog/><h5>{isAdopted ? post.adname : post.fosname }</h5></span>
                        <span className="feedContact"><MdOutlineContactPhone/><h5>{isAdopted ? post.adphone : post.fosphone}</h5></span>

                    </div> 
                </div>
                <div className="feedBottom">
                    <span className="feedLike"><FcLike/></span>
                    <span className="feedLikeCounter">20 People Liked it</span>
                </div>
            </div>);
        }) : <div></div>} 
    </div>
  )
}

export default Achievements