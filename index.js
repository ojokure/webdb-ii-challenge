const server = require("./Api/server.js");

const port = process.env.PORT || 3200;

server.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
