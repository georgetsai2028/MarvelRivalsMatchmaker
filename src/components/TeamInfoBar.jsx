export default function TeamInfoBar({ region, voiceChat, gameType }) {
    return (
      <div style={{ marginBottom: '8px', fontSize: '14px', color: '#ddd', display: 'flex', gap: '10px' }}>
        <span>🌍 {region}</span>
        <span>🎤 Voice: {voiceChat ? 'Yes' : 'No'}</span>
        <span>🎮 {gameType}</span>
      </div>
    );
  }