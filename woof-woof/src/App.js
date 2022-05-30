import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation'

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
          <Route path='/' exact element={<AllMeetupsPage/>}/>
          <Route path='/new-meetup' exact element={<NewMeetupPage/>}/>
          <Route path='/favorites' exact element={<FavoritesPage/>}/>

      </Routes>
    </React.Fragment>
  )
}
export default App;
