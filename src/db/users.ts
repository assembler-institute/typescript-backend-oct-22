const mongoose = require("mongoose");
const { ObjectId } = require('bson');

function getBaseUsers() {
  return [
    {
      _id: ObjectId(),
      username: "miquel@email.com",
      name: "Miquel",
      surname: "Abella",
    },
    {
      _id: ObjectId(),
      username: "dayan@email.com",
      name: "Dayan",
      surname: "Álvarez",
    },
    {
      _id: ObjectId(),
      username: "joe@email.com",
      name: "Joe",
      surname: "Alt"
    },
    {
      _id: ObjectId(),
      username: "ynohe@email.com",
      name: "Ynohe",
      surname: "Alvarez"
    },
  ]
}

export default getBaseUsers;