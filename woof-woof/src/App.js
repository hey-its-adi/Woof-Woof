import React, {useState} from 'react'
import AppDashboard from './AppDashboardNavigation'
import AppMainNavigation from './AppMainNavigation'


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