import { useEffect, useState } from 'react';
import TeamCard from '../components/TeamCard';

export default function Home() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('/teams.json')
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data); 
      })
      .catch((error) => console.error('Error loading team data:', error));
  }, []);

  return (
    <>
      <div>hello</div>
      <div style={{ display: 'grid', gap: '1rem', padding: '1rem' }}>
        {teamData.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </>
  );
}