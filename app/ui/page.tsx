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
      <h1>Plugin Sent Message Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data} />
    </div>
  );
});

export default Daje;
