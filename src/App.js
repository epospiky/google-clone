import React, {useState}  from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './components/AppRoutes'

function App() {
    const [darkTheme, setDarkTheme] = useState(false);


  return (
    <div className={darkTheme?'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 drak:text-gray-200 min-h-screan">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <AppRoutes/>
            <Footer/>
        </div>
    </div>
  )
}

export default App