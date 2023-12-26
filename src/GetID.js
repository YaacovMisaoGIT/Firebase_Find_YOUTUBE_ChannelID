import React, { useState } from 'react';
import axios from 'axios';

function GetID() {
  const [channelId, setChannelId] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/channel-id', { url });
      setChannelId(response.data);
      setError('');
    } catch (err) {
      setError('Some error occurred');
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Enter channel URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <br />
        <button type="submit">Get Channel Id</button>
      </form>
      {channelId && <h2>Channel Id is - {channelId}</h2>}
      {error && <p>{error}</p>}
    </center>
  );
}

export default GetID;
