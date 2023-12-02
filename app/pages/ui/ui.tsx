import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import { FC, memo, useEffect, useState } from 'react';

const Render: FC = memo(() => {
  const [data, setData] = useState<string>('https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png');

  useEffect(() => {
    // Retrieve the current plugin message from LobeChat
    lobeChat.getPluginMessage().then((e: string) => {
      setData(e);
    });
  }, []);

  return <><img src={data} alt="Generated Image" /></>;
});

export default Render;