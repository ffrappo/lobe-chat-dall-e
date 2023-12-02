import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import { memo, useEffect, useState } from 'react';


const Render = memo(() => {

  const message = lobeChat.getPluginMessage

  const [data, setData] = useState('https://user-images.githubusercontent.com/20684618/31289519-9ebdbe1a-aae6-11e7-8f82-bf794fdd9d1a.png');

  useEffect(() => {
    // Retrieve the current plugin message from LobeChat
    lobeChat.getPluginMessage().then((e) => {
      setData(e);
    });
  }, []);

  return <><img src={data} /></>;
});

export default Render;