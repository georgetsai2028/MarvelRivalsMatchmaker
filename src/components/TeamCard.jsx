import PieCircles from './PieCircles';
import TeamInfoBar from './TeamInfoBar';
import TeamDetails from './TeamDetails';

export default function TeamCard({ team }) {
  return (
    <div className="team-card" style={{ display: 'flex', gap: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', flexDirection: 'column' }}>
      {/* Team Info at the Top */}
      <div className="team-header" style={{ marginBottom: '10px' }}>
        <TeamInfoBar region={team.region} voiceChat={team.voiceChat} gameType={team.gameType} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Pie Circles for Player Avatars */}
        <PieCircles playerAvatars={team.playerAvatars} maxPlayers={team.maxPlayers} />

        {/* Player Info (Rank and Players) */}
        <div className="team-info">
          <TeamDetails rank={team.rank} players={team.playerAvatars.length} maxPlayers={team.maxPlayers} />
        </div>
      </div>
    </div>
  );
}