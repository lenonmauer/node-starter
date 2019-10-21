import mongoose from 'mongoose';

import config from '../config';

export default async () => {
  const connection = await mongoose
    .connect(config.databaseURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      console.log('mongo connection success.');
      return connection;
    })
    .catch((err) => console.log('mongo connection fails.', err));

  return connection.connection.db;
};
