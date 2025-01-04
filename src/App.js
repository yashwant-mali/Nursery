import React from 'react'
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';

export default function App() {
  return (
    <div>
    <Router>
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

    </Routes>
</Router>


</div>
  )
}
