import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Message } from '@courses-react-nx/api-interfaces';
import { addCourseRoutes, addAuthorRoutes } from './app/routes';

const app = express();

app.use((req, resp, next) => {
  setTimeout(next, 2000);
});

app.use(bodyParser.json());

app.use((req, resp, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

const greeting: Message = {
  message: 'Sorry, I cannot help you with that, Dave!?!'
};

app.get('/api', (req, res) => {
  res.send(greeting);
});

addCourseRoutes(app);
addAuthorRoutes(app);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
