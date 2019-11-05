require('dotenv').config();

const server = require("./Api/server.js");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
