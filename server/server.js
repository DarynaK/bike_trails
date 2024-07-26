import restify from 'restify';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = restify.createServer();

server.use(restify.plugins.queryParser());

// Example API endpoint
server.get('/api/data', (req, res, next) => {
  res.send({ message: 'Hello from the API!' });
  next()
});

const directoryPath = join(__dirname, '../client/build');

if (typeof directoryPath !== 'string' || !directoryPath) {
  throw new Error('Invalid path provided for directory');
}

server.get('/*', restify.plugins.serveStatic({
  directory: directoryPath,
  default: 'index.html'
}));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
