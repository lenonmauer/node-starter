import config from './config';

import loaders from './loaders';

async function startServer() {
  const { app, Logger } = await loaders();

  app.listen(config.port, (err) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }

    Logger.info(`Server listening on port: ${config.port}`);
  });
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

startServer();
