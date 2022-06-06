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
    const [refreshCount, setRefreshCount] = useState(0);

    useEffect(() => {
        console.log("yes")
        const getPost = async () => {
            const res = await fetch("http://localhost:8000/Achievements",{
                credentials: 'include',
                method: 'GET',
            })
            const reponse = await res.json()
            setPost(await reponse.result)
            console.log(await reponse)
        }   
        getPost();
    }, [refreshCount])    
  
    return (
        <div className="feed">   
        <div className="refresh">
            <button onClick={() => setRefreshCount(refreshCount + 1)}>refresh</button>
        </div>    
        {Post && Post.length && Post.map((post) => {
        

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
                        <span className="feedBreedName"><SiDatadog/><h5>{post.adname}</h5></span>
                        <span className="feedContact"><MdOutlineContactPhone/><h5>{post.adphone}</h5></span>

                    </div> 
                </div>
                <div className="feedBottom">
                    <span className="feedLike"><FcLike/></span>
                    <span className="feedLikeCounter">20 People Liked it</span>
                </div>
            </div>);
        })} 

    </div>
  )
}

export default Achievements