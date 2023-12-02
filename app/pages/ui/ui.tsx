import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';

const Daje = () => {
  const { data, loading } = useWatchPluginMessage();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Plugin Sent Message Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Daje;
