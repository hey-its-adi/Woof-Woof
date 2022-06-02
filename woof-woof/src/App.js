import React, {useState} from 'react'
import AppDashboard from './AppDashboardNavigation'
import AppMainNavigation from './AppMainNavigation'

function App() {
    const [login, setlogin] = useState(false)
  return (
    
    <div>
        {!login  && <AppMainNavigation setRender={setlogin}/>} 
        {login && <AppDashboard/>}  
    </div>
  )
}

export default App