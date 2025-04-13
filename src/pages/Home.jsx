import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
    <div className="home-container">
      <h1 className="home-title">🚀 Marvel Rivals Team Finder</h1>
      <p className="home-subtitle">Sick of instalocking DPS players and always being stuck on tank or support?</p>
      <p className="home-subtitle">Find your perfect squad. Conquer the universe together.</p>

      <div className="home-buttons">
        <Link to="/teams" className="home-btn">Find a Team</Link>
        <Link to="/create-team" className="home-btn">Create a Team</Link>
        <Link to="/profile" className="home-btn">Your Profile</Link>
      </div>
      <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

      <footer className="home-footer">
        <p>🌌 Unite. Strategize. Dominate</p>
      </footer>
    </div>
    </>
  );
}
