const server = require('./src/server.js');
const sequelize = require('./src/config/db.js');

sequelize.sync();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
