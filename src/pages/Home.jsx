import TeamCard from '../components/TeamCard';
import teamData from '../data/teams.json'; 

export default function Home(){
    return (
        <div style={{ display: 'grid', gap: '1rem', padding: '1rem' }}>
      {teamData.map(team => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
    )
}