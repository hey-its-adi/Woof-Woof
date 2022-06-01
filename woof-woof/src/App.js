import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/AllMeetups';
import MainNavigation from './components/layout/MainNavigation'
import SignUp from './pages/signup';
import LoginPage from './pages/Login';
import FeedPage from './pages/Feed/FeedPage'
import DashboardNavigation from './components/layout/DashboardNavigation';
import classes from "./App.module.css"

function App() {
return(
      <div className={classes.AppContainer}>
        
        <Router>
        {/*<MainNavigation/>
        <Routing/>*/}    
        <DashboardNavigation/>  
        <Routing1/>
        </Router>
      
      </div>
)
} 
const Routing1=()=>{
  return(
      <>
      <Routes>
          <Route path='/Upload'/>
          <Route path='/Profile'/>
          <Route path='/Achievments'/>
          <Route path='/Dashboard' element={<FeedPage/>}/>
      </Routes>
      </>
  )
}
const Routing = ()=>{
  return(
    <React.Fragment>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup'  element={<SignUp/>}/>
          <Route path='/login' element={<LoginPage/>}/>

      </Routes>
    </React.Fragment>
  )
}
export default App;
