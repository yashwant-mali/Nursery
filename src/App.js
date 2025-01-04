import React from 'react'
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './pages/LogIn';

export default function App() {
  return (
    <div>
    <Router>
    <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
    </Routes>
</Router>




</div>
  )
}
