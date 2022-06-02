import React from 'react'
import MainNavigation from './components/layout/MainNavigation'
import HomePage from './pages/AllMeetups';
import SignUp from './pages/signup';
import LoginPage from './pages/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function AppMainNavigation ({setRender}) {
  return (
    <div>
        <Router> 
        <MainNavigation/>  
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup'  element={<SignUp/>}/>
            <Route path='/login' element={<LoginPage setRender={setRender}/>}/>
        </Routes>
        </Router>

    </div>
  )
}

export default AppMainNavigation