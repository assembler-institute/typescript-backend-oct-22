import routes from './server';
import express from 'express';
import { seedUsers, seedPosts } from './db/seed';

const CONFIG = require('./config/config');

const connect = require('./db/connect');

const app = express();

connect().then(async function onServerInit() {
  console.log('DB connected');
  // seeders
  // await seedUsers();
  // await seedPosts();
})

app.use('/api', routes);

app.listen(CONFIG.development.app.port, () => {
  console.log(`Application started on ${CONFIG.development.app.port}...`);
});
