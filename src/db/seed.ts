const db = require('../Models');

import getBaseUsers from './users';
import getBasePosts from './posts';

async function seedUsers() {
  const users = getBaseUsers();

  await db.User.deleteMany({});
  await db.User.create([...users]);
}

async function seedPosts() {
  const posts = getBasePosts();

  await db.Post.deleteMany({});
  await db.Post.create([...await posts]);
}

export {
  seedUsers,
  seedPosts,
}

