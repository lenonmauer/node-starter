import expressLoader from './express';
import databaseLoader from './database';
import Logger from './logger';

export default async () => {
  await databaseLoader();

  const app = expressLoader();

  return {
    Logger,
    app,
  };
};
