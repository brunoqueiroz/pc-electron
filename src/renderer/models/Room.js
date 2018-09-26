import sequelize from "../datastore";
const Sequelize = require('sequelize');

export default sequelize.define('Room', {
  name: Sequelize.STRING,
  number: Sequelize.STRING,
  responsible: Sequelize.STRING
});

// Room.sync();
//
// export default Room;