import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import FeedPage from './pages/Feed/FeedPage'
import DashboardNavigation from './components/layout/DashboardNavigation';
import classes from "./App.module.css"
import UploadPage from './pages/Upload/UploadPage';
import ProfilePage from './pages/Profile/ProfilePage';

function AppDashboard({forwardUsername}) {
return(
      <div className={classes.AppContainer}>        
        <Router> 
        <DashboardNavigation/> 
        <Routes>
          <Route path='/Upload' element={<UploadPage forwardUsername={forwardUsername}/>}/>
          <Route path='/Profile' element={<ProfilePage forwardUsername={forwardUsername}/>}/>
          <Route path='/Achievments'/>
          <Route path='/Dashboard' element={<FeedPage forwardUsername={forwardUsername}/>}/>
          <Route path='*' element={<FeedPage forwardUsername={forwardUsername}/>}/>
      </Routes>
        </Router>
      </div>
)
} 


export default AppDashboard;
