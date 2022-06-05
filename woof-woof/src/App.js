import React, {useState} from 'react'
import AppDashboard from './pages/MainDashboard/AppDashboardNavigation'
import AppMainNavigation from './pages/HomeNavigation/AppMainNavigation'


function App() {
    const [login, setlogin] = useState({
      render: false,
      username: null,
    })

  return (
    
    <div>
        {!login.render  && <AppMainNavigation setRender={setlogin}/>} 
        {login.render && <AppDashboard forwardUsername={login}/>} 
    </div>
  )
}

export default App