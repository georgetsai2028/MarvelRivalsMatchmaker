const mockUserData = {
    username: "Puka",
    avatarUrl: "https://some-avatar-url.com",
    rank: "Gold",
    teamsJoined: ["Avengers", "X-Men", "Fantastic Four"],
    achievements: ["MVP of the Month", "Top Scorer"],
    playerStats: {
      gamesPlayed: 150,
      wins: 100,
      losses: 50,
    },
  };

export default function Profile() {
    return (


        <div>
          <h1>Profile</h1>
          <img src={mockUserData.avatarUrl} alt="User Avatar" />
          <p>Username: {mockUserData.username}</p>
          <p>Rank: {mockUserData.rank}</p>
          <p>Teams Joined: {mockUserData.teamsJoined.join(', ')}</p>
          <ul>
            <h3>Achievements:</h3>
            {mockUserData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          <p>Games Played: {mockUserData.playerStats.gamesPlayed}</p>
          <p>Wins: {mockUserData.playerStats.wins}</p>
          <p>Losses: {mockUserData.playerStats.losses}</p>
        </div>
      );
    }
    