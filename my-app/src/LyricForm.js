import React from 'react';

function LyricForm({ artist, song, setArtist, setSong, handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Song"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default LyricForm;
