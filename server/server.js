import restify from 'restify';

const server = restify.createServer();

server.use(restify.plugins.queryParser());

server.get('/api/data', (req, res, next) => {
  res.send({ message: 'Hello from the API!' });
  next()
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
