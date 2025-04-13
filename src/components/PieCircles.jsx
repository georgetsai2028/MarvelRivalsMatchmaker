export default function PieCircles({ playerAvatars, maxPlayers }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        {[...Array(maxPlayers)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #555',
              backgroundColor: '#222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {playerAvatars[i] ? (
              <img src={playerAvatars[i]} alt={`Player ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#444' }} />
            )}
          </div>
        ))}
      </div>
    );
  }
  