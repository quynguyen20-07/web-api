const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 6000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`Welcome to coffee api server!`);
  console.log(`Port = ${PORT}`);
});
