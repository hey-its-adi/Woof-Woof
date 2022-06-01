import './FeedPage.css'
import {FiMoreVertical} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {SiDatadog} from 'react-icons/si'
import {GoLocation} from 'react-icons/go'
import {MdOutlineContactPhone} from 'react-icons/md'
import {TbVaccine} from 'react-icons/tb'

const FeedPage = () => {
  return (
    <div className="feed">        
        <div className="feedWrapper">
            <div className='feedTop'>
                <div className="feedTopLeft">      
                    <span className="feedUserName">sample username</span>
                    <span className="feedTime">5 mins ago</span>
                </div>
                <div className="feedTopRight">
                    <FiMoreVertical/>
                </div>
            </div>
            <div className="feedCenter">
                <img src='/5.jpg' alt='' className='feedImg'/><br/>
                <div className='feedCenterBottom'>
                    <span className="feedBreedName"><SiDatadog/><h5>Golden retriever</h5></span>
                    <span className="feedLocation"><GoLocation/><h5>chennai</h5></span>
                    <span className="feedContact"><MdOutlineContactPhone/><h5>9123456789</h5></span>
                    <span className="feedVaccination"><TbVaccine/><h5>Not vaccinated</h5></span>     
                </div> 
            </div>
            <div className="feedBottom">
                <span className="feedLike"><FcLike/></span>
                <span className="feedLikeCounter">20 People Liked it</span>
            </div>
        </div>
        <div className="feedWrapper">
            <div className='feedTop'>
                <div className="feedTopLeft">      
                    <span className="feedUserName">sample username</span>
                    <span className="feedTime">5 mins ago</span>
                </div>
                <div className="feedTopRight">
                    <FiMoreVertical/>
                </div>
            </div>
            <div className="feedCenter">
                <img src='/5.jpg' alt='' className='feedImg'/><br/>
                <div className='feedCenterBottom'>
                    <span className="feedBreedName"><SiDatadog/><h5>Golden retriever</h5></span>
                    <span className="feedLocation"><GoLocation/><h5>chennai</h5></span>
                    <span className="feedContact"><MdOutlineContactPhone/><h5>9123456789</h5></span>
                    <span className="feedVaccination"><TbVaccine/><h5>Not vaccinated</h5></span>     
                </div> 
            </div>
            <div className="feedBottom">
                <span className="feedLike"><FcLike/></span>
                <span className="feedLikeCounter">20 People Liked it</span>
            </div>
        </div>
        <div className="feedWrapper">
            <div className='feedTop'>
                <div className="feedTopLeft">      
                    <span className="feedUserName">sample username</span>
                    <span className="feedTime">5 mins ago</span>
                </div>
                <div className="feedTopRight">
                    <FiMoreVertical/>
                </div>
            </div>
            <div className="feedCenter">
                <img src='/5.jpg' alt='' className='feedImg'/><br/>
                <div className='feedCenterBottom'>
                    <span className="feedBreedName"><SiDatadog/><h5>Golden retriever</h5></span>
                    <span className="feedLocation"><GoLocation/><h5>chennai</h5></span>
                    <span className="feedContact"><MdOutlineContactPhone/><h5>9123456789</h5></span>
                    <span className="feedVaccination"><TbVaccine/><h5>Not vaccinated</h5></span>     
                </div> 
            </div>
            <div className="feedBottom">
                <span className="feedLike"><FcLike/></span>
                <span className="feedLikeCounter">20 People Liked it</span>
            </div>
        </div>
    </div>
  )
}

export default FeedPage