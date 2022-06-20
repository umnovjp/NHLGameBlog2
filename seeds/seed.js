const sequelize = require('../config/connection');
const { User, Project, Player } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const playerData = require('./playerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const players = await Player.bulkCreate(playerData, {
    individualHooks: true,
    returning: true,
  });

  // for (const player of playerData) {
  //   await Player.create({
  //     ...player,
  //     user_id: users[Math.floor(Math.random() * players.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
