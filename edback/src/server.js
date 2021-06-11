//json-server


import jsonServer from 'json-server';


//cria um server - express
const server = jsonServer.create();
//retorna a rota do json-server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);

server.use(router);
server.listen(port, () => {
    console.log(`JSON server is running in ${port}`);
});