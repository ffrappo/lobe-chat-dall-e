'use client'
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import { memo } from 'react';

const Daje = memo(() => {
  const { data, loading } = useWatchPluginMessage();

  if (loading) {
    return (
      <div className="p-4 max-w-sm mx-auto">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
          <div className="h-60 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Generated Image</h1>
        </div>
        <div>
          <a href={data ? data.image_url : 'https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png'}
             target="_blank" rel="noopener noreferrer">
            <img className="w-full h-60 object-cover"
                 src={data ? data.image_url : 'https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png'}
                 alt="Generated" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Daje;