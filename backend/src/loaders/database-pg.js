import Sequelize from 'sequelize';

import configs from '../config';

const models = [];

export default async () => {
  const connection = new Sequelize(configs.database.url, {
    dialectOptions: {
      ssl: false,
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  });

  models.forEach((model) => {
    model.init(connection);

    if (model.associate) {
      model.associate(connection.models);
    }
  });
};
