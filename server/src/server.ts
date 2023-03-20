import http from 'http';
import express, { Express } from 'express';

import routes from './routes';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET');
      return res.status(200).json({});
  }
  next();
});

app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  return res.status(404).json({
      message: error.message
  });
});

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 3030;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
