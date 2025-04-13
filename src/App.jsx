
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TeamFinder from './pages/TeamFinder';
import Profile from './pages/Profile';

import './App.css'

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamFinder />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App
