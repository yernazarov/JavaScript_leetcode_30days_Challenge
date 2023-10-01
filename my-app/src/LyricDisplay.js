import React from 'react';

function LyricDisplay({ lyrics }) {
  return (
    <div>
      <h2>Lyrics</h2>
      <pre>{lyrics.join('\n')}</pre>
    </div>
  );
}

export default LyricDisplay;
