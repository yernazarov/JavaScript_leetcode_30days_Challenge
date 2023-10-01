import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LyricForm from './LyricForm';
import LyricDisplay from './LyricDisplay';

function LyricSearch() {
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  useEffect(() => {
  }, [artist, song]);

  const handleSearch = () => {
  };

  return (
    <div>
      <h1>Lyric Search App</h1>
      <LyricForm
        artist={artist}
        song={song}
        setArtist={setArtist}
        setSong={setSong}
        handleSearch={handleSearch}
      />
      <LyricDisplay lyrics={lyrics} />
    </div>
  );
}

export default LyricSearch;
