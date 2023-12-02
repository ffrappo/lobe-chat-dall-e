'use client';
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import { memo } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';

const Daje = memo(() => {
  const { data, loading } = useWatchPluginMessage();
  const placeholderImage = 'https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png';
  const imageSrc = data ? data.image_url : placeholderImage;

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
          <div className="h-60 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="shadow-xl rounded-lg overflow-hidden">
        <div>
          <a href={imageSrc} target="_blank">
            <img className="w-full max-h-75 object-cover rounded-t-lg"
                 src={imageSrc}
                 alt="Generated" 
                 style={{ maxHeight: '300px' }}
                 />
          </a>
        </div>
        <div className="p-4">
          <a href={imageSrc} target="_blank" className="flex items-center text-sm text-gray-500 hover:text-gray-800">
            <span>View Image <LinkIcon className="ml-1 w-4 h-4" style={{width: '10px', display: 'inline-block', position: 'relative', top: '-3px'}} /></span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Daje;