import { Link } from 'react-router-dom';
import PieCircles from './PieCircles';
import TeamInfoBar from './TeamInfoBar';
import TeamDetails from './TeamDetails';
import './TeamCard.css';

export default function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.id}`} className="team-card-link">
      <div className="team-card">
        <div className="team-header" style={{ marginBottom: '10px' }}>
          <TeamInfoBar region={team.region} voiceChat={team.voiceChat} gameType={team.gameType} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <PieCircles playerAvatars={team.playerAvatars} maxPlayers={team.maxPlayers} />
          <div className="team-info">
            <TeamDetails rank={team.rank} players={team.playerAvatars.length} maxPlayers={team.maxPlayers} />
          </div>
        </div>
      </div>
    </Link>
  );
}
