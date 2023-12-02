'use client'
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import { memo } from 'react';

const Daje = memo(() => {
  const { data, loading } = useWatchPluginMessage();

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse flex flex-col items-center">
          <div className="bg-gray-300 h-6 w-3/4 rounded mb-4"></div>
          <div className="h-300 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Here's your image:</h1>
      <a className="block bg-blue-600 hover:bg-blue-700 text-white text-center rounded py-2 px-4"
         href={data ? data.image_url : 'https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png'}
         target="_blank" rel="noopener noreferrer">
        <img className="mx-auto rounded shadow-lg h-300"
             src={data ? data.image_url : 'https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png'}
             alt="Generated" />
      </a>
    </div>
  );
});

export default Daje;