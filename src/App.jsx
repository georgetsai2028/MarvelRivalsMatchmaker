import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TeamFinder from './pages/TeamFinder';
import Profile from './pages/Profile';
import TeamDetailsPage from './pages/TeamDetailsPage';

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamFinder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teams/:id" element={<TeamDetailsPage />} />
      </Routes>
    </>
  );
}

export default App
