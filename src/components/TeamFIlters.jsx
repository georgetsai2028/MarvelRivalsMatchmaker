import { useState } from 'react';
import './TeamFilters.css'; // Import the CSS file

export default function TeamFilters({ onFilter }) {
  const [region, setRegion] = useState('');
  const [gameType, setGameType] = useState('');
  const [rank, setRank] = useState('');
  const [voiceChat, setVoiceChat] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');

  const handleFilterChange = () => {
    onFilter({ region, gameType, rank, voiceChat, maxPlayers });
  };

  return (
    <div className="team-filters">
      <h2 className="header">Search for Teams</h2>

      <div className="filter-row">
        <div className="filter-item">
          <label htmlFor="region">Region:</label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="select"
          >
            <option value="">Select Region</option>
            <option value="NA">NA</option>
            <option value="EU">EU</option>
            <option value="ASIA">ASIA</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="gameType">Game Type:</label>
          <select
            id="gameType"
            value={gameType}
            onChange={(e) => setGameType(e.target.value)}
            className="select"
          >
            <option value="">Select Game Type</option>
            <option value="Competitive">Competitive</option>
            <option value="Casual">Casual</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="rank">Rank:</label>
          <select
            id="rank"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="select"
          >
            <option value="">Select Rank</option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
            <option value="Master">Master</option>
            <option value="Grandmaster">Grandmaster</option>
          </select>
        </div>
      </div>

      <div className="filter-row">
      <div className="filter-item">
          <label htmlFor="voiceChat">Voice Chat:</label>
          <select
            id="voiceChat"
            value={voiceChat}
            onChange={(e) => setVoiceChat(e.target.value)}
            className="select"
          >
            <option value="">Select Voice Chat</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>


        <div className="filter-item">
          <label htmlFor="maxPlayers">Max Players:</label>
          <select
            id="maxPlayers"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            className="select"
          >
            <option value="">Max Players</option>
            <option value="6">6</option>
            <option value="4">4</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      <button onClick={handleFilterChange} className="button">Apply Filters</button>
    </div>
  );
}