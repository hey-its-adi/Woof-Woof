import React, {useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import FeedPage from '../Feed/FeedPage'
import DashboardNavigation from './DashboardNavigation';
import classes from "./App.module.css"
import UploadPage from '../Upload/UploadPage';
import ProfilePage from '../Profile/ProfilePage';
import Achievements from '../Achievements/Achievements';

function AppDashboard({forwardUsername,setRender}) {
  const [refreshCount, setRefreshCount] = useState(0);
return(
      <div className={classes.AppContainer}>        
        <Router> 
        <DashboardNavigation setRender={setRender}/> 
        <Routes>
          <Route path='/Dashboard' element={<FeedPage forwardUsername={forwardUsername} refreshCount={setRefreshCount}/>}/>
          <Route path='*' element={<FeedPage forwardUsername={forwardUsername} refreshCount={setRefreshCount}/>}/>
          <Route path='/Upload' element={<UploadPage forwardUsername={forwardUsername}/>}/>
          <Route path='/Profile' element={<ProfilePage forwardUsername={forwardUsername}/>}/>
          <Route path='/Achievements'element={<Achievements/>}/>
      </Routes>
        </Router>
      </div>
)
} 


export default AppDashboard;
