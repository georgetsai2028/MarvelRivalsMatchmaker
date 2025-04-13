import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './TeamDetailsPage.css';

export default function TeamDetailsPage() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch('/teams.json')
      .then((res) => res.json())
      .then((data) => {
        const foundTeam = data.find((t) => String(t.id) === id);
        setTeam(foundTeam);
      });
  }, [id]);

  const handleJoinTeam = () => {
    // For now, we'll just log and redirect.
    alert(`You have joined ${team.name}!`);
    
  };

  if (!team) return <p>Loading team data...</p>;



  return (
    <>
    <div className="team-details-container">
      <h2>{team.name}</h2>
      <div className="team-meta">
        <p><strong>Region:</strong> {team.region}</p>
        <p><strong>Game Type:</strong> {team.gameType}</p>
        <p><strong>Rank:</strong> {team.rank}</p>
        <p><strong>Voice Chat:</strong> {team.voiceChat ? 'Enabled' : 'Disabled'}</p>
        <p><strong>Slots:</strong> {team.playerAvatars.length} / {team.maxPlayers}</p>
      </div>

      <div className="avatars-section">
        <h3>Players</h3>
        <div className="avatars">
          {team.playerAvatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`Player ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="description">
        <h3>About this Team</h3>
        <p>{team.description || "Ready to take down Thanos!"}</p>
      </div>

      <div className="join-team-container">
        <button className="join-team-btn" onClick={handleJoinTeam}>
          Join Team
        </button>
      </div>

    </div>
    </>
  );
}
