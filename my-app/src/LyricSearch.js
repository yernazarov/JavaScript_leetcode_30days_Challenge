import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import LyricForm from './LyricForm';
import LyricDisplay from './LyricDisplay';

function LyricSearch() {
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  const apiUrl = useMemo(() => {
    return `https://api.example.com/lyrics?artist=${artist}&song=${song}`;
  }, [artist, song]);
  

  const handleSearch = useCallback(() => {
    axios.get(apiUrl)
      .then((response) => {
        setLyrics(response.data.lyrics);
      })
      .catch((error) => {
        console.error('Error fetching lyrics:', error);
      });
  }, [apiUrl]);

  useEffect(() => {
    handleSearch();
  }, [artist, song, handleSearch]);

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
