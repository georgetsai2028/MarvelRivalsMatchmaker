import PieCircles from './PieCircles';
import TeamInfoBar from './TeamInfoBar';
import TeamDetails from './TeamDetails';


export default function TeamCard({team}){
    <div className="team-card" style={{ display: 'flex', gap: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
      <PieCircles playerAvatars={team.playerAvatars} maxPlayers={team.maxPlayers} />
      <div className="team-info" style={{ flex: 1 }}>
        <TeamInfoBar region={team.region} voiceChat={team.voiceChat} gameType={team.gameType} />
        <TeamDetails rank={team.rank} players={team.playerAvatars.length} maxPlayers={team.maxPlayers} />
      </div>
    </div>
}