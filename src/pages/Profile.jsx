import './Profile.css';

const mockUserData = {
  username: "Puka",
  avatarUrl: "/spidey.png",
  rank: "Gold",
  teamsJoined: ["Avengers", "X-Men", "Fantastic Four"],
  achievements: ["🏆 MVP of the Month", "🎖️ Top Scorer"],
  playerStats: {
    gamesPlayed: 150,
    wins: 100,
    losses: 50,
  },
};

export default function Profile() {
  return (
    <>
    <div className="profile-container">
      <h1 className="profile-title">👨‍🚀 Puka</h1>
      <div className="profile-card">
        <img className="profile-avatar" src={mockUserData.avatarUrl} alt="User Avatar" />
        <div className="profile-info">
          <p><strong>Username:</strong> {mockUserData.username}</p>
          <p><strong>Rank:</strong> {mockUserData.rank}</p>
          <p><strong>Teams Joined:</strong> {mockUserData.teamsJoined.join(', ')}</p>
          <div>
            <h3>🚀 Achievements</h3>
            <ul>
              {mockUserData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="stats-section">
            <h3>🛰️ Player Stats</h3>
            <p><strong>Games Played:</strong> {mockUserData.playerStats.gamesPlayed}</p>
            <p><strong>Wins:</strong> {mockUserData.playerStats.wins}</p>
            <p><strong>Losses:</strong> {mockUserData.playerStats.losses}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}