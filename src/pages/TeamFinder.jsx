import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import TeamFilters from '../components/TeamFilters'; // Import the filter component
import './TeamFinder.css'

export default function TeamFinder() {
  const [teamData, setTeamData] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  // Fetch team data
  useEffect(() => {
    fetch('/teams.json')
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data);
        setFilteredTeams(data); // Initialize filteredTeams with all data
      })
      .catch((error) => console.error('Error loading team data:', error));
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    const { region, gameType, rank, voiceChat, maxPlayers } = filters;

    // Filter the team data based on selected filters
    const newFilteredTeams = teamData.filter((team) => {
      return (
        (region ? team.region === region : true) &&
        (gameType ? team.gameType === gameType : true) &&
        (rank ? team.rank === rank : true) &&
        (voiceChat === false || (voiceChat === true && team.voiceChat)) &&
        (maxPlayers ? team.players <= maxPlayers : true)
      );
    });

    setFilteredTeams(newFilteredTeams); // Update filtered teams based on filters
  };

  return (
    <>
      <h1>Team Finder</h1>
      <TeamFilters onFilterChange={handleFilterChange} /> {/* Add the filter component */}
      <div style={{ display: 'grid', gap: '1rem', padding: '1rem' }}>
  {filteredTeams.map((team) => (
    <Link
      to={`/teams/${team.id}`}
      key={team.id}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <TeamCard team={team} />
    </Link>
  ))}
</div>
    </>
  );
}
