import expressLoader from './express';
import databaseLoader from './database';
import redisLoader from './redis';
import Logger from './logger';

export default async () => {
  await databaseLoader();

  await redisLoader();

  const app = expressLoader();

  return {
    Logger,
    app,
  };
};
