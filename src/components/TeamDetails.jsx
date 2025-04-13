export default function TeamDetails({ rank, players, maxPlayers }) {
    return (
      <div style={{ fontSize: '16px', color: '#fff' }}>
        <div>🏆 Rank: {rank}</div>
        <div>👥 Players: {players}/{maxPlayers}</div>
      </div>
    );
  }
  