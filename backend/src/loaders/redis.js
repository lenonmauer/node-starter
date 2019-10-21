import redis from 'redis';

export default () => {
  const client = redis.createClient({
    host: 'redis',
  });

  client.on('error', function(err) {
    console.log('Error ' + err);
  });

  return client;
};
