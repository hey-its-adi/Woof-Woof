import React from 'react'
import {FiMoreVertical} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {SiDatadog} from 'react-icons/si'
import {GoLocation} from 'react-icons/go'
import {MdOutlineContactPhone} from 'react-icons/md'
import {TbVaccine} from 'react-icons/tb'
import {useEffect,useState} from 'react'

function Achievements () {
    const [Post, setPost] = useState([]);
    const [adopted, setAdopted] = useState([]);
    const [foster, setFoster] = useState([]);
    const [isAdopted, setIsAdopted] = useState(true);
    const [refreshCount, setRefreshCount] = useState(0);
  
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
            setPost(await reponse.result)
            console.log(await reponse)
        }   
        getPost();
    }, [refreshCount])    

    const handleFilter = (e) => {
        //setRefreshCount(refreshCount + 1);
        if(e.target.innerHTML === "Adopted") {
            setPost(adopted)
            console.log(Post)
            setIsAdopted(true);
        } else {
            setPost(foster)
            console.log(Post)
            setIsAdopted(false);
        }
    }
  
    return (
        <div className="feed">   
        <div className="refresh">
            <button onClick={handleFilter}>Adopted</button>
            <button onClick={handleFilter}>Fostered</button>
        </div>    
        {Post && Post.length ? Post.map((post) => {
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