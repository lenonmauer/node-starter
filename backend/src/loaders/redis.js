import redis from 'redis';

import configs from '../config/index';

export default () => {
  const client = redis.createClient(configs.redis);

  client.on('error', function(err) {
    console.log('Error ' + err);
  });

  return client;
};
