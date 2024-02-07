import React from 'react'
import { BrowserRouter as Router,  Routes, Route, Navigate} from 'react-router-dom'
import Results from './Results'
import Search from './Search'
const AppRoutes = () => {
  return (
    <div className='p-4'>
        <Routes>
            <Route path="/" element={<Search/>} />
            <Route path="/search" element={<Results />} />
            <Route path="/images" element={<Results />} />
            <Route path="/news" element={<Results />} />
            <Route path="/videos" element={<Results />} />
        </Routes>
    </div>
  )
}

export default AppRoutes