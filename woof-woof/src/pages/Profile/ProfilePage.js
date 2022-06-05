import React from 'react'
import {FiMoreVertical} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {SiDatadog} from 'react-icons/si'
import {GoLocation} from 'react-icons/go'
import {MdOutlineContactPhone} from 'react-icons/md'
import {TbVaccine} from 'react-icons/tb'
import {useEffect,useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import classes from '../Upload/UploadPage.module.css'

function ProfilePage  ({forwardUsername})  {
  const [Post, setPost] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0);
  const [Phone, setPhone] = useState('');
  const [Auser,setAuser] = useState('');
  const [User,setUser]=useState('')
  useEffect(() => {
       getPost();
  }, [refreshCount])    

  const getPost = async ()=>{
      const res = await fetch("http://localhost:8000/Profile",{
          credentials: 'include',
          method: 'POST',
          headers :{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
           },
          body : JSON.stringify({
            "uname": forwardUsername.username
       })
      })
      const reponse = await res.json()
      setPost(await reponse.result)
  }
  async function submitHandler(event,onSubmitProps){
    event.preventDefault();


    let fd= new FormData()
    fd.append('Auser',Auser)
    fd.append('phone',Phone)
    fd.append('user',User)
    let res =  await fetch("http://localhost:8000/AdopterPop",{
            method : 'POST',
            // {/*headers :{
            //         'Accept' : 'application/json',
            //         'Content-Type': 'application/json'
            // },*/}
            body : fd
    })
    }
 
  return (
    <div className="feed">   
    <div className="refresh">
        <button onClick={() => setRefreshCount(refreshCount + 1)}>refresh</button>
    </div>    
    {Post && Post.length && Post.map((post) => {
                var string = post.fname;
                var new_string = string.replace("publicimages","");
                var new_string1 = 'http://localhost:8000/'+new_string;
        return (<div className="feedWrapper">
            <div className='feedTop'>
                <div className="feedTopLeft">      
                    <span className="feedUserName">{post.user}</span>
                    <span className="feedTime">5 mins ago</span>
                </div>
                <div className="feedTopRight">
                    <FiMoreVertical/>
                </div>
            </div>
            <div className="feedCenter">
                <img src={new_string1} alt='' className='feedImg'/><br/>
                <div className='feedCenterBottom'>
                    <span className="feedBreedName"><SiDatadog/><h5>{post.name}</h5></span>
                    <span className="feedLocation"><GoLocation/><h5>{post.location}</h5></span>
                    <span className="feedContact"><MdOutlineContactPhone/><h5>{post.phone}</h5></span>
                    <span className="feedVaccination"><TbVaccine/><h5>{post.vaccine}</h5></span>     
                </div> 
            </div>
            <div className="feedBottom">
                <span className="feedLike"><FcLike/></span>
                <span className="feedLikeCounter">20 People Liked it</span>
            </div>
            <div>
                <Popup trigger={<button> Trigger</button>} position="right center">
                <div className={classes.Upload}>
                    <div className={classes.Wrapper}>
                    <form onSubmit={submitHandler} method="POST" className={classes.form} enctype="multipart/form-data" action='/Upload'>
                            <div className={classes.control}>    
                                <label htmlFor="user">Your Name</label>
                                <input type="text" value ={post.user} name="user" id="user"  size="30" maxLength={30} required disabled  />
                            </div> 
                            <div className={classes.control}>    
                                    <label htmlFor="Auser">Adopter Name</label>
                                    <input type="text" name="Auser" id="user" size="30" maxLength={30} placeholder="Enter the Adopter Name" required />
                            </div>               


                            <div  className={classes.control}>    
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" id="phone" name="phone" value={Phone} placeholder="Enter a valid Phone number" size="12" required onChange={(e)=> setPhone(e.target.value)}/>
                            </div>       
                            <div className={classes.actions}>
                                    <button type="submit" id="submit" name="submit" onSubmit={submitHandler}>SUBMIT</button>
                            </div>
                            </form>
                    </div>
                </div>
                </Popup>
            </div>
        </div>);
    })} 

</div>
  )

}

export default ProfilePage;