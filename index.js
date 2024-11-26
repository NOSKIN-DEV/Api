const jsonServer = require("json-server");
const { parentPort } = require("worker_threads");
const server = jsonServer.create();
const router = jsonServer.router("api.json");
const middwares = jsonServer.defaults();
const port =process.env.PORT || 10000;

server.use(middwares);
server.use(router);

server.listen(port);