'use client'
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import { memo } from 'react';

const Daje = memo(() => {
  const { data, loading } = useWatchPluginMessage();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log({data})

  return (
    <div>
      <h1>Here's your image:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data? data.image_url : 'https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png'} />
    </div>
  );
});

export default Daje;
