import mongoose from 'mongoose';

import configs from '../config';

export default async () => {
  const connection = await mongoose
    .connect(configs.database.url, {
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
