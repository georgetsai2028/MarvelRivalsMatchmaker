import { useState } from 'react';
import './CreateTeam.css';

export default function CreateTeam() {
  const [teamName, setTeamName] = useState('');
  const [region, setRegion] = useState('');
  const [gameType, setGameType] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');
  const [voiceChat, setVoiceChat] = useState(false);
  const [teamDescription, setTeamDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission (For now just log the data)
    const newTeam = {
      teamName,
      region,
      gameType,
      maxPlayers,
      voiceChat,
      teamDescription,
    };
    console.log('New team created:', newTeam);
  };

  return (
    <div className="create-team-page">
      <h1>Create Your Team</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="teamName">Team Name</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="region">Region</label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          >
            <option value="">Select a region</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gameType">Game Type</label>
          <select
            id="gameType"
            value={gameType}
            onChange={(e) => setGameType(e.target.value)}
            required
          >
            <option value="">Select a game type</option>
            <option value="Casual">Casual</option>
            <option value="Competitive">Competitive</option>
          </select>
        </div>

        <div className="form-group">
        <label htmlFor="maxPlayers">Max Players</label>
        <select
            id="maxPlayers"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            required
        >
            <option value="">Select max players</option>
            {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>{num}</option>
            ))}
        </select>
        </div>

        <div className="form-group">
          <label htmlFor="voiceChat">Voice Chat Enabled</label>
          <input
            type="checkbox"
            id="voiceChat"
            checked={voiceChat}
            onChange={() => setVoiceChat(!voiceChat)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="teamDescription">Team Description</label>
          <textarea
            id="teamDescription"
            value={teamDescription}
            onChange={(e) => setTeamDescription(e.target.value)}
            rows="4"
            required
          />
        </div>

        <button type="submit">Create Team</button>
      </form>
    </div>
  );
}
