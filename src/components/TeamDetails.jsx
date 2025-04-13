import './TeamDetails.css';
export default function TeamDetails({ rank, players, maxPlayers }) {
  return (
    <div style={{ fontSize: '16px', color: '#fff' }}>
      <div className="flex items-center gap-2">
        🏆 Rank:
      </div>
        <img className='rank'
          src={rank}
          alt="Team Rank"
        />
      <div>👥 Players: {players}/{maxPlayers}</div>
    </div>
  );
}