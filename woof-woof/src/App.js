import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/AllMeetups';
import MainNavigation from './components/layout/MainNavigation'
import SignUp from './pages/signup';
import LoginPage from './pages/Login';


function App() {
return(
      <div>
        <Router>
        <MainNavigation/>
        <Routing/>
        </Router>
      </div>
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
