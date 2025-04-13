import { useState } from 'react';

export default function TeamFilters({ onFilterChange }) {
  const [region, setRegion] = useState('');
  const [gameType, setGameType] = useState('');
  const [rank, setRank] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ region, gameType, rank });
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <select onChange={(e) => setRegion(e.target.value)} value={region}>
        <option value="">Select Region</option>
        <option value="NA">NA</option>
        <option value="EU">EU</option>
        <option value="ASIA">Asia</option>
      </select>
      <select onChange={(e) => setGameType(e.target.value)} value={gameType}>
        <option value="">Select Game Type</option>
        <option value="Competitive">Competitive</option>
        <option value="Casual">Casual</option>
      </select>
      <select onChange={(e) => setRank(e.target.value)} value={rank}>
        <option value="">Select Rank</option>
        <option value="Diamond">Diamond</option>
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>
      </select>
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}